import React, {Component} from 'react'
import PropTypes from 'prop-types'
import JSONPretty from 'react-json-pretty'
import 'react-json-pretty/JSONPretty.monikai.styl'

class EntryList extends Component {
  render() {
    return(
      <div>
        {
          this.props.entries.map(e => {
            return(
              <JSONPretty id="json-pretty" json={e.data}></JSONPretty>
            )
          })
        }
      </div>
    )
  }
}

EntryList.propTypes = {
	entries: PropTypes.array.isRequired
}

export default EntryList