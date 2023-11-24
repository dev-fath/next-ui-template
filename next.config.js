const basePath = process.env.BASE_PATH ?? '' // get `basePath` for your use-case

/** @type {import('next').NextConfig} */
const nextConfig = {
  basePath, env: {
    basePath
}
}

module.exports = nextConfig
