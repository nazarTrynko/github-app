import axios from 'axios'

import config from '../constants/config'

const createApi = (options) =>
  axios.create({ ...options })

const githubClient = createApi({ baseURL: config.githubApiUrl })

// extracts data object from response
const returnData = ({ data }) => data

export const getUser = (userName) => {
  return githubClient.get(`/users/${userName}`).then(returnData)
}

export const getReposByUserName = (userName) => {
  return githubClient.get(`/users/${userName}/repos?type=all`).then(returnData)
}
