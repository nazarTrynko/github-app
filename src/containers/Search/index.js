import { push } from 'react-router-redux'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import SearchView from './SearchView'

const mapDispatchToProps = dispatch => bindActionCreators({
  showRepos: (userId) => push(`/repos/${userId}`)
}, dispatch)

export default connect(
  null,
  mapDispatchToProps
)(SearchView)