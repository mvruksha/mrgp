import Image from "next/image";

export default function PropertyImages({ images, title }) {
  if (!images || images.length === 0) return null;

  return (
    <div className="grid gap-6 mb-12">
      {/* First Row - 2 Images */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {images.slice(0, 2).map((src, idx) => (
          <div key={idx} className="rounded-xs overflow-hidden shadow-md">
            <Image
              src={src}
              alt={`${title} Image ${idx + 1}`}
              width={600}
              height={400}
              className="object-cover w-full h-72"
            />
          </div>
        ))}
      </div>

      {/* Second Row - 1 Big Image */}
      {images[2] && (
        <div className="rounded-xs overflow-hidden shadow-md">
          <Image
            src={images[2]}
            alt={`${title} Image 3`}
            width={1200}
            height={600}
            className="object-cover w-full h-96"
          />
        </div>
      )}

      {/* If more images are there, show them in 3 columns */}
      {images.length > 3 && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
          {images.slice(3).map((src, idx) => (
            <div key={idx} className="rounded-xs overflow-hidden shadow-md">
              <Image
                src={src}
                alt={`${title} Extra Image ${idx + 4}`}
                width={600}
                height={400}
                className="object-cover w-full h-60"
              />
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
