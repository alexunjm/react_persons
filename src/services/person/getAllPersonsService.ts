import Axios, { AxiosRequestConfig } from 'axios'

const getAllPersonsService: () => Promise<any> = async (): Promise<any> => {
  const config: AxiosRequestConfig = {
    method: 'get',
    url: 'localhost:8080/persons',
    headers: {},
  }

  const response = await Axios(config)
  const data = response.data

  return data
}

export default getAllPersonsService
