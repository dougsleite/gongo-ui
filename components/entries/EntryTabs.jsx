import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {Tabs} from 'material-ui/Tabs'
import EntrySection from './EntrySection.jsx'
import {Tab} from 'material-ui/Tabs'

class EntryTabs extends Component {
	render() {
		return(
		    <Tabs>
		    	{ this.props.collections.map(c => {
	    			return(
	    				<Tab label={c.name} key={c.id}>		
			    			<EntrySection
			    				{...this.props}
			    			/>
		    			</Tab>
	    			)
		    	})}
		    </Tabs>
		)
	}
}

EntryTabs.props = {
	// Inbound properties
	executeQuery: PropTypes.func.isRequired,
	entries: PropTypes.array.isRequired,
	collections: PropTypes.array.isRequired
}

export default EntryTabs