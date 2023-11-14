const { Pool } = require('pg')
require('dotenv').config()

const pool = new Pool({
  connectionString: "postgres://default:pNtSV1Wgdv7f@ep-wispy-hall-56012643-pooler.us-east-1.postgres.vercel-storage.com:5432/verceldb?sslmode=require",
})