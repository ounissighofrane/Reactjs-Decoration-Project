import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import tutorialServies from '../services/tutorial.servies';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee,faSearch, faUserCircle, faPlus,faShoppingCart, faTrash } from '@fortawesome/free-solid-svg-icons';


export class Panier extends Component {
    constructor(props) {
        super(props);

        this.state = {
            produits: [],
            id:"",
            Total: 0,
            client: []
        };
        this.decr = this.decr.bind(this);
        this.increment = this.increment.bind(this);
    }

    componentDidMount() {
        console.log(this.state.produits)
        tutorialServies.getPanier(this.state.client["id"]).then((res) => {
            this.setState({ produits: res.data });
         this.setState({ id: this.state.client["id"] });
        });
        console.log(this.state.produits)
        
        
        //this.setState({ Total : })
        console.log('hell')
    }
    componentWillUpdate(prevProps, prevState) {
       // console.log(prevState.produits)
        let x=0;
        for (let Q in prevState.produits){
            x+=prevState.produits[Q]["qteStock"]*prevState.produits[Q]["prix"];
            
            
        }
        document.getElementById("dem").innerHTML=x;
        document.getElementById("tot").innerHTML=x+10;
        //this.setState({Total:x});
        //console.log(this.state.Total)
    }   
    
    componentWillMount() {
        localStorage.getItem('user') && this.setState({
            client: JSON.parse(localStorage.getItem('user'))
        });
        console.log(this.state.produits)
    }
    commander() {
        tutorialServies.addCommande(this.state.id).then((res) => {
            toast.success("commande passée avec succée");
            this.sleep(2000).then(r => {
                window.location.reload(false);
                  })
         })
         
         
    }
    sleep = (milliseconds) => {
        return new Promise(resolve => setTimeout(resolve, milliseconds))
    }
    decr(i) {
        tutorialServies.decrement(this.state.client["id"], i);
        window.location.reload(false);
        console.log("decrement" + i)
    }
    increment(i) {
        tutorialServies.increment(this.state.client["id"], i);
        window.location.reload(false);
        console.log("increment" + this.state.client["id"] + i);
    }
    del(i) {
        tutorialServies.del(this.state.client["id"], i);
        window.location.reload(false);
    }
    // <button class="btn-minus"><i class="fa fa-minus"></i></button>
    //                                            <input type="text" value="1"/>
    //                                         <button class="btn-plus"><FontAwesomeIcon icon={faPlus}  /><i ></i></button>
    render() {
        return (
            <div>
                <div class="cart-page">
                    <div class="container-fluid">
                        <div class="row">
                            <div class="col-lg-8">
                                <div class="cart-page-inner">
                                    <div class="table-responsive">
                                        { this.state.produits.length>0? 
                                        <table class="table table-bordered">
                                            <thead class="thead-dark">
                                                <tr>
                                                    <th>Product</th>
                                                    <th>Price</th>
                                                    <th>Quantity</th>
                                                    <th>Total</th>
                                                    <th>Remove</th>
                                                </tr>
                                            </thead>
                                            <tbody class="align-middle">
                                                {
                                                    this.state.produits.map(
                                                        produit =>

                                                            <tr>
                                                                <td>
                                                                    <div class="img">
                                                                        <a href="#"><img src={produit.imageURL} alt="Image" /></a>
                                                                        <p>{produit.nomP}</p>
                                                                    </div>
                                                                </td>
                                                                <td>{produit.prix}DT</td>
                                                                <td>

                                                                    <div class="">

                                                                        <button onClick={this.decr.bind(this, produit.id)}>-</button>
                                                                        <span>   </span><span>   </span><span>{produit.qteStock}<span>   </span></span><span>   </span>
                                                                        <button onClick={this.increment.bind(this, produit.id)}>+</button>
                                                                    </div>

                                                                </td>
                                                                <td>{produit.qteStock * produit.prix}DT</td>
                                                                <td><button onClick={this.del.bind(this, produit.id)}style={{ background :"#ff2d2d"}}><FontAwesomeIcon icon={faTrash} style={{ width: "14px" }} /></button></td>
                                                            </tr>


                                                    )
                                                }
                                            </tbody>
                                        </table>:<div><FontAwesomeIcon icon={faShoppingCart} style={{width:'91%',height:'200px'}} /> <h2 style={{textAlign:'center'}}>Votre panier est vide !</h2></div>
                                        }
                                    </div>
                                </div>
                            </div>
                            <ToastContainer />
                            <div class="col-lg-4">
                                <div class="cart-page-inner">
                                    <div class="row">
                                        <div class="col-md-12">
                                            <div class="coupon">
                                                <input type="text" placeholder="Coupon Code" />
                                                <button>Apply Code</button>
                                            </div>
                                        </div>
                                        <div class="col-md-12">
                                            <div class="cart-summary">
                                                <div class="cart-content">
                                                    <h1>Cart Summary</h1>
                                                    <p>Sub Total<span id="dem">99</span>DT</p>
                                                    <p>Shipping Cost<span> 10 DT</span></p>
                                                    <h2>Grand Total<span id="tot">100</span>DT</h2>
                                                </div>
                                                <div class="cart-btn">

                                                    <button id='custom-bb' onClick={this.commander.bind(this)}>Commander</button>

                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>

            </div>
        )
    }
}
export default Panier