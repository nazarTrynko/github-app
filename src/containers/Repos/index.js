import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import ReposView from './ReposView'
import { getRepos } from '../../store/reducers/api'

const mapStateToProps = (state) => ({
  repos: state.api.repos,
  reposLoading: state.api.reposLoading
})

const mapDispatchToProps = dispatch => bindActionCreators({
  getRepos
}, dispatch)

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ReposView)