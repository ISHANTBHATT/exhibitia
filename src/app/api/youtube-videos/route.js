import { NextResponse } from "next/server";

export async function GET() {
  try {
    const channelId = process.env.YOUTUBE_CHANNEL_ID;
    const apiKey = process.env.YOUTUBE_API_KEY;
    const apiURL = process.env.YOUTUBE_API_URL;

    if (!channelId || !apiKey || !apiURL) {
      throw new Error("Missing environment variables");
    }

    const response = await fetch(
      `${apiURL}?key=${apiKey}&channelId=${channelId}&part=snippet,id&order=date&maxResults=9`
    );

    if (!response.ok) {
      throw new Error("Failed to fetch videos");
    }

    const data = await response.json();
    const videos = data.items.map((item) => ({
      id: item.id.videoId,
      title: item.snippet.title,
      thumbnail: item.snippet.thumbnails.medium.url,
    }));

    return NextResponse.json(videos);
  } catch (error) {
    console.error("Error fetching videos:", error);
    return NextResponse.json(
      { error: "Failed to load videos" },
      { status: 500 }
    );
  }
}
