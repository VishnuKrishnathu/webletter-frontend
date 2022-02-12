/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,

  async rewrites(){
    return [
      {
        source: '/blogs/:blog_id(\\D+)',
        destination: '/page-not-found'
      }
    ];
  }
};
