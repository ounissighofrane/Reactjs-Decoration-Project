import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import tutorialServies from '../services/tutorial.servies';
import { withRouter } from 'react-router';
import { useParams } from "react-router-dom";

class search extends Component {
   constructor(props) {
      super(props);

      this.state = {
         produits: [],
         search: ""
      }
   }
   componentDidMount() {
      //this.setState({
      // search:

      //});

   }
   componentWillMount() {
      localStorage.getItem('search') && this.setState({
         search: JSON.parse(localStorage.getItem('search'))

      });



   }
   componentDidMount() {
      tutorialServies.SearchProduits(this.state.search).then((res) => {
         this.setState({ produits: res.data._embedded.produits });
         
      });
   }
   render() {
      return (
         <div>
            <div class="product-page-main">
               <div class="e">
                  <div class="row">
                     <div class="col-md-12">
                        <div class="prod-page-title">
                           <h2>Search</h2>
                           <p>for <span>{this.state.search}</span></p>
                        </div>
                     </div>
                  </div>

               </div>



               <div className="">
                  <div className="b ">
                     {
                        this.state.produits.map(
                           produit =>
                              <div className="c" data-wow-delay="0.0s">
                                 <div className="panel panel-default">
                                    <div className="panel-body">
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
                                                <Link to="#">${produit.prix}</Link>
                                             </div>
                                             <div className="dit-btn clearfix">
                                                <a className="wis" href="#"><i className="fa fa-star" aria-hidden="true"></i> Ajouter au panier </a>
                                                <a className="thi" href="#"><i className="fa fa-thumbs-up" aria-hidden="true"></i>Plus details</a>
                                             </div>
                                          </div>
                                       </div>
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
};
export default search;
