import Axios, { AxiosRequestConfig } from 'axios'

const deletePersonService: () => Promise<any> = async (): Promise<any> => {
  const config: AxiosRequestConfig = {
    method: 'delete',
    url: 'localhost:8080/persons',
    headers: {},
  }

  const response = await Axios(config)
  const data = response.data

  return data
}

export default deletePersonService
