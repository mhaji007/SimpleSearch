import React from 'react';
import axios from 'axios';
import SearchBar from './SearchBar';


class App extends React.Component {

     // initialize state with an empty array of images
    state = {images:[]};
    
    // Make call to API
    async onSearchSubmit(term) {
       const response = await axios.get('https://api.unsplash.com/search/photos',{
            params: {query: term},
            headers:{
                Authorization: 'Client-ID 3Xmtoa5J-Amw2moRXwcUU9Kxp7qHAeJj6RxTsTuhF1E'

            }
        });

        this.setState({images: response.data.results});
    }

    render() {
        return(
        <div className="ui container" style={{marginTop :'10px'}}>
            <SearchBar onSubmit={this.onSearchSubmit} />
            Found:{this.state.images.length} images
        </div>
        );
    };
}

export default App;
