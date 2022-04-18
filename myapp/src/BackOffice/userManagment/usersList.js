import React from 'react'
import { Component } from 'react/cjs/react.production.min'
import { Card, Form, Button } from "react-bootstrap";
import bcrypt from 'bcryptjs'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEdit, faTrash } from '@fortawesome/free-solid-svg-icons'
import tutorialServies from '../../services/tutorial.servies';

class usersList extends Component {
    constructor(props) {
        super(props);

        this.state = {
            ed: false,
            clients: [],
            prod: [],
            id: "",
            Name: '',
            prenom: '',
            adresse: '',
            tel: '',
            mail: '',
            password: '',
            ncin: ''
        }
        this.handleChange = this.handleChange.bind(this);
        this.HandleChangeprenom = this.HandleChangeprenom.bind(this);
        this.HandleChangeadresse = this.HandleChangeadresse.bind(this);
        this.HandleChangetel = this.HandleChangetel.bind(this);
        this.HandleChangencin = this.HandleChangencin.bind(this);
        this.HandleChangeemail = this.HandleChangemail.bind(this);
        this.HandleChangepassword = this.HandleChangepassword.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.cancel = this.cancel.bind(this);
    }
    componentDidMount() {
        tutorialServies.getclients().then((res) => {
            this.setState({ clients: res.data._embedded.clients });
            console.log(this.state.clients)
        });
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
    HandleChangemail(event) {
        this.setState({ mail: event.target.value });
    }
    HandleChangencin(event) {
        this.setState({ ncin: event.target.value });
    }
    HandleChangetel(event) {
        this.setState({ tel: event.target.value });
    }



    del(i) {
        tutorialServies.deleteclients(i).then(res => {
            window.location.reload(false);
        })

    }
    cancel() {
        this.setState({
            ed: false,

        });

    }
    edit(i) {
        //  tutorialServies.del(this.state.client["id"], i);
        // window.location.reload(false);
        this.setState({
            ed: true,
            id: i.id,
            nom: i.nom,
            prenom: i.prenom,
            adresse: i.adresse,
            tel: i.tel,
            ncin: i.ncin,
            mail: i.mail,
        });
        console.log(i);
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
        else if (this.state.ncin == "") {
            toast.error("saisie votre Numéro de CIN");
        }
        else if (this.state.tel == "") {
            toast.error("saisie votre Numéro de Téléphone");
        }
        else if (this.state.mail == "") {
            toast.error("saisie votre Email");
        }
        else if (this.state.password == "") {
            toast.error("saisie votre Password ");
        }
        else {
            toast.success("Inscription réussite");

            let pro = {
                nom: this.state.nom,
                prenom: this.state.prenom,
                adresse: this.state.adresse,
                mail: this.state.mail,
                tel: this.state.tel,
                password: bcrypt.hashSync(this.state.password, '$2a$10$CwTycUXWue0Thq9StjUM0u'),
                ncin: this.state.ncin,
            }
            console.log('client=>' + JSON.stringify(pro));
            tutorialServies.updateclients(this.state.id, pro).then(res => {
                window.location.reload(false);
                //console.log(pro);
            })

        }
    }
    render() {
        return (
            <div>
                <div class="pcoded-wrapper">
                    <div class="pcoded-content" style={{ padding: "0 0 0 30px" }}>
                        <div class="pcoded-inner-content">
                            <div class="page-header">
                                <div class="page-block">
                                    <div class="row align-items-center">
                                        <div class="col-md-12">
                                            <div class="page-header-title">
                                                <h5 class="m-b-10">User Management</h5>
                                            </div>
                                            <ul class="breadcrumb">
                                                <li class="breadcrumb-item"><a href="index.html"><i class="feather icon-home"></i></a></li>
                                                <li class="breadcrumb-item"><a href="javascript:">Users</a></li>
                                                <li class="breadcrumb-item"><a href="javascript:">User List</a></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="main-body">
                                <div class="page-wrapper">
                                    <div class="row">
                                        <div class="col-sm-12">
                                            <div class="card">
                                                <div class="card-header">
                                                    <h5>User List</h5>
                                                </div>

                                                <div style={{ margin: '30px' }} id="tab3default">

                                                    <table class="table table-hover">
                                                        <thead className="thead-light">

                                                            <tr>
                                                                <th scope="col">User Name</th>
                                                                <th scope="col">Id</th>
                                                                <th scope="col">Prenom</th>
                                                                <th scope="col">Adresse</th>
                                                                <th scope="col">mail</th>
                                                                <th scope="col">ncin</th>
                                                                <th scope="col">tel</th>                           <th scope="col"></th>
                                                                <th scope="col"></th>                           <th scope="col"></th>
                                                            </tr>
                                                        </thead>
                                                        <tbody id="t">
                                                            {
                                                                this.state.clients.map(
                                                                    client =>
                                                                        <tr>
                                                                            <td>{client.nom}</td>
                                                                            <td>{client.id}</td>
                                                                            <td>{client.prenom}</td>
                                                                            <td>{client.adresse}</td>
                                                                            <td>{client.mail}</td>
                                                                            <td>{client.ncin}</td>
                                                                            <td>{client.tel}</td>
                                                                            <td style={{ width: '10px' }}><button onClick={this.edit.bind(this, client)} style={{ background: "rgb(10 77 198)", borderRadius: '10px', color: 'white', width: "27px", height: "30px", border: "aliceblue" }}><FontAwesomeIcon icon={faEdit} style={{ width: "14px" }} /></button></td>
                                                                            <td ><button onClick={this.del.bind(this, client.id)} style={{ background: "#ff2d2d", borderRadius: '10px', color: 'white', width: "27px", height: "30px", border: "aliceblue" }}><FontAwesomeIcon icon={faTrash} style={{ width: "14px" }} /></button></td>
                                                                        </tr>
                                                                )}

                                                        </tbody>
                                                    </table>

                                                </div>


                                            </div>
                                        </div>
                                        {
                                            this.state.ed ?
                                                <div class="col-sm-12">
                                                    <div class="card">
                                                        <div class="card-header">
                                                            <span><h5>Edit User </h5>id : {this.state.id}</span>
                                                        </div>
                                                        <div className="a2">
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
                                                                            <Form.Control type="text" placeholder="NCIN" value={this.state.ncin} onChange={this.HandleChangencin} className="bg-light text-black" name="NCIN" />
                                                                        </Form.Group>
                                                                        <Form.Group controlId="formGridPrenom" >
                                                                            <Form.Label>N°Tel</Form.Label>
                                                                            <Form.Control type="text" placeholder="tel" value={this.state.tel} onChange={this.HandleChangetel} className="bg-light text-black" name="tel" />
                                                                        </Form.Group>
                                                                        <Form.Group controlId="formGridPrenom" >
                                                                            <Form.Label>Adresse Email</Form.Label>
                                                                            <Form.Control type="text" placeholder="email" value={this.state.mail} onChange={this.HandleChangemail} className="bg-light text-black" name="email" />
                                                                        </Form.Group>
                                                                        <Form.Group controlId="formGridPrenom" >
                                                                            <Form.Label>password</Form.Label>
                                                                            <Form.Control type="password" placeholder="password" value={this.state.password} onChange={this.HandleChangepassword} className="bg-light text-black" name="password" />
                                                                        </Form.Group>
                                                                        <ul style={{ display: 'flex' }}>
                                                                            <li>
                                                                                <Button style={{ width: '219px' }} type="submit" variant="success" >Submit</Button>
                                                                            </li>
                                                                            <li>
                                                                                <Button onClick={this.cancel} style={{ width: '219px' }} variant="danger" >cancel</Button>
                                                                            </li>
                                                                        </ul>
                                                                        <ToastContainer />

                                                                    </Card.Body>
                                                                </Form>
                                                            </Card>
                                                        </div>
                                                    </div>
                                                </div> : ''
                                        }
                                        {/* <div class="col-sm-12">
                                            <div class="card">
                                                <div class="card-header">
                                                    <h5>Square Button</h5>
                                                </div>
                                                <div class="card-block">
                                                    <p>use <code>.btn-square</code> in class <code>.btn</code> class to get square button</p>
                                                    <button type="button" class="btn btn-square btn-primary">Primary</button>
                                                    <button type="button" class="btn btn-square btn-secondary">Secondary</button>
                                                    <button type="button" class="btn btn-square btn-success">Success</button>
                                                    <button type="button" class="btn btn-square btn-danger">Danger</button>
                                                    <button type="button" class="btn btn-square btn-warning">Warning</button>
                                                    <button type="button" class="btn btn-square btn-info">Info</button>
                                                    <button type="button" class="btn btn-square btn-light">Light</button>
                                                    <button type="button" class="btn btn-square btn-dark">Dark</button>
                                                </div>
                                            </div>
                                        </div> */}

                                    </div>
                                    {/* <div class="row">
                                        <div class="col-md-12">
                                            <div class="card">
                                                <div class="card-header">
                                                    <h5>Basic Dropdown Button</h5>
                                                </div>
                                                <div class="card-block">
                                                    <div class="btn-group mb-2 mr-2">
                                                        <button class="btn btn-primary dropdown-toggle" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Primary</button>
                                                        <div class="dropdown-menu">
                                                            <a class="dropdown-item" href="#!">Action</a>
                                                            <a class="dropdown-item" href="#!">Another action</a>
                                                            <a class="dropdown-item" href="#!">Something else here</a>
                                                        </div>
                                                    </div>
                                                    <div class="btn-group mb-2 mr-2">
                                                        <button class="btn btn-secondary dropdown-toggle" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Secondary</button>
                                                        <div class="dropdown-menu">
                                                            <a class="dropdown-item" href="#!">Action</a>
                                                            <a class="dropdown-item" href="#!">Another action</a>
                                                            <a class="dropdown-item" href="#!">Something else here</a>
                                                        </div>
                                                    </div>
                                                    <div class="btn-group mb-2 mr-2">
                                                        <button class="btn btn-success dropdown-toggle" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Success</button>
                                                        <div class="dropdown-menu">
                                                            <a class="dropdown-item" href="#!">Action</a>
                                                            <a class="dropdown-item" href="#!">Another action</a>
                                                            <a class="dropdown-item" href="#!">Something else here</a>
                                                        </div>
                                                    </div>
                                                    <div class="btn-group mb-2 mr-2">
                                                        <button class="btn btn-danger dropdown-toggle" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Danger</button>
                                                        <div class="dropdown-menu">
                                                            <a class="dropdown-item" href="#!">Action</a>
                                                            <a class="dropdown-item" href="#!">Another action</a>
                                                            <a class="dropdown-item" href="#!">Something else here</a>
                                                        </div>
                                                    </div>
                                                    <div class="btn-group mb-2 mr-2">
                                                        <button class="btn btn-warning dropdown-toggle" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Warning</button>
                                                        <div class="dropdown-menu">
                                                            <a class="dropdown-item" href="#!">Action</a>
                                                            <a class="dropdown-item" href="#!">Another action</a>
                                                            <a class="dropdown-item" href="#!">Something else here</a>
                                                        </div>
                                                    </div>
                                                    <div class="btn-group mb-2 mr-2">
                                                        <button class="btn btn-info dropdown-toggle" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Info</button>
                                                        <div class="dropdown-menu">
                                                            <a class="dropdown-item" href="#!">Action</a>
                                                            <a class="dropdown-item" href="#!">Another action</a>
                                                            <a class="dropdown-item" href="#!">Something else here</a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div> */}
                                    {/* <div class="col-md-12">
                                            <div class="card">
                                                <div class="card-header">
                                                    <h5>Split Dropdown Button</h5>
                                                </div>
                                                <div class="card-block">
                                                    <div class="btn-group mb-2 mr-2">
                                                        <button type="button" class="btn btn-primary">Primary</button>
                                                        <button type="button" class="btn btn-primary dropdown-toggle dropdown-toggle-split" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><span class="sr-only">Toggle Dropdown</span></button>
                                                        <div class="dropdown-menu">
                                                            <a class="dropdown-item" href="#!">Action</a>
                                                            <a class="dropdown-item" href="#!">Another action</a>
                                                            <a class="dropdown-item" href="#!">Something else here</a>
                                                            <div class="dropdown-divider"></div>
                                                            <a class="dropdown-item" href="#!">Separated link</a>
                                                        </div>
                                                    </div>
                                                    <div class="btn-group mb-2 mr-2">
                                                        <button type="button" class="btn btn-secondary">Secondary</button>
                                                        <button type="button" class="btn btn-secondary dropdown-toggle dropdown-toggle-split" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><span class="sr-only">Toggle Dropdown</span></button>
                                                        <div class="dropdown-menu">
                                                            <a class="dropdown-item" href="#!">Action</a>
                                                            <a class="dropdown-item" href="#!">Another action</a>
                                                            <a class="dropdown-item" href="#!">Something else here</a>
                                                            <div class="dropdown-divider"></div>
                                                            <a class="dropdown-item" href="#!">Separated link</a>
                                                        </div>
                                                    </div>
                                                    <div class="btn-group mb-2 mr-2">
                                                        <button type="button" class="btn btn-success">Success</button>
                                                        <button type="button" class="btn btn-success dropdown-toggle dropdown-toggle-split" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><span class="sr-only">Toggle Dropdown</span></button>
                                                        <div class="dropdown-menu">
                                                            <a class="dropdown-item" href="#!">Action</a>
                                                            <a class="dropdown-item" href="#!">Another action</a>
                                                            <a class="dropdown-item" href="#!">Something else here</a>
                                                            <div class="dropdown-divider"></div>
                                                            <a class="dropdown-item" href="#!">Separated link</a>
                                                        </div>
                                                    </div>
                                                    <div class="btn-group mb-2 mr-2">
                                                        <button type="button" class="btn btn-danger">Danger</button>
                                                        <button type="button" class="btn btn-danger dropdown-toggle dropdown-toggle-split" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><span class="sr-only">Toggle Dropdown</span></button>
                                                        <div class="dropdown-menu">
                                                            <a class="dropdown-item" href="#!">Action</a>
                                                            <a class="dropdown-item" href="#!">Another action</a>
                                                            <a class="dropdown-item" href="#!">Something else here</a>
                                                            <div class="dropdown-divider"></div>
                                                            <a class="dropdown-item" href="#!">Separated link</a>
                                                        </div>
                                                    </div>
                                                    <div class="btn-group mb-2 mr-2">
                                                        <button type="button" class="btn btn-warning">Warning</button>
                                                        <button type="button" class="btn btn-warning dropdown-toggle dropdown-toggle-split" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><span class="sr-only">Toggle Dropdown</span></button>
                                                        <div class="dropdown-menu">
                                                            <a class="dropdown-item" href="#!">Action</a>
                                                            <a class="dropdown-item" href="#!">Another action</a>
                                                            <a class="dropdown-item" href="#!">Something else here</a>
                                                            <div class="dropdown-divider"></div>
                                                            <a class="dropdown-item" href="#!">Separated link</a>
                                                        </div>
                                                    </div>
                                                    <div class="btn-group mb-2 mr-2">
                                                        <button type="button" class="btn btn-info">Info</button>
                                                        <button type="button" class="btn btn-info dropdown-toggle dropdown-toggle-split" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><span class="sr-only">Toggle Dropdown</span></button>
                                                        <div class="dropdown-menu">
                                                            <a class="dropdown-item" href="#!">Action</a>
                                                            <a class="dropdown-item" href="#!">Another action</a>
                                                            <a class="dropdown-item" href="#!">Something else here</a>
                                                            <div class="dropdown-divider"></div>
                                                            <a class="dropdown-item" href="#!">Separated link</a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div> */}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default usersList;
