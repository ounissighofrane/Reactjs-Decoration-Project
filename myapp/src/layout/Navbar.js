import React, { Component } from 'react'
import logo from '../images/logo5.png';
import UserStore from '../Stores/UserStore'
import { Form, Button } from "react-bootstrap";
import { Link } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  faUserCircle, faShoppingCart, faSearch } from '@fortawesome/free-solid-svg-icons'
import { withRouter } from 'react-router-dom';
const SomeComponent = withRouter(props => <Navbar {...props}/>);

export default class Navbar extends Component {
   constructor(props) {
      super(props);
      this.state = {
         username: "",
         search: ""
      };
      this.Handlechangesearch = this.Handlechangesearch.bind(this);
   }
   componentWillMount() {
      localStorage.getItem('username') && this.setState({
         username: JSON.parse(localStorage.getItem('username')),
         isLoading: false
      });
      //
   }
   componentWillUpdate(nextProps, nextState) {
      localStorage.setItem('search', JSON.stringify(nextState.search));
   }

   Handlechangesearch(event) {
      this.setState({ search: event.target.value });
      console.log(this.state.search)
   }
   handleroute() {
      //this.props.history.push(`/search/${this.state.search}`);
      //console.log(this.props.location)
      
       if(window.location.toString().split("/")[3]=='search'){
       window.location.reload(false);
      }
      
   }

   render() {
      return (
         <header id="header" className="top-head">
            {/*----------------------------------------------------------------------------------------------*/}
            <nav className="navbar navbar-default">
               <div className="container-fluid">
                  <div className="row" style={{width:"100%"}}>
                     <div className="col-md-4 col-sm-12 left-rs">
                        <div className="navbar-header">

                           <Link to='/' className="navbar-brand "><img src={logo} alt="" /></Link>
                        </div>
                        <div className="navbar-header g">

                           <Link to={'/search/' + this.state.search} onClick={this.handleroute}><FontAwesomeIcon icon={faSearch} /></Link>
                        </div>
                        <Form className="navbar-form navbar-left web-sh "style={{paddingLeft:"10px",marginTop:'18px'}}>
                           <Form.Group controlId="formGridPrenom" >
                              <Form.Control type="text" placeholder="Search for products or companies" value={this.state.search} onChange={this.Handlechangesearch} className="text-black" name="search" />
                           </Form.Group>

                        </Form>
                     </div>

                     <div className="col-md-8 col-sm-12">

                        <div className="right-nav">



                           {this.state.username == "" ?
                              <div className="nav-b hidden-xs">
                                 <div className="login-signup">
                                    <ul>
                                       <li><Link to="/Login" ><div className="name" >Se connecter</div></Link></li>
                                       <li><div className=""><Link className="custom-b" to="/Signup">S'inscrire</Link></div></li>
                                    </ul>
                                 </div>
                              </div>

                              :
                              <div className="nav-b hidden-xs">
                                 <ul class="nav navbar-nav" id='h'style={{fontSize: 'initial'}}>
                                    <li class="dropdown">
                                       <a class="dropdown-toggle name" data-toggle="dropdown" href="#">{this.state.username} </a>
                                       <ul class="dropdown-menu border border-dark"style={{fontSize: 'initial',color:'black'}}>
                                          <li><Link to="/profile"style={{color:'black'}}>Profil</Link></li>
                                          <li><Link to="/Login"style={{color:'black'}}>Logout</Link></li>

                                       </ul>
                                    </li>

                                 </ul>

                              </div>

                           /* <div className="nav-b hidden-xs">
                           <div className="login-signup">
                              <ul>
                                    <li ><Link to="/profile" ><div className="pic"><FontAwesomeIcon icon={faUserCircle}  /></div ><div className="name" >{this.state.username}</div></Link></li>
                              </ul>
                           </div>
                        </div> */}
                           <div className="nav-b hidden-xs">
                              <div className="pic"><FontAwesomeIcon icon={faUserCircle} /></div >
                           </div>
                           <div className="nav-b hidden-xs">
                              <div className="nav-box"style={{marginBottom:'0'}}>
                                 <ul style={{margin:'0'}}>

                                    <li><Link to="/panier"><FontAwesomeIcon icon={faShoppingCart} /></Link></li>
                                 </ul>
                              </div>
                           </div>
                           {/* <div className="help-r hidden-xs">
                           <div className="help-box">
                              <ul>
                                 <li> <a data-toggle="modal" data-target="#myModal" href="#"> <span>Change</span> <img src="./images/flag.png" alt="" /> </a> </li>
                                 <li> <a href="#"><img className="h-i" src="./images/help-icon.png" alt="" /> Help </a> </li>
                              </ul>
                           </div>
                        </div> */}

                           <div className="nav-b hidden-xs">
                              <div className="nav-box">
                                 <ul>

                                    <li><Link to="/LingeDeMaison">Linge de maison</Link></li>
                                 </ul>
                              </div>
                           </div>
                           <div className="nav-b hidden-xs">
                              <div className="nav-box">
                                 <ul>

                                    <li><Link to="/Décoration">Decoration</Link></li>
                                 </ul>
                              </div>
                           </div>
                           <div className="nav-b hidden-xs">
                              <div className="nav-box">
                                 <ul>

                                    <li><Link to="/Electromenager">Electroménager</Link></li>
                                 </ul>
                              </div>
                           </div>


                        </div>



                        <div className="nav-b hidden-xs">
                           <div className="nav-box">
                              <ul>
                                 <li><Link to="/">Acceuil</Link></li>

                              </ul>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>

            </nav>
         </header >

      )
   }
}
