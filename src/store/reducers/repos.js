import { getReposByUserName } from '../../utils/api'

export const GET_REPOS_REQUESTED = 'api/GET_REPOS_REQUESTED'
export const GET_REPOS = 'api/REPOS'

const initialState = {
  repos: [],
  reposLoading: false
}

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_REPOS_REQUESTED:
      return {
        ...state,
        reposLoading: true
      }

    case GET_REPOS: {
      return {
        ...state,
        repos: action.data,
        reposLoading: !state.reposLoading
      }
    }


    default:
      return state
  }
}

export const getRepos = (userName) => {
  return dispatch => {
    dispatch({
      type: GET_REPOS_REQUESTED
    })

    return getReposByUserName(userName)
      .then((data) => {
        dispatch({
          type: GET_REPOS,
          data
        })
      })
  }
}