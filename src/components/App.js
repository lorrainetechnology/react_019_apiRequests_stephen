import React from 'react';
import unsplash from '../api/unsplash';
import SearchBar from './SearchBar';
import ImageList from './imageList';

class App extends React.Component {
    state = { images: [] };

    onSearchSubmit = async (term) => {
        const response = await unsplash.get('/search/photos', {
            params: { query: term },
            headers: {
                Authorization: 'Client-ID 6dbRcOPVjYhNc94jxluD7Vt7HZ3ypcu3F8r-kA24a5o'
            }
        });

        this.setState({ images : response.data.results });
    }

    render() {
        return (
        <div className='ui container' style={{marginTop: '10px'}}>
            <SearchBar onSubmit={this.onSearchSubmit}/>
            <ImageList images={this.state.images}/>
        </div>
        );
    }
}

export default App;