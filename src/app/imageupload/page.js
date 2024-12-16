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
    <div className="w-full h-screen border border-dashed bg-white dark:bg-black border-neutral-200 dark:border-neutral-800 rounded-lg">
      <FileUpload />
    </div>
  );
}
