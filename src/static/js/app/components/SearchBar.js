import React from 'react';

export default class SearchBar extends React.Component {
  handleChange = (e) => {
    this.props.onUserInput(
      this.refs.searchTextInput.value
    );
  }
  
  render() {
    return(
      <form>
        <div className="form-group">
          <input
              type="text"
              placeholder="Search..."
              ref="searchTextInput"
              value={this.props.searchText}
              onChange={this.handleChange}
              className="form-control"
          />
        </div>
      </form>
    );
  }
}
