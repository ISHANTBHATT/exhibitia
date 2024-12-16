"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";

export default function UploadForm({ onUploadComplete }) {
  const [file, setFile] = useState(null);
  const [uploading, setUploading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!file) return;

    setUploading(true);

    try {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = async () => {
        const base64Data = reader.result;
        const res = await fetch("/api/upload", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ file: base64Data }),
        });

        if (res.ok) {
          const data = await res.json();
          console.log("Uploaded successfully!", data.url);
          onUploadComplete();
        } else {
          console.error("Upload failed.");
        }
      };
    } catch (error) {
      console.error("Error:", error);
    } finally {
      setUploading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="mb-4">
      <input
        type="file"
        accept="image/*"
        onChange={(e) => setFile(e.target.files?.[0] || null)}
      />
      <Button
        type="submit"
        disabled={!file || uploading}
        className="bg-secondary hover:bg-neutral-700"
      >
        {uploading ? "Uploading..." : "Upload"}
      </Button>
    </form>
  );
}
