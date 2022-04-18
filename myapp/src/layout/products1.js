import React, { Component } from 'react'
import tutorialServies from '../services/tutorial.servies';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Navbar from'../layout/Navbar';

export class Products1 extends Component {
   constructor(props) {
      super(props);
      this.state = {
         produit: [],
         id: '',
         client:[],

      }
      this.pan=this.pan.bind(this);
   }
   componentDidMount() {
      tutorialServies.getProduitByid(this.props.match.params.id).then((res) => {
         this.setState({ produit: res.data });
         console.log(res.data)
      });
   }
   componentWillMount() {  
      localStorage.getItem('user') && this.setState({
         client: JSON.parse(localStorage.getItem('user'))
      });
   }
   pan() {
      tutorialServies.addPanier(this.state.client["id"], this.props.match.params.id).then((res) => {
         toast.success("Produit ajouté au panier ");
         console.log("success")
      });
   }
   //let { id } = useParams();
   // const post = getPost(id); 
   // tutorialServies.getProduitByid(id).then(res) => {
   //    this.setState({ produits: res.data._embedded.produits });
   //    console.log(this.state.produits)

   // });
   render() {
      return (

         <div>
            <Navbar/>
            <div class="modal fade lug" id="myModal" role="dialog">
               <div class="modal-dialog">
                  <div class="modal-content">
                     <div class="modal-header">
                        <button type="button" class="close" data-dismiss="modal">&times;</button>
                        <h4 class="modal-title">Change</h4>
                     </div>
                     <div class="modal-body">
                        <ul>
                           
                           <li><a href="#"><img src="../images/flag-up-1.png" alt="" /> United States</a></li>
                           <li><a href="#"><img src="../images/flag-up-2.png" alt="" /> France </a></li>
                        </ul>
                     </div>
                  </div>
               </div>
            </div><ToastContainer/>
            <div id="sidebar" class="top-nav">
               <ul id="sidebar-nav" class="sidebar-nav">
                  <li><a href="#">Help</a></li>
                  <li><a href="#">How it works</a></li>
                  <li><a href="#">Chamb for Business</a></li>
               </ul>
            </div>
            <div class="terms-conditions product-page">
               <div class="terms-title">
                  <div class="container">
                     <div class="row">
                        <ol class="breadcrumb">
                           <li><a href="#">Forntpage </a></li>
                           <li class="active">Furniture</li>
                           <li class="active">Sofa</li>
                           <li><a href="#">All setup Sofa</a></li>
                        </ol>
                     </div>
                  </div>
               </div>
            </div>
            <div class="product-page-main">
               <div class="container">
                  <div class="row">
                     <div class="col-md-12">
                        <div class="prod-page-title">
                           <h2>All setup Sofa</h2>
                           <p>By <span>Dex Morgan Mobilya</span></p>
                        </div>
                     </div>
                  </div>
                  <div class="row">
                     <div class="col-md-2 col-sm-4">
                        <div class="left-profile-box-m prod-page">
                           <div class="pro-img">
                              <img src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80" alt="#" />
                           </div>
                           <div class="pof-text">
                              <h3>Mazen Mdimegh { }</h3>
                              <div class="check-box"></div>
                           </div>
                           <a href="/">Home Page</a>
                        </div>
                     </div>
                     <div class="col-md-7 col-sm-8">
                        <div class="md-prod-page">
                           <div class="md-prod-page-in">
                              <div class="page-preview">
                                 <div class="preview">
                                    <div class="preview-pic tab-content">
                                       <div class="tab-pane active" id="pic-1"><img src={this.state.produit["imageURL"]} alt="#" /></div>
                                       <div class="tab-pane" id="pic-2"><img src="../images/lag-61.png" alt="#" /></div>
                                       <div class="tab-pane" id="pic-3"><img src="../images/lag-60.png" alt="#" /></div>
                                       <div class="tab-pane" id="pic-4"><img src="../images/lag-61.png" alt="#" /></div>
                                    </div>
                                    <ul class="preview-thumbnail nav nav-tabs">
                                       <li class="active"><a data-target="#pic-1" data-toggle="tab"><img src="../images/lag-60.png" alt="#" /></a></li>
                                       <li><a data-target="#pic-2" data-toggle="tab"><img src="../images/lag-61.png" alt="#" /></a></li>
                                       <li><a data-target="#pic-3" data-toggle="tab"><img src="../images/lag-60.png" alt="#" /></a></li>
                                       <li><a data-target="#pic-4" data-toggle="tab"><img src="../images/lag-61.png" alt="#" /></a></li>
                                    </ul>
                                 </div>
                              </div>
                              <div class="btn-dit-list clearfix">
                                 <div class="left-dit-p">
                                    <div class="prod-btn">
                                       <a href="#"><i class="fa fa-star" aria-hidden="true"></i> Save to wishlist</a>
                                       <a href="#"><i class="fa fa-thumbs-up" aria-hidden="true"></i> Like this</a>
                                       <p>23 likes</p>
                                    </div>
                                 </div>
                                 <div class="right-dit-p">
                                    <div class="like-list">
                                       <ul>
                                          <li>
                                             <div class="im-b"><img class="" src="#" alt="" /></div>
                                          </li>
                                          <li>
                                             <div class="im-b"><img src="../images/list-img-02.png" alt="" /></div>
                                          </li>
                                          <li>
                                             <div class="im-b"><img src="../images/list-img-03.png" alt="" /></div>
                                          </li>
                                          <li>
                                             <div class="im-b"><img src="../images/list-img-04.png" alt="" /></div>
                                          </li>
                                          <li>
                                             <div class="im-b"><img src="../images/list-img-05.png" alt="" /></div>
                                          </li>
                                          <li>
                                             <div class="im-b"><img src="../images/list-img-06.png" alt="" /></div>
                                          </li>
                                          <li>
                                             <div class="im-b"><i class="fa fa-ellipsis-h" aria-hidden="true"></i></div>
                                          </li>
                                       </ul>
                                    </div>
                                 </div>
                              </div>
                           </div>
                           <div class="description-box">
                              <div class="dex-a">
                                 <h4>Description</h4>
                                 <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                    lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                                    when an unknown printer took a galley of type and scrambled it to make a
                                    type specimen book..
                                 </p>
                                 <br />
                                 <p>Small: H 25 cm / &Oslash; 12 cm</p>
                                 <p>Large H 24 cm / &Oslash; 25 cm</p>
                              </div>
                              <div class="spe-a">
                                 <h4>Specifications</h4>
                                 <ul>
                                    <li class="clearfix">
                                       <div class="col-md-4">
                                          <h5>Measurments</h5>
                                       </div>
                                       <div class="col-md-8">
                                          <p>H25 cm / 0 12 cm and H 24 cm / 0 25 cm</p>
                                       </div>
                                    </li>
                                    <li class="clearfix">
                                       <div class="col-md-4">
                                          <h5>Material</h5>
                                       </div>
                                       <div class="col-md-8">
                                          <p>Material Name</p>
                                       </div>
                                    </li>
                                    <li class="clearfix">
                                       <div class="col-md-4">
                                          <h5>Wire</h5>
                                       </div>
                                       <div class="col-md-8">
                                          <p>Wire Name</p>
                                       </div>
                                    </li>
                                    <li class="clearfix">
                                       <div class="col-md-4">
                                          <h5>Comdition</h5>
                                       </div>
                                       <div class="col-md-8">
                                          <p>Brand new</p>
                                       </div>
                                    </li>
                                    <li class="clearfix">
                                       <div class="col-md-4">
                                          <h5>SKU number</h5>
                                       </div>
                                       <div class="col-md-8">
                                          <p>SKU number</p>
                                       </div>
                                    </li>
                                    <li class="clearfix">
                                       <div class="col-md-4">
                                          <h5>Shipping</h5>
                                       </div>
                                       <div class="col-md-8">
                                          <p>Shipping worldwide</p>
                                       </div>
                                    </li>
                                    <li class="clearfix">
                                       <div class="col-md-4">
                                          <h5>Warranty</h5>
                                       </div>
                                       <div class="col-md-8">
                                          <p>1 years</p>
                                       </div>
                                    </li>
                                    <li class="clearfix">
                                       <div class="col-md-4">
                                          <h5>Delivery</h5>
                                       </div>
                                       <div class="col-md-8">
                                          <p>Choose country</p>
                                       </div>
                                    </li>
                                 </ul>
                              </div>
                           </div>
                        </div>
                        <div class="similar-box">
                           <h2>Similiar products from Morgan Mobilya</h2>
                           <div class="row cat-pd">
                              <div class="col-md-6">
                                 <div class="small-box-c">
                                    <div class="small-img-b">
                                       <img class="img-responsive" src="../images/tr1.png" alt="#" />
                                    </div>
                                    <div class="dit-t clearfix">
                                       <div class="left-ti">
                                          <h4>Product</h4>
                                          <p>By <span>Beko</span> under <span>Lights</span></p>
                                       </div>
                                       <a href="#" tabindex="0">$1220</a>
                                    </div>
                                    <div class="prod-btn">
                                       <a href="#"><i class="fa fa-star" aria-hidden="true"></i> Save to wishlist</a>
                                       <a href="#"><i class="fa fa-thumbs-up" aria-hidden="true"></i> Like this</a>
                                       <p>23 likes</p>
                                    </div>
                                 </div>
                              </div>
                              <div class="col-md-6">
                                 <div class="small-box-c">
                                    <div class="small-img-b">
                                       <img class="img-responsive" src="../images/tr2.png" alt="#" />
                                    </div>
                                    <div class="dit-t clearfix">
                                       <div class="left-ti">
                                          <h4>Product</h4>
                                          <p>By <span>Beko</span> under <span>Chairs</span></p>
                                       </div>
                                       <a href="#" tabindex="0">$1220</a>
                                    </div>
                                    <div class="prod-btn">
                                       <a href="#"><i class="fa fa-star" aria-hidden="true"></i> Save to wishlist</a>
                                       <a href="#"><i class="fa fa-thumbs-up" aria-hidden="true"></i> Like this</a>
                                       <p>23 likes</p>
                                    </div>
                                 </div>
                              </div>
                           </div>
                           <div class="row cat-pd">
                              <div class="col-md-6">
                                 <div class="small-box-c">
                                    <div class="small-img-b">
                                       <img class="img-responsive" src="../images/tr3.png" alt="#" />
                                    </div>
                                    <div class="dit-t clearfix">
                                       <div class="left-ti">
                                          <h4>Product</h4>
                                          <p>By <span>Beko</span> under <span>Lights</span></p>
                                       </div>
                                       <a href="#" tabindex="0">$1220</a>
                                    </div>
                                    <div class="prod-btn">
                                       <a href="#"><i class="fa fa-star" aria-hidden="true"></i> Save to wishlist</a>
                                       <a href="#"><i class="fa fa-thumbs-up" aria-hidden="true"></i> Like this</a>
                                       <p>23 likes</p>
                                    </div>
                                 </div>
                              </div>
                              <div class="col-md-6">
                                 <div class="small-box-c">
                                    <div class="small-img-b">
                                       <img class="img-responsive" src="../images/tr4.png" alt="#" />
                                    </div>
                                    <div class="dit-t clearfix">
                                       <div class="left-ti">
                                          <h4>Product</h4>
                                          <p>By <span>Beko</span> under <span>Chairs</span></p>
                                       </div>
                                       <a href="#" tabindex="0">$1220</a>
                                    </div>
                                    <div class="prod-btn">
                                       <a href="#"><i class="fa fa-star" aria-hidden="true"></i> Save to wishlist</a>
                                       <a href="#"><i class="fa fa-thumbs-up" aria-hidden="true"></i> Like this</a>
                                       <p>23 likes</p>
                                    </div>
                                 </div>
                              </div>
                           </div>
                        </div>
                     </div>
                     <div class="col-md-3 col-sm-12">
                        <div class="price-box-right">
                           <h4>Price</h4>
                           <h3>{this.state.produit["prix"]} DT<span>pr.peice</span></h3>

                           <a onClick={this.pan} href="#">Ajouter au panier </a>
                           <h5><i class="fa fa-clock-o" aria-hidden="true"></i> <strong>16 hours</strong> avg. responsive time</h5>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      )
   }
}
export default Products1;