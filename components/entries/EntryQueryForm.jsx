import React, {Component} from 'react'
import TextField from 'material-ui/TextField'
import PropTypes from 'prop-types'

class EntryQueryForm extends Component {
	
	constructor(props) {
		super(props)
		this.state = {
			query: '',
			collection: ''
		}
	}	

	onSubmit(e) {
		e.preventDefault()
		this.props.executeQuery(this.state.collection, this.state.query)
		this.setState({
      		query: ''
    	});
	}

	handleQueryChange(e) {
		this.setState({
      		query: e.target.value
    	});
	}

	handleCollectionChange(e) {
		this.setState({
      		collection: e.target.value
    	});
	}	

	render() {
		return(
			<div>
			    <TextField
			      hintText="Select a collection..."
			      floatingLabelText="Collection"
			      fullWidth={true}
			      value={this.state.collection}
			      onChange={this.handleCollectionChange.bind(this)}
			    />				
				<form onSubmit={this.onSubmit.bind(this)}>			
				    <TextField
				      hintText="Type a query and press Enter..."
				      floatingLabelText="Query"
				      fullWidth={true}
				      value={this.state.query}
				      onChange={this.handleQueryChange.bind(this)}
				    />			
				</form>
			</div>
		)
	}
}

EntryQueryForm.propTypes = {
	// Outbound properties
	executeQuery: PropTypes.func.isRequired
}

export default EntryQueryForm