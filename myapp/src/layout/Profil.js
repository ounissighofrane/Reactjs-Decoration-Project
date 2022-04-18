import React, { Component } from 'react'
import { Link, withRouter } from 'react-router-dom';
import { useHistory } from 'react-router-dom';
import tutorialServies from '../services/tutorial.servies';
import { Card, Form, Button } from "react-bootstrap";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';

import bcrypt from 'bcryptjs'



class Profil extends Component {
   constructor(props) {
      super(props);
      this.handleEdit = this.handleEdit.bind(this);
      this.handleChange = this.handleChange.bind(this);
      this.HandleChangeprenom = this.HandleChangeprenom.bind(this);
      this.HandleChangeadresse = this.HandleChangeadresse.bind(this);
      this.HandleChangetel = this.HandleChangetel.bind(this);
      this.HandleChangeNCIN = this.HandleChangeNCIN.bind(this);
      this.HandleChangeemail = this.HandleChangeemail.bind(this);
      this.HandleChangepassword = this.HandleChangepassword.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
      this.HandleChangeNpassword = this.HandleChangeNpassword.bind(this);
      this.handleSupprimer = this.handleSupprimer.bind(this);

      this.state = {
         client: [],
         cmd: [],
         username: "",
         edit: false,
         nom: '',
         prenom: '',
         adresse: '',
         mail: '',
         password: '',
         NCIN: '',
         tel: '',
         Npassword: ''
      };
   }
   componentWillMount() {
      localStorage.getItem('mail') && this.setState({
         mail: JSON.parse(localStorage.getItem('mail'))

      });

   }

   componentDidMount() {

      tutorialServies.getByEmail(this.state.mail).then((res) => {

         this.setState({ client: res.data._embedded.clients });
         //console.log(this.state.client[0]['id'])
         //console.log(this.state.mail)
         tutorialServies.getCmd(res.data._embedded.clients[0]['id']).then((res) => {
            this.setState({ cmd: res.data });
            console.log(res.data)
            this.table();

         });
      });

   }
   componentWillUpdate(nextProps, nextState) {

   }

   table() {
      let L = 5;
      // L.push(<td>++</td>);
      let List = [];
      for (let i in this.state.cmd) {
         List.push()
         for (let j in this.state.cmd[i].comm) {
            console.log(this.state.cmd[i]["CmdDate"].split("T")[0]);
            List.push((parseInt(j) == 0 & parseInt(i) != 0 ? "<tr id='j'>" : "<tr>") + "<td>" + ((parseInt(j) == 0) ? (parseInt(i) + 1) : "") + "</td>" + "<td>" + this.state.cmd[i].comm[j]["nomP"] + "</td>" + "<td>" + this.state.cmd[i].comm[j]["prix"] + "</td>" + "<td>" + this.state.cmd[i].comm[j]["qteStock"] + "</td>" + "<td>" + this.state.cmd[i].comm[j]["qteStock"] * this.state.cmd[i].comm[j]["prix"] + "</td>" + ((parseInt(j) == (this.state.cmd[i].comm).length - 1) ? "<td>" + this.state.cmd[i]["CmdDate"].split("T")[0] + "</td><td>" + this.state.cmd[i].TotalCmd + "</td>" : "<td></td><td></td>") + "</tr>")
         }
      }
      //console.log(List);

      document.getElementById("t").innerHTML = List;


   }
   handleEdit() {
      this.setState({ edit: !(this.state.edit) });
      //console.log(this.state.edit);
   }
   handleChange(event) {
      this.setState({ nom: event.target.value });
   }
   HandleChangeprenom(event) {
      this.setState({ prenom: event.target.value });
   }
   HandleChangeadresse(event) {
      this.setState({ adresse: event.target.value });
   }
   HandleChangepassword(event) {
      this.setState({ password: event.target.value });
   }
   HandleChangeemail(event) {
      this.setState({ mail: event.target.value });
   }
   HandleChangeNCIN(event) {
      this.setState({ NCIN: event.target.value });
   }
   HandleChangetel(event) {
      this.setState({ tel: event.target.value });
   }
   HandleChangeNpassword(event) {
      this.setState({ Npassword: event.target.value });
   }
   handleSupprimer() {
      tutorialServies.delete(this.state.client[0]['id']).then(res => {
         window.location.replace('/login');
      })
   }
   handleSubmit = (e) => {
      e.preventDefault();
      if (bcrypt.hashSync(this.state.password, '$2a$10$CwTycUXWue0Thq9StjUM0u') == this.state.client[0]["password"]) {

         toast.success("Modification réussite");

         let client = {
            nom: this.state.nom,
            prenom: this.state.prenom,
            adresse: this.state.adresse,
            mail: this.state.mail,
            password: bcrypt.hashSync(this.state.Npassword, '$2a$10$CwTycUXWue0Thq9StjUM0u'),
            ncin: this.state.NCIN
         }
         console.log('client=>' + JSON.stringify(client));
         tutorialServies.update(this.state.client[0]["id"], client).then(res => {
            window.location.reload(false);
         })
      }

      console.log(this.state.nom,
         this.state.prenom,
         this.state.adresse,
         this.state.mail,
         this.state.Npassword,
         this.state.NCIN);

   }
   render() {
      return (
         <div>
            <div class="profile-box banner-p">
               <div class="container">
                  <div class="row">
                     <div class="col-md-12">
                        <div class="profile-b">
                           <img src="images/lag-63.png" alt="#" />
                           <div class="dit-p">


                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
            <div class="product-profile-box">
               <div class="container">
                  <div class="row">
                     <div class="col-md-2 col-sm-4 pr">
                        <div class="profile-pro-left">
                           <div class="left-profile-box-m">
                              <div class="pro-img">
                                 <img src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80" alt="#" />
                              </div>
                              <div class="pof-text">
                                 {this.state.client.map(
                                    cli =>
                                       <h3>{cli.nom}{" "}{cli.prenom}</h3>
                                 )}
                                 <div class="check-box"></div>
                              </div>
                              <Link to="/panier">Voir Panier</Link>
                           </div>
                        </div>
                     </div>
                     <div class="col-md-10 col-sm-8">
                        <div class="profile-pro-right">
                           <div class="panel with-nav-tabs panel-default">
                              <div class="panel-heading clearfix">
                                 <ul class="nav nav-tabs pull-left">

                                    <li class="active"><a href="#tab2default" data-toggle="tab">A propos</a></li>

                                    <li><a href="#tab3default" data-toggle="tab">Historique commandes</a></li>
                                 </ul>
                                 <ul class="nav nav-tabs pull-right right-t">
                                    <li class="dropdown">
                                       {!this.state.edit ?
                                          <button id="custom-m" style={{border:'aliceblue'}}onClick={this.handleEdit}> Modifier compte </button>
                                          :
                                          <button id="custom-m"style={{border:'aliceblue'}} onClick={this.handleEdit}> Annuler </button>
                                       }
                                    </li>
                                    <li><button id="custom-f" style={{border:'aliceblue'}} onClick={this.handleSupprimer}>supprimer compte </button></li>

                                 </ul>
                              </div>
                              <div class="panel-body">
                                 <div class="tab-content">
                                    <div class="tab-pane fade in active " id="tab2default">
                                       {!this.state.edit ?
                                          <div class="about-box">
                                             <div className="a">
                                                {this.state.client.map(
                                                   cli =>
                                                      <Card className={"border border-light bg-light text-black"}>
                                                         <Form >
                                                            <Card.Body>

                                                               <Form.Group controlId="formGridNom" >
                                                                  <Form.Label>Nom :</Form.Label>   {" "}
                                                                  <Form.Label>{cli.nom}</Form.Label>
                                                               </Form.Group>
                                                               <Form.Group controlId="formGridPrenom" >
                                                                  <Form.Label>Prénom : </Form.Label>
                                                                  {" "}
                                                                  <Form.Label>{cli.prenom}</Form.Label>
                                                               </Form.Group>
                                                               <Form.Group controlId="formGridPrenom" >
                                                                  <Form.Label>Adresse : </Form.Label>
                                                                  {" "}
                                                                  <Form.Label>{cli.adresse}</Form.Label>
                                                               </Form.Group>
                                                               <Form.Group controlId="formGridPrenom" >
                                                                  <Form.Label>N°CIN : </Form.Label>
                                                                  {" "}
                                                                  <Form.Label>{cli.ncin}</Form.Label>
                                                               </Form.Group>
                                                               <Form.Group controlId="formGridPrenom" >
                                                                  <Form.Label>N°Tel : </Form.Label>
                                                                  {" "}
                                                                  <Form.Label>{cli.tel}</Form.Label>
                                                               </Form.Group>
                                                               <Form.Group controlId="formGridPrenom" >
                                                                  <Form.Label>Adresse Email : </Form.Label>
                                                                  {" "}
                                                                  <Form.Label>{cli.mail}</Form.Label>
                                                               </Form.Group>

                                                               <ToastContainer />

                                                            </Card.Body>

                                                         </Form>
                                                      </Card>
                                                )
                                                }
                                             </div>
                                          </div>
                                          :
                                          <div className="aa">
                                             {this.state.client.map(
                                                cli =>
                                                   <Card className={"border border-light bg-light text-black"}>
                                                      <Form onSubmit={this.handleSubmit}>
                                                         <Card.Body>
                                                            <Form.Group controlId="formGridNom" >
                                                               <Form.Label>Nom</Form.Label>
                                                               <Form.Control type="text" placeholder={cli.nom} value={this.state.nom} onChange={this.handleChange} className="bg-light text-white" name="nom" />
                                                            </Form.Group>
                                                            <Form.Group controlId="formGridPrenom" >
                                                               <Form.Label>Prénom</Form.Label>
                                                               <Form.Control type="text" placeholder={cli.prenom} value={this.state.prenom} onChange={this.HandleChangeprenom} className="bg-light text-white" name="prenom" />
                                                            </Form.Group>
                                                            <Form.Group controlId="formGridPrenom" >
                                                               <Form.Label>Adresse</Form.Label>
                                                               <Form.Control type="text" placeholder={cli.adresse} value={this.state.adresse} onChange={this.HandleChangeadresse} className="bg-light text-white" name="adresse" />
                                                            </Form.Group>
                                                            <Form.Group controlId="formGridPrenom" >
                                                               <Form.Label>N°CIN</Form.Label>
                                                               <Form.Control type="text" placeholder={cli.ncin} value={this.state.NCIN} onChange={this.HandleChangeNCIN} className="bg-light text-white" name="NCIN" />
                                                            </Form.Group>
                                                            <Form.Group controlId="formGridPrenom" >
                                                               <Form.Label>N°Tel</Form.Label>
                                                               <Form.Control type="text" placeholder={cli.tel} value={this.state.tel} onChange={this.HandleChangetel} className="bg-light text-white" name="tel" />
                                                            </Form.Group>
                                                            <Form.Group controlId="formGridPrenom" >
                                                               <Form.Label>Adresse Email</Form.Label>
                                                               <Form.Control type="text" placeholder={cli.mail} value={this.state.mail} onChange={this.HandleChangeemail} className="bg-light text-white" name="mail" />
                                                            </Form.Group>
                                                            <Form.Group controlId="formGridPrenom" >
                                                               <Form.Label>password</Form.Label>
                                                               <Form.Control type="password" placeholder="mot de passe actuel" value={this.state.password} onChange={this.HandleChangepassword} className="bg-light text-white" name="password" />
                                                            </Form.Group>
                                                            <Form.Group controlId="formGridPrenom" >
                                                               <Form.Label>New password</Form.Label>
                                                               <Form.Control type="password" placeholder="nouveau mot de passe" value={this.state.Npassword} onChange={this.HandleChangeNpassword} className="bg-light text-white" name="Npassword" />
                                                            </Form.Group>
                                                            <Button id="custom-i" type="submit"  >Envoyer</Button>
                                                            <ToastContainer />

                                                         </Card.Body>

                                                      </Form>
                                                   </Card>
                                             )
                                             }
                                          </div>
                                       }
                                    </div>
                                    <div class="tab-pane fade" id="tab3default">

                                       <table class="table table-hover">
                                          <thead className="thead-light">

                                             <tr>
                                                <th scope="col">Order Number</th>
                                                <th scope="col">Product Name</th>
                                                <th scope="col">Price</th>
                                                <th scope="col">Quantity</th>
                                                <th scope="col">Totale</th>
                                                <th scope="col">Date</th>
                                                <th scope="col"> TotalCmd</th>
                                             </tr>
                                          </thead>
                                          <tbody id="t">









                                          </tbody>
                                       </table>

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
export default Profil;
