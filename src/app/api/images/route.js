// app/api/images/route.js
import { v2 as cloudinary } from "cloudinary";
import { NextResponse } from "next/server";

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

// GET - Fetch all images
export async function GET(request) {
  try {
    const { searchParams } = new URL(request.url);
    const folder = searchParams.get("folder") || "";
    const maxResults = parseInt(searchParams.get("max_results")) || 100;

    const result = await cloudinary.search
      .expression(folder ? `folder:${folder}` : "resource_type:image")
      .sort_by("created_at", "desc")
      .max_results(maxResults)
      .execute();

    return NextResponse.json({
      images: result.resources,
      total: result.total_count,
    });
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

// DELETE - Delete image by public_id
export async function DELETE(request) {
  try {
    const { public_id } = await request.json();

    if (!public_id) {
      return NextResponse.json(
        { error: "public_id is required" },
        { status: 400 },
      );
    }

    const result = await cloudinary.uploader.destroy(public_id);

    if (result.result === "ok") {
      return NextResponse.json({
        success: true,
        message: "Image deleted successfully",
      });
    } else {
      return NextResponse.json(
        { error: "Failed to delete image" },
        { status: 400 },
      );
    }
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
