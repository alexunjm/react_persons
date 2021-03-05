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

  await Axios(config)

  return config.data.id
}

export default savePersonService
