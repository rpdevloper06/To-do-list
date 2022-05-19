import React, { Component } from 'react';
import './style/style.css';



class Project extends Component {
    constructor(props) {
        super(props);
        this.state = {
            item: [], // variable for list items
            txtContent: "" // store txtChange value to txtContent
        };
    }


    txtChange = (e) => {
        this.setState({ txtContent: e.target.value }); // set txtChange value to txtContent variable
    }

    addItem = (a) => {

        let currentText = this.state.txtContent; // current text is the text currently in the txtContent = e.target.value
        let currentItem = this.state.item; // item currently in the item variable
        currentItem.push(currentText); // adding currentItem (item) to currentText (e.target.value)
        this.setState({ item: currentItem }) // set currentItem to item
    }


    deleteItem = (i) => {
        let currentItem = this.state.item; // item currently in the item variable
        currentItem.splice(i, 1); // delete item (i to 1) from currentItem
        this.setState({ item: currentItem }) // set currentItem to item

    }


    editItem = (e) => {
        let currentItem = this.state.item;
        //currentItem.f
        this.setState({ item: currentItem })
    }

    render() {
        return (
            <div className="pro_container">
                <div className="pro_header">
                    <h1>ALT Projects</h1>
                    <div className="pro_form">

                        <input className="itemBox" type="text" onChange={this.txtChange} />
                        <button className="add_btn" onClick={this.addItem}>Add Project</button>

                    </div>
                </div>
                <div className="pro_list">
                    <ul>

                        {this.state.item.map((item, k) => {
                            return (

                                <li className="itemList p5"> {item}<div className="btn_container"> <button className="del_btn" onClick={() => { this.deleteItem(k) }}>Done</button></div></li>
                            )
                        })}
                    </ul>

                </div>

            </div>

        );
    }
}

export default Project;