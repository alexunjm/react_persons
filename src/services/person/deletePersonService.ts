import Axios, { AxiosRequestConfig } from 'axios'
import { moduleName } from '.'

const deletePersonService: (id: string) => Promise<any> = async (
  id: string
): Promise<any> => {
  const config: AxiosRequestConfig = {
    method: 'delete',
    url: `/api/${moduleName}/${id}`,
    headers: {},
  }

  const response = await Axios(config)
  const data = response.data

  return data
}

export default deletePersonService
