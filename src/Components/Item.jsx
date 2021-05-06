import React, { Component } from 'react';


// Responsible for POPULATING EACH INDIVIDUAL ITEM
class Item extends Component {
    constructor(props){
        super(props)
        this.state = {
            isPurchased: false,
        }
    }

    // This function is responsible for turning the isPurchased value of each child component to true.
    purchasedItem=()=>{
        this.setState({
            isPurchased: true,
        })
    }
    render() {
        return (
            <div className="item">

                {/* Whenever a user clicks the checkbox, the isPurchased value turns to true */}
                <label htmlFor="" onClick={()=>this.purchasedItem()}>
                    <input type="checkbox"/>
                </label>

                {/* These are the values of each item */}
                {/* The or operator (||) allows the child to display the new items added to the list */}
                <h4>Item: {this.props.item || this.props.newItem}</h4>
                <h4>Brand: {this.props.brand || this.props.newBrand}</h4>
                <h4>Units: {this.props.units || this.props.newUnits}</h4>
                <h4>Quantity: {this.props.quantity || this.props.newQuantity}</h4>

            </div>
        );
    }
}

export default Item;