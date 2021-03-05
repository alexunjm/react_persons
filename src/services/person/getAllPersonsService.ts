import Axios, { AxiosRequestConfig } from 'axios'
import { moduleName } from '.'

const getAllPersonsService: () => Promise<any> = async (): Promise<any> => {
  const config: AxiosRequestConfig = {
    method: 'get',
    url: `/api/${moduleName}`,
    headers: {},
  }

  const response = await Axios(config)
  const data = response.data

  return data
}

export default getAllPersonsService
