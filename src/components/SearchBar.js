import React from "react";

class SearchBar extends React.Component {
	state = { term: "" };

	onFormSubit = (event) => {
		event.preventDefault();

		this.props.onFormSubmit(this.state.term);
		// TODO: Make sure we call
		// callback from parent component
	};

	render() {
		return (
			<div className="search-bar ui segment">
				<form className="ui form" onSubmit={this.onFormSubit}>
					<div className="field">
						<label>Video Search</label>
						<input
							type="text"
							value={this.state.term}
							onChange={(event) => this.setState({ term: event.target.value })}
						></input>
					</div>
				</form>
			</div>
		);
	}
}

export default SearchBar;
