// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
  status: number
  message: string
  timestamp: string
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {

  fetch("https://brickplanet.com").then((resp) => {
    if (resp.ok) {
      res.status(200).json({
        status: 200,
        message: "BrickPlanet is up and running",
        timestamp: new Date().toISOString()
      })
    }
  })
}
