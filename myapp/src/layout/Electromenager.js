import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import tutorialServies from '../services/tutorial.servies';


import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
class Electromenager extends Component {
   constructor(props) {
      super(props);

      this.state = {
         produits: [],
         client: [],
         id: ""
      }

   }
   componentDidMount() {
      tutorialServies.getElectro().then((res) => {
         this.setState({ produits: res.data._embedded.produits });
         console.log(this.state.produits)
         this.setState({ id: this.state.client["id"] });
      });
   }
   componentWillMount() {
      localStorage.getItem('user') && this.setState({
         client: JSON.parse(localStorage.getItem('user'))
      });
      console.log(this.state.produits)
   }
   addtoPanier(i) {
      tutorialServies.addPanier(this.state.id, i).then((res) => {
         toast.success("Produit ajouté au panier ");
      })
   }
   render() {
      return (
         <div>
            <div class="terms-conditions product-page">
               <div class="terms-title">
                  <div class="d">
                     <div class="row">
                        <ol class="breadcrumb">
                           <li><Link to="/">Acceuil </Link></li>
                           <ToastContainer />


                           <li class="active">Eléctroménager</li>
                        </ol>
                     </div>
                  </div>
               </div>
            </div>
            <div class="product-page-main">
               <div class="e">
                  <div class="row">
                     <div class="col-md-12">
                        <div class="prod-page-title">
                           <h2>Electroménager </h2>
                           <p>By <span>Dex Morgan Mobilya</span></p>
                        </div>
                     </div>
                  </div>
                  <h2></h2>
               </div>



               <div className="">
                  <div className="b ">
                     {
                        this.state.produits.map(
                           produit =>


                              <div className="c" data-wow-delay="0.0s">
                                 <div className="panel panel-default">
                                    <div className="panel-body">
                                    <a href={'/products1/'+produit.id}>
                                       <div className="prod-box">
                                          <div className="prod-i">
                                             <img src={produit.imageURL} alt="#" />
                                          </div>
                                          <div className="prod-dit clearfix">
                                             <div className="dit-t clearfix">
                                                <div className="left-ti">
                                                   <h4>{produit.nomP}</h4>
                                                   <p>By <span>Beko</span> under <span>Lights</span></p>
                                                </div>
                                                <a href="#">${produit.prix}</a>
                                             </div>
                                             <div className="dit-btn clearfix">
                                                <a className="wis" onClick={this.addtoPanier.bind(this, produit.id)} href="#"><i className="fa fa-star" aria-hidden="true"></i> Ajouter au panier </a>
                                                <a className="thi" href="#"><i className="fa fa-thumbs-up" aria-hidden="true"></i>Plus details</a>
                                             </div>
                                          </div>
                                       </div>
                                       </a>
                                    </div>
                                 </div>
                              </div>
                        )
                     }









                  </div>
               </div>
            </div>
         </div>




      )
   }
}
export default Electromenager