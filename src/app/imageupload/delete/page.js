"use client";
import { useState, useEffect } from "react";
import Image from "next/image";

export default function ImageGallery() {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [deleting, setDeleting] = useState(null);
  const [filter, setFilter] = useState("");
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchImages();
  }, [filter]);

  const fetchImages = async () => {
    try {
      setLoading(true);
      setError(null);
      const url = filter
        ? `/api/images?folder=${encodeURIComponent(filter)}`
        : "/api/images";
      const response = await fetch(url);
      const data = await response.json();

      if (response.ok) {
        setImages(data.images);
      } else {
        setError(data.error || "Failed to fetch images");
      }
    } catch (err) {
      setError("Failed to fetch images");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (public_id) => {
    if (!confirm("Are you sure you want to delete this image?")) return;

    try {
      setDeleting(public_id);
      const response = await fetch("/api/images", {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ public_id }),
      });

      const data = await response.json();

      if (response.ok) {
        setImages(images.filter((img) => img.public_id !== public_id));
      } else {
        alert(data.error || "Failed to delete image");
      }
    } catch (err) {
      alert("Failed to delete image");
      console.error(err);
    } finally {
      setDeleting(null);
    }
  };

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    });
  };

  const formatBytes = (bytes) => {
    if (bytes === 0) return "0 Bytes";
    const k = 1024;
    const sizes = ["Bytes", "KB", "MB", "GB"];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return Math.round((bytes / Math.pow(k, i)) * 100) / 100 + " " + sizes[i];
  };

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-7xl mx-auto">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">
            Image Gallery
          </h1>

          {/* <div className="flex gap-4 items-center">
            <input
              type="text"
              placeholder="Filter by folder (e.g., projects)"
              value={filter}
              onChange={(e) => setFilter(e.target.value)}
              className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button
              onClick={fetchImages}
              className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
            >
              Refresh
            </button>
          </div> */}

          {images.length > 0 && (
            <p className="mt-4 text-gray-600">
              Showing {images.length} image{images.length !== 1 ? "s" : ""}
            </p>
          )}
        </div>

        {error && (
          <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg text-red-700">
            {error}
          </div>
        )}

        {loading ? (
          <div className="flex justify-center items-center h-64">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
          </div>
        ) : images.length === 0 ? (
          <div className="text-center py-16">
            <svg
              className="mx-auto h-12 w-12 text-gray-400"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
              />
            </svg>
            <h3 className="mt-2 text-sm font-medium text-gray-900">
              No images found
            </h3>
            <p className="mt-1 text-sm text-gray-500">
              {filter
                ? "Try changing the folder filter"
                : "Upload some images to get started"}
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {images.map((image) => (
              <div
                key={image.public_id}
                className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
              >
                <div className="relative h-48 bg-gray-200">
                  <Image
                    src={image.secure_url}
                    alt={image.public_id}
                    fill
                    className="object-cover"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  />
                </div>

                <div className="p-4">
                  <p className="text-sm font-medium text-gray-900 truncate mb-2">
                    {image.public_id.split("/").pop()}
                  </p>

                  <div className="space-y-1 text-xs text-gray-500 mb-4">
                    <p>
                      {image.width} × {image.height}
                    </p>
                    <p>{formatBytes(image.bytes)}</p>
                    <p>{formatDate(image.created_at)}</p>
                    {image.folder && (
                      <p className="truncate">
                        <span className="font-medium">Folder:</span>{" "}
                        {image.folder}
                      </p>
                    )}
                  </div>

                  <div className="flex gap-2">
                    <a
                      href={image.secure_url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 px-3 py-2 text-sm bg-gray-100 text-gray-700 rounded hover:bg-gray-200 transition-colors text-center"
                    >
                      View
                    </a>
                    <button
                      onClick={() => handleDelete(image.public_id)}
                      disabled={deleting === image.public_id}
                      className="flex-1 px-3 py-2 text-sm bg-secondary text-white rounded hover:bg-red-700 transition-colors disabled:bg-red-400 disabled:cursor-not-allowed"
                    >
                      {deleting === image.public_id ? (
                        <span className="flex items-center justify-center">
                          <svg
                            className="animate-spin h-4 w-4"
                            viewBox="0 0 24 24"
                          >
                            <circle
                              className="opacity-25"
                              cx="12"
                              cy="12"
                              r="10"
                              stroke="currentColor"
                              strokeWidth="4"
                              fill="none"
                            />
                            <path
                              className="opacity-75"
                              fill="currentColor"
                              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                            />
                          </svg>
                        </span>
                      ) : (
                        "Delete"
                      )}
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
