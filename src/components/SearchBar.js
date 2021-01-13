import React from 'react';


class SearchBar extends React.Component {

    state = {
        term: '',
    }

    // onInputChange() {
    //     // console.log(event.target.value);
    //     console.log(this.state.term);
    // };

    onFormSubmit = (event) => {
        event.preventDefault();
        this.props.onSubmit(this.state.term);
    }


    render() {
        return (
            <div className="ui segment">
                <form onSubmit={this.onFormSubmit} className="ui form">
                    <div className="field">
                        <label>Image Search</label>
                        {/* <input type="text" onChange={this.onInputChange} /> */}
                        {/* <input type="text" onChange={this.onInputChange} /> */}
                        <input
                            type="text"
                            value={this.state.term}
                            onChange={(e) => this.setState({ term: e.target.value })}
                            placeholder="search image"
                        />
                    </div>
                </form>
            </div>
        );
    };
};

export default SearchBar;