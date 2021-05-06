import React, { Component } from 'react';
import ListItems from './ListItems';


// Contains the LIST ITEMS CONTAINERS
class ListContainer extends Component {
    render() {
        return (
            <div className="listContainer">
                <ListItems/>
            </div>
        );
    }
}

export default ListContainer;