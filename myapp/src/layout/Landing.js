import React from 'react'
import { Link } from 'react-router-dom'


export const Landing = () => {
    return (
        <div>
        <div>
           <img src="https://baity.tn/modules/zoneslideshow/views/img/slideImages/Banniere%20Site%2001.jpg"></img>
        </div>
      <div id="sidebar" class="top-nav">
         <ul id="sidebar-nav" class="sidebar-nav">
            <li><a href="#">Help</a></li>
            <li><a href="howitworks.html">How it works</a></li>
            <li><a href="#">chamb for Business</a></li>
         </ul>
      </div>
      <div class="page-content-product">
         <div class="main-product">
            <div class="container">
               <div class="row clearfix">
                  <div class="find-box">
                     <h1>Votre maison en un clic !</h1>
                     <div class="product-sh">
                        <div class="col-sm-6">
                           <div class="form-sh">
                              <input type="text" placeholder="chercher ici" ></input>
                           </div>
                        </div>
                        <div class="col-sm-3">
                           <div class="form-sh"> <a class="btn" href="#">chercher</a> </div>
                        </div>
                        <p>              </p>
                     </div>
                  </div>
               </div>
               <div class="row clearfix">
                  <div class="col-lg-3 col-sm-6 col-md-3">
                     <a href="/products1/20">
                        <div class="box-img">
                           <h4>Chambre à coucher</h4>
                           <img src="https://i.pinimg.com/236x/3f/e4/79/3fe479efc440cf79c6dfb30c8e3bb4c1.jpg" alt="" />
                        </div>
                     </a>
                  </div>
                  <div class="col-lg-3 col-sm-6 col-md-3">
                     <a href="/products1/19">
                        <div class="box-img">
                           <h4>Salle à manger</h4>
                           <img src="https://i.pinimg.com/236x/8e/29/64/8e29649cd317778450e9c8cc43e1d5af.jpg" alt="" />
                        </div>
                     </a>
                  </div>
                  <div class="col-lg-3 col-sm-6 col-md-3">
                     <Link to="/products1/18">
                        <div class="box-img">
                           <h4>Salon/Séjour</h4>
                           <img src="https://i.pinimg.com/236x/bd/b2/a0/bdb2a09e7cdcd5f1ba73d7b62e4e173f.jpg" alt="" />
                        </div>
                     </Link>
                  </div>
                  <div class="col-lg-3 col-sm-6 col-md-3">
                     <a href="/products1/17">
                        <div class="box-img">
                           <h4>Luminaires</h4>
                           <img src="https://i.pinimg.com/236x/40/d6/de/40d6de203d684944fe0ba261a3daa5b4.jpg" alt="" />
                        </div>
                     </a>
                  </div>
                  <div class="col-lg-3 col-sm-6 col-md-3">
                     <a href="/products1/16">
                        <div class="box-img">
                           <h4>Jardin/terasse</h4>
                           <img src="https://i.pinimg.com/236x/36/75/8a/36758a0824364dace37b5eaf7feaa12b.jpg" alt="" />
                        </div>
                     </a>
                  </div>
                  <div class="col-lg-3 col-sm-6 col-md-3">
                     <a href="/products1/15">
                        <div class="box-img">
                           <h4>Salle de bain</h4>
                           <img src="https://i.pinimg.com/236x/a6/64/8a/a6648a4dc60ae0b9a3f84a5ae7c76243.jpg" alt="" />
                        </div>
                     </a>
                  </div>
                  <div class="col-lg-3 col-sm-6 col-md-3">
                     <a href="/products1/14">
                        <div class="box-img">
                           <h4>cuisine</h4>
                           <img src="https://i.pinimg.com/236x/65/3f/41/653f416de111b28aebc7c8cfe9210a9d.jpg" alt="" />
                        </div>
                     </a>
                  </div>
                  <div class="col-lg-3 col-sm-6 col-md-3">
                     <a href="/products1/13">
                        <div class="box-img">
                           <h4>Décoration</h4>
                           <img src="https://i.pinimg.com/236x/07/ca/52/07ca52bcbe9f7555a5cbebfe405013bd.jpg" alt="" />
                        </div>
                     </a>
                  </div>
            
               </div>
            </div>
         </div>
      </div>
      <div>
            <div className="cat-main-box">
         <div className="container">
            <div className="row panel-row">
               <div className="col-md-4 col-sm-6 wow fadeIn" data-wow-delay="0.0s">
                  <div className="panel panel-default">
                     <div className="panel-body">
                        <img src="./images/xpann-icon.jpg" className="icon-small" alt=""></img>
                        <h4>“Chamb” Your Business</h4>
                        <p>Grow easily with chamb. Create free account.
                           We help expanding your business easily.
                        </p>
                     </div>
                  </div>
               </div>
               <div className="col-md-4 col-sm-6 wow fadeIn" data-wow-delay="0.2s">
                  <div className="panel panel-default">
                     <div className="panel-body">
                        <img src="./images/create-icon.jpg" className="icon-small" alt=""></img>
                        <h4>Create and add</h4>
                        <p>Grow easily with chamb. Create free account.
                           We help expanding your business easily.
                        </p>
                     </div>
                  </div>
               </div>
               <div className="col-md-4 col-sm-6 wow fadeIn hidden-sm" data-wow-delay="0.4s">
                  <div className="panel panel-default">
                     <div className="panel-body">
                        <img src="./images/get-icon.jpg" className="icon-small" alt=""></img>
                        <h4>Get inspired</h4>
                        <p>Grow easily with chamb. Create free account.
                           We help expanding your business easily.
                        </p>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
        </div>
        <div>
            <div className="products_exciting_box">
         <div className="container">
            <div className="row">
               <div className="col-md-6 col-sm-6 wow fadeIn" data-wow-delay="0.2s">
                  <div className="exciting_box f_pd">
                     <img src="images/exciting_img-01.jpg" className="icon-small" alt="" />
                     <h4>Explore <strong>exciting</strong> and exotic products
                        tailored to you.
                     </h4>
                     <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod 
                        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, 
                        quis nostrud exercitation ullamco laboris..
                     </p>
                  </div>
               </div>
               <div className="col-md-6 col-sm-6 wow fadeIn" data-wow-delay="0.4s">
                  <div className="exciting_box l_pd">
                     <img src="images/exciting_img-02.jpg" className="icon-small" alt="" />
                     <h4><strong>List your products on</strong> chamb and grow connections.</h4>
                     <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod 
                        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, 
                        quis nostrud exercitation ullamco laboris..
                     </p>
                  </div>
               </div>
            </div>
         </div>
      </div>
        </div>
        <div>
            <div class="start-free-box">
         <div class="container">
             <div className="row panel-row">
            <div class="row">
               <div class="container">
                  <div class="main-start-box">
                     <div class="free-box-a clearfix">
                        <div class="col-md-6 col-sm-6">
                           <div class="left-a-f">
                              <h3>A platform built for scale & expansion. Start for free.</h3>
                           </div>
                        </div>
                        <div class="col-md-6 col-sm-6">
                           <div class="right-a-f">
                              <p>Over the comming years, way thet business through the web
                                 works will change at agreat - and chamb is the
                                 gamebreaker.
                              </p>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
            <div class="row">
               <div class="main-start-box">
                  <div class="bg_img_left"><img src="./images/bg_img1.png" alt="#" /></div>
                  <div class="container">
                     <div class="buyer-box clearfix">
                        <div class="col-md-6 col-sm-6 wow fadeIn" data-wow-delay="0.2s">
                           <div class="left-buyer">
                              <img class="img-responsive" src="./images/creat_pro.png" alt="#" />
                           </div>
                        </div>
                        <div class="col-md-6 col-sm-6 wow fadeIn" data-wow-delay="0.4s">
                           <div class="right-buyer">
                              <h4>buyer</h4>
                              <h2>Empower your factory<br></br>
                                 <span>With a new lead Channel</span>
                              </h2>
                              <p>Never worry about sales or income ftom outbound
                                 channels. with chamb your store is directly
                                 connected to thousands of interested in your
                                 products.
                              </p>
                              <a href="#">Create a buyer account</a>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
            <div class="row">
               <div class="bg_img_right"><img src="./images/bg_img1.png" alt="#" /></div>
               <div class="main-start-box">
                  <div class="container">
                     <div class="supplier clearfix">
                        <div class="col-md-5 col-sm-6">
                           <div class="left-supplier">
                              <h4>supplier</h4>
                              <h2>Grow your store <br></br><span>With a new sales channel</span></h2>
                              <p>Never worry about sales or income ftom outbound
                                 channels. with chamb your store is directly
                                 connected to thousands of interested in your
                                 products.
                              </p>
                              .
                              <a href="#">Create a supplier account</a>
                           </div>
                        </div>
                        <div class="col-md-7 col-sm-6">
                           <div class="right-supplier">
                              <img class="img-responsive" src="./images/supplier-pc-img.png" alt="#" />
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









      <div>
      <div className="products">
         <div className="main-products">
            <h2>Best seller !</h2>
            
         </div>
      </div>
      <div className="">
         <div className="">
            <div className="row ">
               <div className="col-lg-3 col-sm-6 col-md-3" data-wow-delay="0.0s">
                  <div className="panel panel-default">
                     <div className="panel-body">
                     <div className="prod-box">
                        <div className="prod-i">
                           <img src="./images/tr1.png" alt="#" />
                        </div>
                        <div className="prod-dit clearfix">
                           <div className="dit-t clearfix">
                              <div className="left-ti">
                                 <h4>Table with Lights</h4>
                                 <p>By <span>Beko</span> under <span>Lights</span></p>
                              </div>
                              <a href="#">$1220</a>
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
               <div className="col-lg-3 col-sm-6 col-md-3" data-wow-delay="0.2s">
                  <div className="panel panel-default">
                     <div className="panel-body">
                     <div className="prod-box">
                        <div className="prod-i">
                           <img src="./images/tr2.png" alt="#" />
                        </div>
                        <div className="prod-dit clearfix">
                           <div className="dit-t clearfix">
                              <div className="left-ti">
                                 <h4>Treehouse Bed</h4>
                                 <p>By <span>Beko</span> under <span>Lights</span></p>
                              </div>
                              <a href="#">$1220</a>
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
               <div className="col-lg-3 col-sm-6 col-md-3" data-wow-delay="0.2s">
                  <div className="panel panel-default">
                     <div className="panel-body">
                     <div className="prod-box">
                        <div className="prod-i">
                           <img src="./images/tr3.png" alt="#" />
                        </div>
                        <div className="prod-dit clearfix">
                           <div className="dit-t clearfix">
                              <div className="left-ti">
                                 <h4>Wood Sofaplatform</h4>
                                 <p>By <span>Beko</span> under <span>Lights</span></p>
                              </div>
                              <a href="#">$1220</a>
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
               <div className="col-lg-3 col-sm-6 col-md-3" data-wow-delay="0.2s">
                  <div className="panel panel-default">
                     <div className="panel-body">
                     <div className="prod-box">
                        <div className="prod-i">
                           <img src="./images/tr4.png" alt="#" />
                        </div>
                        <div className="prod-dit clearfix">
                           <div className="dit-t clearfix">
                              <div className="left-ti">
                                 <h4>Wall Sticker</h4>
                                 <p>By <span>Beko</span> under <span>Lights</span></p>
                              </div>
                              <a href="#">$1220</a>
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
            </div>
         </div>
      </div>
        </div>
        
      </div>
      
    )
}
export default Landing