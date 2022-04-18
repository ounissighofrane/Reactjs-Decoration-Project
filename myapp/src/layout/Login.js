import React, { Component } from 'react'
import { Card, Form, Button } from "react-bootstrap";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Link } from 'react-router-dom';
import logo from '../images/logo5.png';
import UserStore from '../Stores/UserStore'
import tutorialServies from '../services/tutorial.servies';
import bcrypt from 'bcryptjs'



export default class login extends Component {
  salt = bcrypt.genSaltSync(10);

  constructor(props) {
    super(props);
    this.state = {email:'',
                password:'',
                client: [],
                username:"",
                mail:""
                };
    


    this.HandleChangeemail = this.HandleChangeemail.bind(this);
    this.HandleChangepassword = this.HandleChangepassword.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  componentWillMount() {
    localStorage.setItem('username', '');
  }
  
  componentWillUpdate(nextProps, nextState) {
    localStorage.setItem('username', JSON.stringify(nextState.username));
    localStorage.setItem('mail',JSON.stringify(nextState.mail))
    localStorage.setItem('user',JSON.stringify(nextState.client))
}
  /* async componentDidMount(){
    try{
      let res = await fetch('http://localhost:8081/clients', {
        method: 'get',
        headers: {
             'Accept': 'application/json',
             'Content-type': 'application/json'
        }
    });
             
        let result = await res.json();
        if (result && result.success) {
          UserStore.loading = false;
          UserStore.isLoggedIn = true;
          UserStore.username = result.username;
       }
       else {
          UserStore.loading = false;
          UserStore.isLoggedIn = false;
        }
    }
    catch(e){
      UserStore.loading = false;
      UserStore.isLoggedIn = false;
    }
  }
  async doLogout(){
    try{
      let res = await fetch('/logout', {
        method: 'post',
        headers: {
             'Accept': 'application/json',
             'Content-type': 'application/json'
        }
    });
             
        let result = await res.json();
        if (result && result.success) {
          UserStore.isLoggedIn = false;
          UserStore.username = '';
       }
       
    }
    catch(e){
      console.log(e)
    }
  } */

 
  HandleChangepassword(event) {
    this.setState({password: event.target.value});
  }
  HandleChangeemail(event) {
    this.setState({email: event.target.value});
  }
 
  

  handleSubmit= (e) =>{
      e.preventDefault();
      if (this.state.email==""){
        toast.error("saisie votre Email");}
      else if (this.state.password==""){
            toast.error("saisie votre Password ");}
           else {     
             
            tutorialServies.getByEmail(this.state.email).then((res) => {
            this.setState({ client: res.data._embedded.clients[0]});
            
          
            console.log(bcrypt.hashSync(this.state.password, '$2a$10$CwTycUXWue0Thq9StjUM0u'));
            console.log(this.state.client);
            if (bcrypt.hashSync(this.state.password, '$2a$10$CwTycUXWue0Thq9StjUM0u')===this.state.client["password"]){
              console.log("logged iin ")
              UserStore.isLoggedIn = true;
              UserStore.username = this.state.client["nom"]+this.state.client["prenom"];
              this.setState({mail:this.state.client["mail"]});
              this.setState({username:UserStore.username});
              console.log(UserStore.username)
              this.props.history.push('/');
              

            }

            });
            
            

                       
            
            }

    }

  render() {
    if (0) {
      return (
         <div className="app">
            <div className='container'>
               Loading, please wait..
            </div>
         </div>
      );
   }
   else if (1 ){
    return (

      <div className="Login ">
        <a href='/'>
            <img href='/'className="login__logo" src={logo} />
        </a>
        <div className="login__containe">
          
          <h4>Enter your details to continue.</h4>
          <p></p>
      <Form onSubmit={this.handleSubmit}>
      <Card.Body>
                
                <Form.Group  controlId="formGridPrenom" >
                  <Form.Label>Adresse Email</Form.Label>
                  <Form.Control type="text" placeholder="email" value={this.state.email} onChange={this.HandleChangeemail}className="bg-light text-black"name="email"/>
                </Form.Group>
                <Form.Group  controlId="formGridPrenom" >
                  <Form.Label>password</Form.Label>
                  <Form.Control type="password" placeholder="password" value={this.state.password} onChange={this.HandleChangepassword}className="bg-light text-black"name="password"/>
                </Form.Group>
                <Link to="/Signup">Forgot Password?</Link>
                <p></p>
        <Button type="submit" >Envoyer</Button>
        <ToastContainer />
        <p></p>
        
        Don’t have an account yet?<Link to="/Signup"> Create One</Link>

        </Card.Body>
      </Form>
      </div>
      </div>
    );
  }
  }
};

