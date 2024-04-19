'use client'
import React , { useState } from "react";
import { Button } from "@/components/ui/button"
import SvgIcon from './Svg'
export function Upload() {

    const [imageSrc, setImageSrc] = useState<string | null>(null);

    const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      console.log(event.target.files);
      const file = event.target.files?.[0];
      if (file && file.type.startsWith('image')) {
        const reader = new FileReader();
        reader.onloadend = () => {
          if (typeof reader.result === 'string') {
            setImageSrc(reader.result);
          }
        };
        reader.readAsDataURL(file);
      } else {
        setImageSrc(null);
      }
    };

    const handleRemoveImage = () => {
        setImageSrc(null);
        const fileInput = document.getElementById('file-upload') as HTMLInputElement;
        if (fileInput) fileInput.value = '';
    };

  return (
    <div
      key="1"
      className="flex flex-col items-center justify-center min-h-screen bg-gray-100 px-4 md:px-6"
    >
      <div className="max-w-md w-full space-y-8">
        <div className="space-y-4 text-center">
          <h1 className="text-3xl font-bold text-gray-900">KYC Verification using OCR</h1>
          <p className="text-gray-600 ">Upload Aadhaar photo to see KYC Verification</p>
        </div>
        <div className="bg-white rounded-lg shadow-md p-6 w-full">
          <div className="flex flex-col items-center justify-center space-y-4">
            <div className="w-full max-w-xs">
              <label className="block text-sm font-medium text-gray-700" htmlFor="file-upload">
                Upload Aadhaar Photo
              </label>
              <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
                <div className="space-y-1 text-center">
                  <UploadIcon className="mx-auto h-12 w-12 text-gray-400" />
                  <div className="flex text-sm text-gray-600 ">
                    <label
                      className="relative cursor-pointer bg-white rounded-md font-medium text-indigo-600 hover:text-indigo-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500"
                      htmlFor="file-upload"
                    >
                      <span>Upload a file</span>
                      <input className="sr-only" id="file-upload" name="file-upload" type="file" onChange={handleFileChange} />
                    </label>
                    <p className="pl-1">or drag and drop</p>
                  </div>
                  <p className="text-xs text-gray-500 ">PNG, JPG, GIF up to 10MB</p>
                </div>
              </div>
            </div>
            <div className="w-full max-w-xs relative">
                {imageSrc ? (
                    <>
                      <img
                        alt="Aadhaar Photo Preview"
                        className="rounded-md object-cover mx-auto h-[200px] w-[300px]"
                        src={imageSrc}
                      />
                      <button
                        onClick={handleRemoveImage}
                        className="absolute top-0 right-0 bg-white rounded-full p-1 m-2 cursor-pointer"
                        title="Remove image"
                      >
                        <XIcon />
                      </button>
                    </>
                  ) : (
                    <div className="rounded-md object-cover mx-auto h-[200px] w-[300px]">
                      <SvgIcon />
                    </div>
                  )}
              </div>
              <div className="w-full max-w-xs flex flex-row gap-8">
              <Button className="w-1/2" variant="outline" disabled={!imageSrc} onClick={handleRemoveImage}>Clear</Button>
              <Button className="w-1/2" disabled={!imageSrc}>Verify</Button>
              </div>
          </div>
        </div>
      </div>
    </div>
  )
}

function UploadIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
      <polyline points="17 8 12 3 7 8" />
      <line x1="12" x2="12" y1="3" y2="15" />
    </svg>
  )
}


function XIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M18 6 6 18" />
      <path d="m6 6 12 12" />
    </svg>
  )
}
