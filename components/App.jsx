import React, {Component} from 'react'
import EntrySection from './entries/EntrySection.jsx'
import EntryTabs from './entries/EntryTabs.jsx'
import Socket from '../socket.js'

class App extends Component {
	
	constructor(props) {
		super(props)
		this.state = {
			entries: []
		}
	}

	// Hook method provided by React components that's called ONCE after initial render() completes
	componentDidMount() {
		console.log("mouting")
		let ws = new WebSocket('ws://localhost:4000')
		let socket = this.socket = new Socket(ws)
		socket.on('entry add', this.addEntry.bind(this))
		socket.on('error', this.error.bind(this))
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

	addEntry(entry) {		
		let {entries} = this.state
		entries.push({
			id: entries.length, 
			data: entry
		})
		this.setState({entries})
	}

	error(err) {
		alert("Error found: " + err);
	}

	executeQuery(collection, query) {
		this.setState({entries: []})
		console.log("emmiting collection=" + collection + ", query=" + query)
		this.socket.emit(
			'query execute', 
			{
				collection: collection, 
				query: query
			}
		)
	}
}

export default App