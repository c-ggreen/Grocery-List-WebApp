import React, { Component } from 'react';


// Responsible for POPULATING EACH INDIVIDUAL ITEM
class Item extends Component {
    constructor(props){
        super(props)
    }
    render() {
        return (
            <div className="item">
                <label htmlFor="" >
                    <input type="checkbox" onClick={this.props.purchasedItem} />
                </label>
                <h4>Item: {this.props.item}</h4>
                <h4>Brand: {this.props.brand}</h4>
                <h4>Units: {this.props.units}</h4>
                <h4>Quantity: {this.props.quantity}</h4>
            </div>
        );
    }
}

export default Item;