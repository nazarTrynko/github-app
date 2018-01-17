import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import ReposView from './ReposView'
import { getRepos } from '../../store/reducers/repos'

const mapStateToProps = (state) => ({
  repos: state.repos.repos,
  reposLoading: state.repos.reposLoading
})

const mapDispatchToProps = dispatch => bindActionCreators({
  getRepos
}, dispatch)

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ReposView)