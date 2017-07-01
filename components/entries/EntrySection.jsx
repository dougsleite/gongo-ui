import React, {Component} from 'react'
import PropTypes from 'prop-types'
import EntryQueryForm from './EntryQueryForm.jsx'
import EntryList from './EntryList.jsx'

const styles = {
	headline: {
		fontSize: 24,
		paddingTop: 16,
		marginBottom: 12,
		fontWeight: 400
	}
}

class EntrySection extends Component {
	render() {
		return(
			<div>	
			 	<h1 style={styles.headline}>Gongo</h1>		 	
				<EntryQueryForm {...this.props}/>
				<EntryList {...this.props}/>
			</div>
		)
	}
}

EntrySection.props = {
	// Inbound properties
	executeQuery: PropTypes.func.isRequired,
	entries: PropTypes.array.isRequired
}

export default EntrySection

