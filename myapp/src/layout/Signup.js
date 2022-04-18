import React, { Component, Fragment } from 'react'
import tutorialServies from '../services/tutorial.servies';
import { Card, Form, Button } from "react-bootstrap";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import { useHistory } from 'react-router-dom';
import bcrypt from 'bcryptjs'
export default class NameForm extends Component {
  salt = bcrypt.genSaltSync(10);
  constructor(props) {
    super(props);
    this.state = {
      nom: '',
      prenom: '',
      adresse: '',
      email: '',
      password: '',
      NCIN: '',
      tel: ''
    };

    this.handleChange = this.handleChange.bind(this);
    this.HandleChangeprenom = this.HandleChangeprenom.bind(this);
    this.HandleChangeadresse = this.HandleChangeadresse.bind(this);
    this.HandleChangetel = this.HandleChangetel.bind(this);
    this.HandleChangeNCIN = this.HandleChangeNCIN.bind(this);
    this.HandleChangeemail = this.HandleChangeemail.bind(this);
    this.HandleChangepassword = this.HandleChangepassword.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
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
    this.setState({ email: event.target.value });
  }
  HandleChangeNCIN(event) {
    this.setState({ NCIN: event.target.value });
  }
  HandleChangetel(event) {
    this.setState({ tel: event.target.value });
  }

  handleSubmit = (e) => {

    e.preventDefault();
    if (this.state.nom == "") {
      toast.error("saisie votre Nom ");
    }
    else if (this.state.prenom == "") {
      toast.error("saisie votre Prénom");
    }
    else if (this.state.adresse == "") {
      toast.error("saisie votre Adresse ");
    }
    else if (this.state.NCIN == "") {
      toast.error("saisie votre Numéro de CIN");
    }
    else if (this.state.tel == "") {
      toast.error("saisie votre Numéro de Téléphone");
    }
    else if (this.state.email == "") {
      toast.error("saisie votre Email");
    }
    else if (this.state.password == "") {
      toast.error("saisie votre Password ");
    }
    else {
      toast.success("Inscription réussite");

      let client = {
        nom: this.state.nom,
        prenom: this.state.prenom,
        adresse: this.state.adresse,
        tel:this.state.tel,
        mail: this.state.email,
        password: bcrypt.hashSync(this.state.password, '$2a$10$CwTycUXWue0Thq9StjUM0u'),
        ncin: this.state.NCIN
      }
      console.log('client=>' + JSON.stringify(client));
      tutorialServies.createClient(client).then(res => {
        this.props.history.push('/login');
      })

    }
  }

  render() {
    return (
      <div className="a">
        <Card className={"border border-light bg-light text-black"}>
          <Form onSubmit={this.handleSubmit}>
            <Card.Body>
              <Form.Group controlId="formGridNom" >
                <Form.Label>Nom</Form.Label>
                <Form.Control type="text" placeholder="nom" value={this.state.nom} onChange={this.handleChange} className="bg-light text-black" name="nom" />
              </Form.Group>
              <Form.Group controlId="formGridPrenom" >
                <Form.Label>Prénom</Form.Label>
                <Form.Control type="text" placeholder="Prénom" value={this.state.prenom} onChange={this.HandleChangeprenom} className="bg-light text-black" name="prenom" />
              </Form.Group>
              <Form.Group controlId="formGridPrenom" >
                <Form.Label>Adresse</Form.Label>
                <Form.Control type="text" placeholder="adresse" value={this.state.adresse} onChange={this.HandleChangeadresse} className="bg-light text-black" name="adresse" />
              </Form.Group>
              <Form.Group controlId="formGridPrenom" >
                <Form.Label>N°CIN</Form.Label>
                <Form.Control type="text" placeholder="NCIN" value={this.state.NCIN} onChange={this.HandleChangeNCIN} className="bg-light text-black" name="NCIN" />
              </Form.Group>
              <Form.Group controlId="formGridPrenom" >
                <Form.Label>N°Tel</Form.Label>
                <Form.Control type="text" placeholder="tel" value={this.state.tel} onChange={this.HandleChangetel} className="bg-light text-black" name="tel" />
              </Form.Group>
              <Form.Group controlId="formGridPrenom" >
                <Form.Label>Adresse Email</Form.Label>
                <Form.Control type="text" placeholder="email" value={this.state.email} onChange={this.HandleChangeemail} className="bg-light text-black" name="email" />
              </Form.Group>
              <Form.Group controlId="formGridPrenom" >
                <Form.Label>password</Form.Label>
                <Form.Control type="password" placeholder="password" value={this.state.password} onChange={this.HandleChangepassword} className="bg-light text-black" name="password" />
              </Form.Group>
              <Button type="submit" variant="success" >Envoyer</Button>
              <ToastContainer />

            </Card.Body>
          </Form>
        </Card>
      </div>
    );
  }
}