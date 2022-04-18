import React, { Component, Fragment } from 'react';
import { Form, Button } from "react-bootstrap";
import { Link } from 'react-router-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import ProductList from './productManagment/productList'
import UsersList from './userManagment/usersList';

//import '../ass/js/vendor-all.min.js';
//import '../ass/plugins/bootstrap/js/bootstrap.min.js'
//import '../ass/js/pcoded.min.js'
import '../ass/images/favicon.ico'
import '../ass/fonts/fontawesome/css/fontawesome-all.min.css'
import '../ass/plugins/animation/animate.min.css'
import '../ass/css/style.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserCircle, faShoppingCart, faSearch } from '@fortawesome/free-solid-svg-icons'


class index extends Component {
    constructor(props) {
        super(props);

        this.state = {
            Active: false,
            Active2: false
        };
        this.Act = this.Act.bind(this);
        this.Act2 = this.Act2.bind(this);
    }
    componentWillUpdate(nextProps, prevState) {
        // this.setState({ Active: prevState.Active});
        // this.setState({ Active2: this.state.Active2 });
    }

    Act(e) {
        e.preventDefault();
        this.setState({ Active: !this.state.Active });
        console.log("active")

    };
    Act2(e) {
        e.preventDefault();
        this.setState({ Active2: !this.state.Active2 });
        console.log("active")
    };
    render() {
        return (
            <div>
                <nav className="pcoded-navbar">
                    <div className="navbar-wrapper">
                        <div className="navbar-brand header-logo">
                            <a href="index.html" className="b-brand">
                                <div className="b-bg">
                                    <i className="feather icon-trending-up"></i>
                                </div>
                                <span className="b-title">Datta Able</span>
                            </a>
                            <a className="mobile-menu" id="mobile-collapse" href="javascript:"><span></span></a>
                        </div>
                        <div className="navbar-content scroll-div">
                            <ul className="nav pcoded-inner-navbar">
                                <li className="nav-item pcoded-menu-caption">
                                    <label>Navigation</label>
                                </li>
                                <li data-username="dashboard Default Ecommerce CRM Analytics Crypto Project"
                                    className="nav-item active">
                                    <a href="index.html" className="nav-link "><span className="pcoded-micon"><i
                                        className="feather icon-home xl"></i></span><span className="pcoded-mtext">Dashboard</span></a>
                                </li>

                                <li data-username="basic components Button Alert Badges breadcrumb Paggination progress Tooltip popovers Carousel Cards Collapse Tabs pills Modal Grid System Typography Extra Shadows Embeds"
                                    className="nav-item pcoded-hasmenu">
                                    <a href='#' className="nav-link "><span className="pcoded-micon"><i
                                        className="feather icon-box"></i></span><span className="pcoded-mtext">User Management</span></a>
                                    <ul className="pcoded-submenu" id='z' >
                                        <li className=""><a href="/UsersList" className="">Users List </a></li>
                                        <li className=""><a href="/addUser" className="">Add User</a></li>
                                    </ul>
                                </li>
                                <li data-username="basic components Button Alert Badges breadcrumb Paggination progress Tooltip popovers Carousel Cards Collapse Tabs pills Modal Grid System Typography Extra Shadows Embeds"
                                    className="nav-item pcoded-hasmenu">
                                    <a href='#' className="nav-link "><span className="pcoded-micon"><i
                                        className="feather icon-server"></i></span><span className="pcoded-mtext">Product Management</span></a>
                                    <ul className="pcoded-submenu" id='z'>
                                        <li className=""><a href="/ProductList" className="">Product List</a></li>
                                        <li className=""><a href="/addProduct" className="">Add Products</a></li>
                                    </ul>
                                </li>

                                {/* <li data-username="Table bootstrap datatable footable" className="nav-item">
                                    <a href="tbl_bootstrap.html" className="nav-link "><span className="pcoded-micon"><i
                                        className="feather icon-server"></i></span><span className="pcoded-mtext">Table</span></a>
                                </li>
                                <li className="nav-item pcoded-menu-caption">
                                    <label>Chart & Maps</label>
                                </li>
                                <li data-username="Charts Morris" className="nav-item"><a href="chart-morris.html"
                                    className="nav-link "><span className="pcoded-micon"><i
                                        className="feather icon-pie-chart"></i></span><span
                                            className="pcoded-mtext">Chart</span></a></li>
                               
                                <li data-username="Maps Google" className="nav-item"><a href="map-google.html" className="nav-link "><span
                                    className="pcoded-micon"><i className="feather icon-map"></i></span><span
                                        className="pcoded-mtext">Maps</span></a></li>
                                <li className="nav-item pcoded-menu-caption">
                                    <label>Pages</label>
                                </li>
                                <li data-username="Authentication Sign up Sign in reset password Change password Personal information profile settings map form subscribe"
                                    className="nav-item pcoded-hasmenu">
                                    <a href="javascript:" className="nav-link "><span className="pcoded-micon"><i
                                        className="feather icon-lock"></i></span><span
                                            className="pcoded-mtext">Authentication</span></a>
                                    <ul className="pcoded-submenu">
                                        <li className=""><a href="auth-signup.html" className="" target="_blank">Sign up</a></li>
                                        <li className=""><a href="auth-signin.html" className="" target="_blank">Sign in</a></li>
                                    </ul>
                                </li>
                                <li data-username="Sample Page" className="nav-item"><a href="sample-page.html" className="nav-link"><span
                                    className="pcoded-micon"><i className="feather icon-sidebar"></i></span><span
                                        className="pcoded-mtext">Sample page</span></a></li>
                                <li data-username="Disabled Menu" className="nav-item disabled"><a href="javascript:"
                                    className="nav-link"><span className="pcoded-micon"><i className="feather icon-power"></i></span><span
                                        className="pcoded-mtext">Disabled menu</span></a></li> */}
                            </ul>
                        </div>
                    </div>
                </nav>
                <header class="navbar pcoded-header navbar-expand-lg navbar-light">
                    <div class="m-header">
                        <a class="mobile-menu" id="mobile-collapse1" href="javascript:"><span></span></a>
                        <a href="index.html" class="b-brand">
                            <div class="b-bg">
                                <i class="feather icon-trending-up"></i>
                            </div>
                            <span class="b-title">Datta Able</span>
                        </a>
                    </div>
                    <a class="mobile-menu" id="mobile-header" href="javascript:">
                        <i class="feather icon-more-horizontal"></i>
                    </a>
                    <div class="collapse navbar-collapse">
                        <ul class="navbar-nav mr-auto">
                            <li><a href="javascript:" class="full-screen" onclick="javascript:toggleFullScreen()"><i
                                class="feather icon-maximize"></i></a></li>
                            <li class="nav-item dropdown">
                                <a class="dropdown-toggle" style={{ padding: "0 10px 0 0" }} href="javascript:" data-toggle="dropdown">Dropdown</a>
                                <ul class="dropdown-menu">
                                    <li><a class="dropdown-item" href="javascript:">Action</a></li>
                                    <li><a class="dropdown-item" href="javascript:">Another action</a></li>
                                    <li><a class="dropdown-item" href="javascript:">Something else here</a></li>
                                </ul>
                            </li>
                            <li style={{ paddingRightm: "0px" }}>
                                <Link to='/'><FontAwesomeIcon icon={faSearch} style={{ width: "14px", height: "15px" }} /></Link>
                            </li>
                            <li class="" style={{ padding: "5px 0 0 0px" }} >
                                <div class="main-search">
                                    <Form className="navbar-form navbar-left web-sh" id='for'>
                                        <Form.Group controlId="formGridPrenom" >
                                            <Form.Control type="text" placeholder="Search for users" className="text-black" name="search" />
                                        </Form.Group>

                                    </Form>
                                </div>
                            </li>
                        </ul>
                        <ul class="navbar-nav ml-auto">
                            <li>
                                <div class="dropdown">
                                    <a class="dropdown-toggle" href="javascript:" data-toggle="dropdown"><i
                                        class="icon feather icon-bell"></i></a>
                                    <div class="dropdown-menu dropdown-menu-right notification">
                                        <div class="noti-head">
                                            <h6 class="d-inline-block m-b-0">Notifications</h6>
                                            <div class="float-right">
                                                <a href="javascript:" class="m-r-10">mark as read</a>
                                                <a href="javascript:">clear all</a>
                                            </div>
                                        </div>
                                        <ul class="noti-body">
                                            <li class="n-title">
                                                <p class="m-b-0">NEW</p>
                                            </li>
                                            <li class="notification">
                                                <div class="media">
                                                    <img class="img-radius" src="assets/images/user/avatar-1.jpg"
                                                        alt="Generic placeholder image" />
                                                    <div class="media-body">
                                                        <p><strong>John Doe</strong><span class="n-time text-muted"><i
                                                            class="icon feather icon-clock m-r-10"></i>30 min</span></p>
                                                        <p>New ticket Added</p>
                                                    </div>
                                                </div>
                                            </li>
                                            <li class="n-title">
                                                <p class="m-b-0">EARLIER</p>
                                            </li>
                                            <li class="notification">
                                                <div class="media">
                                                    <img class="img-radius" src="assets/images/user/avatar-2.jpg"
                                                        alt="Generic placeholder image" />
                                                    <div class="media-body">
                                                        <p><strong>Joseph William</strong><span class="n-time text-muted"><i
                                                            class="icon feather icon-clock m-r-10"></i>30 min</span></p>
                                                        <p>Prchace New Theme and make payment</p>
                                                    </div>
                                                </div>
                                            </li>
                                            <li class="notification">
                                                <div class="media">
                                                    <img class="img-radius" src="assets/images/user/avatar-3.jpg"
                                                        alt="Generic placeholder image" />
                                                    <div class="media-body">
                                                        <p><strong>Sara Soudein</strong><span class="n-time text-muted"><i
                                                            class="icon feather icon-clock m-r-10"></i>30 min</span></p>
                                                        <p>currently login</p>
                                                    </div>
                                                </div>
                                            </li>
                                        </ul>
                                        <div class="noti-footer">
                                            <a href="javascript:">show all</a>
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <div class="dropdown drp-user">
                                    <a href="javascript:" class="dropdown-toggle" data-toggle="dropdown">
                                        <i class="icon feather icon-settings"></i>
                                    </a>
                                    <div class="dropdown-menu dropdown-menu-right profile-notification">
                                        <div class="pro-head">
                                            <img src="assets/images/user/avatar-1.jpg" class="img-radius" alt="User-Profile-Image" />
                                            <span>John Doe</span>
                                            <a href="auth-signin.html" class="dud-logout" title="Logout">
                                                <i class="feather icon-log-out"></i>
                                            </a>
                                        </div>
                                        <ul class="pro-body">
                                            <li><a href="javascript:" class="dropdown-item"><i class="feather icon-settings"></i>
                                                Settings</a></li>
                                            <li><a href="javascript:" class="dropdown-item"><i class="feather icon-user"></i>
                                                Profile</a></li>
                                            <li><a href="message.html" class="dropdown-item"><i class="feather icon-mail"></i> My
                                                Messages</a></li>
                                            <li><a href="auth-signin.html" class="dropdown-item"><i class="feather icon-lock"></i>
                                                Lock Screen</a></li>
                                        </ul>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>
                </header>
            </div>

        )
    }
} export default index;
