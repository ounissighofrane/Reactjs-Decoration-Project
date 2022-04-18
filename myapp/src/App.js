import React, { Fragment } from 'react';
import './App.css';
import Navbar from './layout/Navbar';
import Landing from './layout/Landing';
import Footer from './layout/Footer';
import Electromenager from './layout/Electromenager';
import LingeDeMaison from './layout/LingeDeMaison';
import login from './layout/Login';
import Décoration from './layout/Décoration'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Signup from './layout/Signup';
import Panier from './layout/Panier';
import Profil from './layout/Profil';
import Search from './layout/search';
import Index from './BackOffice/index';
import ProductList from './BackOffice/productManagment/productList';
import UsersList from './BackOffice/userManagment/usersList';
import AddUser from './BackOffice/userManagment/addUser';
import AddProduct  from './BackOffice/productManagment/addProduct';
import Products1 from './layout/products1';
function App() {
  return (
    <Router>
      <Fragment >

        <Route exact path='/' name="Home" render={props =>
          <div>
            <Navbar />
            <Landing />
            <Footer />
          </div>} />
        <Route exact path='/panier' render={props =>
          <div>
            <Navbar />
            <Panier />
            <Footer />
          </div>} />
          <Route exact path='/products1/:id' render={(props) =>
            
            <Products1 globalStore={props.match.params.id} {...props} />}
          
           />
        <Route exact path='/Electromenager' render={props =>
          <div>
            <Navbar />
            <Electromenager />
            <Footer />
          </div>} />
        <Route exact path='/Décoration' render={props =>
          <div>
            <Navbar />
            <Décoration />
            <Footer />
          </div>} />
        <Route exact path='/LingeDeMaison' render={props =>
          <div>
            <Navbar />
            <LingeDeMaison />
            <Footer />
          </div>} />
        <Route exact path='/Profile' render={props =>
          <div>
            <Navbar />
            <Profil />
            <Footer />
          </div>} />
        <Route exact path='/search/:search' render={props =>
          <div>
            <Navbar />
            <Search />
            <Footer />
          </div>} />
        <Route exact path='/ProductList' render={props =>
          <div>
            <Index />
            <div class="pcoded-main-container">
              <ProductList />
            </div>
          </div>} />
          <Route exact path='/UsersList' render={props =>
          <div>
            <Index />
            
            <div class="pcoded-main-container">
              <UsersList />
            </div>
          </div>} />
          <Route exact path='/addUser' render={props =>
          <div>
            <Index />
            
            <div class="pcoded-main-container">
              <AddUser />
            </div>
          </div>} />
          <Route exact path='/addProduct' render={props =>
          <div>
            <Index />
            
            <div class="pcoded-main-container">
              <AddProduct />
            </div>
          </div>} />

        <section className=''>
          <Switch >

            <Route exact path="/Dashboard" name="Home" component={Index} />
            <Route exact path='/login' component={login} />
            <Route exact path='/Signup' component={Signup} />



          </Switch>
        </section>



      </Fragment>

    </Router>
  );
}

export default App;
