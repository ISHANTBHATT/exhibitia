import { v2 as cloudinary } from "cloudinary";
import { NextResponse } from "next/server";

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

export async function GET() {
  try {
    const result = await cloudinary.search
      .expression("resource_type:image AND folder:projects")
      .sort_by("created_at", "desc")
      .max_results(100)
      .execute();

    const photos = result.resources.map((resource, index) => ({
      id: index,
      src: resource.secure_url,
      height: resource.height,
      width: resource.width,
    }));

    return NextResponse.json(photos);
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
