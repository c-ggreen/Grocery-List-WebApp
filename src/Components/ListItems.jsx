import React, { Component } from 'react';
import Item from './Item';
import List from "../Data/ListData"

// CONTAINS THE LIST ITEMS and LIST INPUT
class ListItems extends Component {
    constructor(){
        super()
        this.state = {
            list: List,
            item: '',
            brand: '',
            units: '',
            quantity: 0,
        }
    }

    // A function is needed for each individual key to be able to change each individual key value. If all keys are in the same function, then they all mimic the same value when typing on the DOM because they'll share the same input.
        changeItem = (input)=>{
            this.setState({
                item: input,
            })
        }
        changeBrand = (input)=>{
            this.setState({
                    brand: input,
                })
        
        }
        changeUnits = (input)=>{
            this.setState({
                units: input,
            })
        }
        changeQuantity = (input)=>{
            this.setState({
                quantity: input
            })

        }

    addToList = (input) =>{
        let listArray = this.state.list

        listArray.push(input)

        this.setState({
            list: listArray,
            item: '',
            brand: '',
            units: '',
            quantity: 0,
        })
    } 

    render() {
        return (
            <div className="listItems">

                <div className="listInput">
                    <div className="inputs">

                        <input type="text" 
                        placeholder="Item"
                        value={this.state.item}
                        onChange={
                            (event)=>{
                                this.changeItem(event.target.value)
                            }
                        }
                        />

                        <input type="text" 
                        placeholder="Brand"
                        value={this.state.brand}
                        onChange={
                            (event)=>{
                                this.changeBrand(event.target.value)
                            }
                        }
                        />

                        <input type="text" 
                        placeholder="Units"
                        value={this.state.units}
                        onChange={
                            (event)=>{
                                this.changeUnits(event.target.value)
                            }
                        }
                        />

                        <input type="number" 
                        placeholder="Quantity"
                        value={this.state.quantity}
                        onChange={
                            (event)=>{
                                this.changeQuantity(event.target.value)
                            }
                        }
                        />

                    </div>

                    <button onClick={()=>this.addToList(this.state.item, this.state.brand, this.state.units, this.state.quantity)}>Add Item</button>

                </div>

                    {console.log(this.state.item)}

                {this.state.list.map((item, i)=>{
                    return  <Item key={i} 
                    item={item.item} 
                    brand={item.brand}
                    units={item.units}
                    quantity={item.quantity}
                    /> 
                })}
                
            </div>
        );
    }
}

export default ListItems;