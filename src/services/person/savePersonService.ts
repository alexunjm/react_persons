import Axios, { AxiosRequestConfig } from 'axios'
import { v4 as uuid } from 'uuid'
import { moduleName, Person } from '.'

const savePersonService: (person: Person) => Promise<any> = async ({
  firstname,
  lastname,
  age,
}: Person): Promise<any> => {
  const config: AxiosRequestConfig = {
    method: 'post',
    url: `/api/${moduleName}`,
    headers: {},
    data: {
      id: uuid(),
      firstname,
      lastname,
      age,
    },
  }

  const response = await Axios(config)
  const data = response.data

  return data
}

export default savePersonService
