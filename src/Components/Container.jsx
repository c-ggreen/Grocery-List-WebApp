import React from 'react';
import Header from './Header';
import ListContainer from './ListContainer';


// Is the CONTAINER for ALL COMPONENTS
function Container(props) {
    return (
        <div className="container">
            <Header/>
            <ListContainer/>
        </div>
    );
}

export default Container;