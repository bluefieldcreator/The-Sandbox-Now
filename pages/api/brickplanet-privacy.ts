// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

export type response = {
    name: string,
    description: string
    date: string,
    data: {
        [key: string]: string
    }
}

const privacyStatus: response[] = [
    {
        name: "Privacy Policy",
        description: "BrickPlanet's privacy policy",
        date: "15/07/2022",
        data: {
            refunds: "Unkown",
            accounts: "Unkown",
            purchases: "Unkown",
            ip: "Unkown"
        }
    },
    {
        name: "Transparency Report",
        description: "BrickPlanet's transparency report",
        date: "15/07/2022",
        data: {
            income: "Unkown",
            expenses: "Unkown",
            net: "Unkown",
            tax: "Unkown",
            profit: "Unkown",
            hires: "Uknown"
        }
    }
]

type Data = {
    data: response[]
}

export default function handler(
    req: NextApiRequest,
    res: NextApiResponse<Data>
) {
    res.status(200).json({
        data: privacyStatus
    })
}