import React from 'react';
import unsplash from '../api/unsplash'
import SearchBar from './SearchBar';
import ImageList from './ImageList'

class App extends React.Component {

    state = {
        images: [],
    }

    // Options to check AJEX request is completed or not 

    // Promise based syntax that uses '.them' statement called when the request get completed

    // onSearchSubmit(term) {
    //     axios.get('https://api.unsplash.com//search/photos', {
    //         params: { query: term },
    //         headers: { Authorization: 'Client-ID QTo_ptBh7HKbwpjH6Js-o2jChMAbwRQBeN3zI_i77rQ' }
    //     }).then(response => {
    //         console.log('response: ', response);
    //     });
    // };

    // Alternate

    // async await syntax 

    // onSearchSubmit = async (term) => {
    //     const response = await axios.get('https://api.unsplash.com/search/photos', {
    //         params: { query: term },
    //         headers: { Authorization: 'Client-ID QTo_ptBh7HKbwpjH6Js-o2jChMAbwRQBeN3zI_i77rQ' }
    //     });

    //     this.setState({ images: response.data.results })
    // };

    // separate common file for common things like header and base URL

    onSearchSubmit = async (term) => {
        const response = await unsplash.get('/search/photos', {
            params: { query: term },
        });
        this.setState({ images: response.data.results });
    };

    render() {
        return (
            <div className="ui container" style={{ marginTop: '20px' }}>
                <SearchBar onSubmit={this.onSearchSubmit} />
                <h3>Found : {this.state.images.length} results</h3>
                {this.state.images.length > 0 ?
                    <ImageList images={this.state.images} />
                    :
                    <h1>No data Found</h1>
                }
            </div>
        );
    };
};

export default App;
