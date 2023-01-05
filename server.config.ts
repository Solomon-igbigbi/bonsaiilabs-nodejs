const config =  {
  apiName: process.env.API_NAME ?? null,
  port: process.env.API_PORT ?? 4000,
  enviroment: process.env.API_ENVIRONMENT ?? 'development',
}

export default config;