import axios from 'axios'

const githubClient = createApi({ baseURL: 'https://api.github.com' })

export function getUser(userName) {
  return githubClient.get(`/users/${userName}`).then((returnData))
}

export function getReposByUsername(userName) {
  return githubClient.get(`/users/${userName}/repos`).then(returnData)
}

const returnData = ({ data }) => data

function createApi(options) {
  return axios.create({
    ...options
  })
}