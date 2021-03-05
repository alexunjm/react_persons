// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import { NextApiRequest, NextApiResponse } from 'next'
import { Method } from 'axios'
import { invoke } from '../invoke'

const apiURI = 'http://localhost:8080'

const handler = (req: NextApiRequest, res: NextApiResponse): void => {
  const {
    query: { model },
  } = req

  const method: Method = (req.method as Method) || 'get'
  const url = apiURI + '/' + (model as string)
  const data = req.body

  return invoke(method, url, data, res)
}
export default handler
