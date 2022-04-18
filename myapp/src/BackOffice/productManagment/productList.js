import React from 'react'
import { Component } from 'react/cjs/react.production.min'
import { Card, Form, Button } from "react-bootstrap";

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEdit, faTrash } from '@fortawesome/free-solid-svg-icons'
import tutorialServies from '../../services/tutorial.servies';

class productList extends Component {
    constructor(props) {
        super(props);

        this.state = {
            ed: false,
            produits: [],
            prod: [],
            id: "",
            NameP: '',
            URL: '',
            Brand: '',
            Category: '',
            Description: '',
            Price: '',
            Quantity: ''
        }
        this.HandleChangeBrand = this.HandleChangeBrand.bind(this);
        this.HandleChangeCategory = this.HandleChangeCategory.bind(this);
        this.HandleChangeDescription = this.HandleChangeDescription.bind(this);
        this.HandleChangePrice = this.HandleChangePrice.bind(this);
        this.HandleChangeQuantity = this.HandleChangeQuantity.bind(this);
        this.handleChangeNameP = this.handleChangeNameP.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.cancel = this.cancel.bind(this);
    }
    componentDidMount() {
        tutorialServies.getProduits().then((res) => {
            this.setState({ produits: res.data._embedded.produits });
            console.log(this.state.produits)
        });
    }
    handleChangeNameP(event) {
        this.setState({ NameP: event.target.value });
    }
    HandleChangeBrand(event) {
        this.setState({ Brand: event.target.value });
    }
    HandleChangeCategory(event) {
        this.setState({ Category: event.target.value });
    }
    HandleChangeDescription(event) {
        this.setState({ Description: event.target.value });
    }
    HandleChangePrice(event) {
        this.setState({ Price: event.target.value });
    }
    HandleChangeQuantity(event) {
        this.setState({ Quantity: event.target.value });
    }
    del(i) {
        tutorialServies.deleteProduct(i).then(res => {
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
            NameP: i.nomP,
            Brand: i.marque,
            Category: i.categorie,
            URL: i.imageURL,
            Description: i.description,
            Price: i.prix,
            Quantity: i.qteStock

        });
        //console.log(i);
    }
    handleSubmit = (e) => {
        e.preventDefault();
        if (this.state.NameP == "") {
            toast.error("saisie votre Prénom");
        }
        else if (this.state.Brand == "") {
            toast.error("saisie votre Adresse ");
        }
        else if (this.state.Description == "") {
            toast.error("saisie votre Numéro de Téléphone");
        }
        else if (this.state.Category == "") {
            toast.error("saisie votre Numéro de CIN");
        }
        else if (this.state.Price == "") {
            toast.error("saisie votre Email");
        }
        else if (this.state.Quantity == "") {
            toast.error("saisie votre Password ");
        }
        else {
            toast.success("Inscription réussite");

            let pro = {
                nomP: this.state.NameP,
                marque: this.state.Brand,
                categorie: this.state.Category,
                imageURL: this.state.URL,
                remise: 0,
                prix: this.state.Price,
                qteStock: this.state.Quantity,
                description: this.state.Description
            }
            console.log('client=>' + JSON.stringify(pro));
            tutorialServies.updateProduct(this.state.id, pro).then(res => {
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
                                                <h5 class="m-b-10">Product Management</h5>
                                            </div>
                                            <ul class="breadcrumb">
                                                <li class="breadcrumb-item"><a href="index.html"><i class="feather icon-home"></i></a></li>
                                                <li class="breadcrumb-item"><a href="javascript:">Products</a></li>
                                                <li class="breadcrumb-item"><a href="javascript:">Product List</a></li>
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
                                                    <h5>Product List</h5>
                                                </div>

                                                <div style={{ margin: '30px' }} id="tab3default">

                                                    <table class="table table-hover">
                                                        <thead className="thead-light">

                                                            <tr>
                                                                <th scope="col">Product Name</th>
                                                                <th scope="col">Id</th>
                                                                <th scope="col">Brand</th>
                                                                <th scope="col">Description</th>
                                                                <th scope="col">Category</th>
                                                                <th scope="col">Price</th>
                                                                <th scope="col">Quantity</th>
                                                                <th scope="col"></th>
                                                                <th scope="col"></th>
                                                            </tr>
                                                        </thead>
                                                        <tbody id="t">
                                                            {
                                                                this.state.produits.map(
                                                                    produit =>
                                                                        <tr>
                                                                            <td>{produit.nomP}</td>
                                                                            <td>{produit.id}</td>
                                                                            <td>{produit.marque}</td>
                                                                            <td>{produit.description}</td>
                                                                            <td>{produit.categorie}</td>
                                                                            <td>{produit.prix}</td>
                                                                            <td>{produit.qteStock}</td>
                                                                            <td style={{ width: '10px' }}><button onClick={this.edit.bind(this, produit)} style={{ background: "rgb(10 77 198)", borderRadius: '10px', color: 'white', width: "27px", height: "30px", border: "aliceblue" }}><FontAwesomeIcon icon={faEdit} style={{ width: "14px" }} /></button></td>
                                                                            <td ><button onClick={this.del.bind(this, produit.id)} style={{ background: "#ff2d2d", borderRadius: '10px', color: 'white', width: "27px", height: "30px", border: "aliceblue" }}><FontAwesomeIcon icon={faTrash} style={{ width: "14px" }} /></button></td>
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
                                                            <span><h5>Edit product </h5>id : {this.state.id}</span>
                                                        </div>
                                                        <div className="a2">
                                                            <Card className={"border border-light bg-light text-black"}>
                                                                <Form onSubmit={this.handleSubmit}>
                                                                    <Card.Body>
                                                                        <Form.Group controlId="formGridNom" >
                                                                            <Form.Label>Product Name</Form.Label>
                                                                            <Form.Control type="text" placeholder="NameP" value={this.state.NameP} onChange={this.handleChangeNameP} className="bg-light text-black" name="NameP" />
                                                                        </Form.Group>
                                                                        <Form.Group controlId="formGridPrenom" >
                                                                            <Form.Label>Brand</Form.Label>
                                                                            <Form.Control type="text" placeholder="Brand" value={this.state.Brand} onChange={this.HandleChangeBrand} className="bg-light text-black" name="Brand" />
                                                                        </Form.Group>
                                                                        <Form.Group controlId="formGridPrenom" >
                                                                            <Form.Label>Description</Form.Label>
                                                                            <Form.Control type="text" placeholder="Description" value={this.state.Description} onChange={this.HandleChangeDescription} className="bg-light text-black" name="Description" />
                                                                        </Form.Group>
                                                                        <Form.Group controlId="formGridPrenom" >
                                                                            <Form.Label>Category</Form.Label>
                                                                            <Form.Control type="text" placeholder="Category" value={this.state.Category} onChange={this.HandleChangeCategory} className="bg-light text-black" name="Category" />
                                                                        </Form.Group>
                                                                        <Form.Group controlId="formGridPrenom" >
                                                                            <Form.Label>Price</Form.Label>
                                                                            <Form.Control type="text" placeholder="Price" value={this.state.Price} onChange={this.HandleChangePrice} className="bg-light text-black" name="Price" />
                                                                        </Form.Group>
                                                                        <Form.Group controlId="formGridPrenom" >
                                                                            <Form.Label>Quantity</Form.Label>
                                                                            <Form.Control type="text" placeholder="Quantity" value={this.state.Quantity} onChange={this.HandleChangeQuantity} className="bg-light text-black" name="Quantity" />
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
export default productList;
