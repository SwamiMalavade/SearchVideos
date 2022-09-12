import React from "react";

class SearchBar extends React.Component {
    state= {term: ''};

    handleChange= (event)=> {
        this.setState({term: event.target.value})
    }

    handleSubmit= (event)=> {
        event.preventDefault();
    }

  render() {
    return (
      <div className="search-bar ui segment">
        <form className="ui form" onSubmit={this.handleSubmit}>
          <div className="field">
            <label>Search Videos</label>
            <input type="text" value={this.state.term} onChange={this.handleChange} />
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;