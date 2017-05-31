import React, {Component} from 'react'
import EntrySection from './entries/EntrySection.jsx'
import EntryTabs from './entries/EntryTabs.jsx'

class App extends Component {
	
	constructor(props) {
		super(props)
		this.state = {
			entries: []
		}
	}

	executeQuery(collection, query) {
		console.log("Collection: " + collection + " - Query: " + query)
		let {entries} = this.state
		entries.push({
			id: entries.length, 
			data: 
			'\{\n'+
				'\"_id\" : ObjectId(\"5564bddfe4b09ed4795e240d\"),\n' +
				'\"letterId\" : \"6171523b-83c8-4e50-abde-37b9782ea435\",\n' +
				'\"messageClass\" : \"FasStudentNotificationEvent\",\n' +
				'\"status\" : \"INVALID_LETTER_CODE\"\n' +
			'}'
		})
		this.setState({entries})
	}

	render(){ 
		return(
			<div>
				<EntrySection
					entries={this.state.entries}
					executeQuery={this.executeQuery.bind(this)}
				/>
			</div>
		)
	}
}

export default App