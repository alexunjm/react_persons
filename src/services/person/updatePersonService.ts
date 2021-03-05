import Axios, { AxiosRequestConfig } from 'axios'
import { moduleName, Person } from '.'

const updatePersonService: (
  id: string,
  person: Person
) => Promise<any> = async (
  id: string,
  { firstname, lastname, age }: Person
): Promise<any> => {
  const config: AxiosRequestConfig = {
    method: 'put',
    url: `/api/${moduleName}/${id}`,
    headers: {},
    data: {
      id,
      firstname,
      lastname,
      age,
    },
  }

  const response = await Axios(config)
  const data = response.data

  return data
}

export default updatePersonService
