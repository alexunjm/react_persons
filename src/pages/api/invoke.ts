import Axios, { AxiosRequestConfig, Method } from 'axios'
import { NextApiResponse } from 'next'

export const invoke = (
  method: Method,
  url: string,
  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
  data: any,
  res: NextApiResponse<any>
): void => {
  const config: AxiosRequestConfig = {
    method,
    url,
    headers: {},
    data,
    timeout: 4000,
  }

  Axios(config)
    .then((value) => {
      const { info, data } = value.data
      res.status(info.status).json({ ...data })
    })
    .catch((err) => {
      try {
        let { status, statusText, data } = err.response
        if (typeof data == 'string') {
          return res.status(status).json({ err: statusText })
        }
        data = { ...data }
        status = data.status || status
        statusText = data.message || statusText
        res.status(status).json({ err: statusText })
      } catch (error) {
        const { status, statusText } = err.response
        return res.status(status).json({ err: statusText })
      }
    })
}
