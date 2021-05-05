import React, { Component } from 'react';
import ListInput from './ListInput';
import ListItems from './ListItems';


// Contains the LIST INPUT AND THE LIST ITEMS CONTAINERS
class ListContainer extends Component {
    render() {
        return (
            <div className="listContainer">
                <ListInput/>
                <ListItems/>
            </div>
        );
    }
}

export default ListContainer;