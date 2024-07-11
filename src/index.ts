import { Prisma, PrismaClient } from '@prisma/client'
import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import routes from './routes'

const prisma = new PrismaClient()
const app = express()
const port = process.env.APP_PORT || 5000

app.use(cors({ origin: 'http://localhost:*' }))
app.use(express.json())
app.use(routes)

app.get(`/`, async (req, res) => {
  res.status(200).json({ hello: 'world' })
})

app.listen(port, () => {
  console.log(`Server listening on port ${port}`)
})

export default app