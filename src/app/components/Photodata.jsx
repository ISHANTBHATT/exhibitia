export const photos = [
  "/images/1.jpg",
  "/images/2.jpg",
  "/images/3.jpg",
  "/images/4.jpg",
  "/images/5.jpg",
  "/images/6.jpg",
  "/images/7.jpg",
  "/images/8.jpg",
  "/images/9.jpg",
  "/images/10.jpg",
  "/images/11.jpeg",
  "/images/12.jpeg",
  "/images/13.jpeg",
  "/images/14.jpeg",
];

export async function getPhotos() {
  // In a real application, you might fetch this data from an API or database
  return photos.map((src, index) => ({
    id: index,
    src,
    height: Math.floor(Math.random() * 300 + 200), // Random height for demonstration
  }));
}
