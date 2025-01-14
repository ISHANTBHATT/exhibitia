"use client";
import React, { useState } from "react";
import { FileUpload } from "@/components/ui/file-upload";

export default function FileUploadDemo() {
  const [files, setFiles] = useState([]);
  const handleFileUpload = (files) => {
    setFiles(files);
    console.log(files);
  };

  return (
    <div className="py-20 w-full h-full border border-dashed bg-white  border-neutral-200  rounded-lg ">
      <p className="font-bold text-2xl text-center font-serif pt-10">
        Upload Actual Pictures
      </p>
      <FileUpload api="upload" />
      <p className="font-bold text-2xl text-center font-serif pt-10">
        Upload 3D Design
      </p>
      <FileUpload api="upload/folder" />
    </div>
  );
}
