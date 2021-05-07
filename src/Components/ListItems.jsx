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


        // 
        const newObject = {
            item: this.state.item,
            brand: this.state.brand,
            units: this.state.units,
            quantity: this.state.quantity,
            isPurchased: false            
        }
        
        // 
        listArray.push(newObject)

        this.setState({

            // Have to set the key values equal to the state so that they copy the value of that state (which is the input); if you don't then an empty string or undefined is returned.
            list: listArray,

        })
        console.log(this.state.list);
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

                        <input type="text" 
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

                {this.state.list.map((item, i)=>{
                    return  <Item key={i} 

                    // IMPORTANT: The regular items are coming from the pre-made list array, hence item.item, item.brand, etc.; To access the new input values to add additional list items, you have to create props that are tied to the STATE and not the existing array
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