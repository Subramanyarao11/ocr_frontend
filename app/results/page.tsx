'use client'
import { useSearchParams } from 'next/navigation'
import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import { Button } from '@/components/ui/button'
import { ArrowLeft, Loader2 } from 'lucide-react'
import { useToast } from '@/components/ui/use-toast'
import { ToastAction } from '@/components/ui/toast'

interface VerificationData {
  data?: {
    'Adhaar Number': string
    'Date of Birth': string
    'ID Type': string
    Name: string
    Sex: string
    _id: string
  }
  message: string
  result: string
}

const ResultsPage = () => {
  const { toast } = useToast()
  const searchParams = useSearchParams()
  const verificationData = searchParams.get('verificationData')
  const [data, setData] = useState<VerificationData | null>(null)
  const [result, setResult] = useState('')
  const router = useRouter()
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    if (verificationData) {
      try {
        const decodedData = JSON.parse(decodeURIComponent(verificationData))
        console.log(decodedData)
        setData(decodedData)
        setResult(decodedData.result)
        // for mock data
        // setResult("Failed")
        setLoading(false)
      } catch (error) {
        console.error('Failed to parse verification data:', error)
        toast({
          variant: 'destructive',
          title: 'Uh oh! Something went wrong.',
          description: 'Failed to parse verification data',
          action: (
            <ToastAction onClick={handleBackClick} altText='Try again'>
              Try again
            </ToastAction>
          ),
        })
        setLoading(false)
      }
    } else {
      setLoading(false)
    }
  }, [verificationData])

  const handleBackClick = () => {
    router.push('/')
  }

  const verificationStatusClass =
    result === 'Passed'
      ? 'bg-green-100 text-green-700'
      : 'bg-red-100 text-red-700'

  if (loading) {
    return (
      <div className='flex justify-center items-center min-h-screen'>
        <Loader2 className='h-10 w-10 animate-spin' />
      </div>
    )
  }

  return (
    <div className='flex flex-col items-center justify-center min-h-screen bg-gray-100 px-4 md:px-6'>
      <div className='w-full max-w-xs'>
        <div className='w-full max-w-xs'>
          <div className='bg-white rounded-lg shadow-md p-6 w-full'>
            <div className='flex flex-col items-center justify-center space-y-4'>
              <div className='flex items-center justify-around'>
                <ArrowLeft
                  onClick={handleBackClick}
                  className='cursor-pointer'
                />
                <h2 className='text-lg font-medium text-gray-700 ml-2'>
                  Verification Results
                </h2>
                <div></div>
              </div>
              <div className='w-full max-w-xs'>
                <label
                  className='block text-sm font-medium text-gray-700 '
                  htmlFor='name'
                >
                  Name
                </label>
                <input
                  className='block w-full p-2 border border-slate-200  rounded-md focus:ring-indigo-500 focus:border-indigo-500 '
                  id='name'
                  type='text'
                  value={data?.data?.Name || 'No data'}
                  readOnly
                />
              </div>
              <div className='w-full max-w-xs'>
                <label
                  className='block text-sm font-medium text-gray-700 dark:text-gray-300'
                  htmlFor='aadhar'
                >
                  Aadhar Number
                </label>
                <input
                  className='block w-full p-2 border border-slate-200 rounded-md focus:ring-indigo-500 focus:border-indigo-500'
                  id='aadhar'
                  type='text'
                  value={data?.data?.['Adhaar Number'] || 'No data'}
                  readOnly
                />
              </div>
              <div className='w-full max-w-xs'>
                <label
                  className='block text-sm font-medium text-gray-700'
                  htmlFor='gender'
                >
                  Gender
                </label>
                <input
                  className='block w-full p-2 border border-slate-200 rounded-md focus:ring-indigo-500 focus:border-indigo-500 '
                  id='gender'
                  type='text'
                  value={data?.data?.Sex || 'No data'}
                  readOnly
                />
              </div>
              <div className='w-full max-w-xs'>
                <label
                  className='block text-sm font-medium text-gray-700'
                  htmlFor='dob'
                >
                  Date of Birth
                </label>
                <input
                  className='block w-full p-2 border border-slate-200  rounded-md focus:ring-indigo-500 focus:border-indigo-500 '
                  id='dob'
                  type='text'
                  value={data?.data?.['Date of Birth'] || 'No data'}
                  readOnly
                />
              </div>
              <div className='w-full max-w-xs'>
                <div
                  className={`w-full max-w-xs bg-green-100 text-center rounded-md p-4 ${verificationStatusClass}`}
                >
                  Verification Status:{' '}
                  {result === 'Passed' ? 'Verified' : 'Failed'}
                </div>
                {result !== 'Passed' && (
                  <Button
                    onClick={handleBackClick}
                    className='mt-4 w-full max-w-xs'
                  >
                    Try Again
                  </Button>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ResultsPage
