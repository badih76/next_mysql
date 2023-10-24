/** @type {import('next').NextConfig} */
const nextConfig = {experimental: {
    appDir: true,
  },
  env: {
    host: '', 
    port: '3306', 
    user: '',
    password: '', 
    database: '',

    host_dev: 'localhost', 
    port_dev: '3307', 
    user_dev: '',
    password_dev: '', 
    database_dev: ''   
  }
}

module.exports = nextConfig
