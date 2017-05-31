import React, {Component} from 'react'
import PropTypes from 'prop-types'
import MobileTearSheet from '../util/MobileTearSheet.jsx'
import {List, ListItem, makeSelectable} from 'material-ui/List'
import Avatar from 'material-ui/Avatar'
import Subheader from 'material-ui/Subheader'


let SelectableList = makeSelectable(List);

function wrapState(ComposedComponent) {
  return class SelectableList extends Component {
    static propTypes = {
      children: PropTypes.node.isRequired,
      defaultValue: PropTypes.number.isRequired,
    };

    componentWillMount() {
      this.setState({
        selectedIndex: this.props.defaultValue,
      });
    }

    handleRequestChange = (event, index) => {
      this.setState({
        selectedIndex: index,
      });
    };

    render() {
      return (
        <ComposedComponent
          value={this.state.selectedIndex}
          onChange={this.handleRequestChange}
        >
          {this.props.children}
        </ComposedComponent>
      );
    }
  };
}

SelectableList = wrapState(SelectableList);

class EntryList extends Component {
  render() {
    return(
      <SelectableList defaultValue={0}>
        <Subheader>Results</Subheader>
          {
            this.props.entries.map(e => {
              return(
                <ListItem
                  key={e.id}
                  value={e.id}
                  primaryText={e.data}
                  leftAvatar={<Avatar src="images/json-icon.png" />}               
                />                  
              )
            })
          }   
      </SelectableList>
    )
  }
}

EntryList.propTypes = {
	entries: PropTypes.array.isRequired
}

export default EntryList;