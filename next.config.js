const withVideos = require('next-videos');

module.exports = withVideos({
  async headers() {
    return [
      {
        source: '/_next/static/videos/(.*)|/_next/static/(.*).(mp4|webm)', // Add the pattern for .mp4 and .webm files
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=3600', // Example: Cache for 1 hour
          },
          {
            key: 'Content-Type',
            value: 'video/mp4', // Example: Set Content-Type for mp4 files
          },
          // Add other headers as needed
        ],
      },
    ];
  },
  
  // other configurations...

  // Specify other Next.js configurations as needed

  // No need for the 'static' key here

  // Additional configurations go here
});
