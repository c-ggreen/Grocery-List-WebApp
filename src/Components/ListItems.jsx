import React, { Component } from 'react';
import Item from './Item';
import List from "../Data/ListData"

// CONTAINS THE LIST ITEMS
class ListItems extends Component {
    constructor(){
        super()
        this.state = {
            list: List,
            item: '',
            brand: '',
            units: '',
            quantity: 0,
            isPurchased: false
        }
    }

    purchasedItem=()=>{
        this.setState({
            isPurchased: true,
        })
    }

    render() {
        return (
            <div className="listItems">
                
                {this.state.list.map((item)=>{
                    return  <Item item={item.item} brand={item.brand} units={item.units} quantity={item.quantity} isPurchased={this.state.isPurchased} purchasedItem={this.purchasedItem}/> 
                })}
                
            </div>
        );
    }
}

export default ListItems;