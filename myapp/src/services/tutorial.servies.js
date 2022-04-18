import http from "../http-common";
class DataService {
    getElectro() { return http.get("/produits/search/byCategorie?g=electromenager"); }
    getDeco() { return http.get("/produits/search/byCategorie?g=decoration"); }
    getLinge() { return http.get("/produits/search/byCategorie?g=linge"); }
    get(id) { return http.get(`/tutorials/${id}`); }

    getProduitByid(id) { return http.get(`/produits/${id}`); };

    SearchProduits(name) { return http.get(`/produits/search/byName?g=${name}`); };

    getPanier(id) { return http.get(`/client/panier/${id}`); };
    increment(id, idP) { return http.put(`/client/panier/${id}/${idP}`, 1) }
    decrement(id, idP) { return http.put(`/client/panier/${id}/${idP}`, -1) }
    del(id, idP) { return http.delete(`/client/panier/${id}/${idP}`) };

    getByEmail(email) { return http.get(`/clients/search/byEmail?p=${email}`) };

    getcmd3(idClient) { return http.get(`/commandes/search/byidClient?p=${idClient}`) };
    getCmd(id) { return http.get(`/command/${id}`); };
    getCmd2(id) { return http.get(`/commandes/${id}/comm`); };


    getProduits() { return http.get(`/produits`); }
    updateProduct(id,data){return http.put(`/produits/${id}`, data);}
    deleteProduct(id) { return http.delete(`/produits/${id}`); }
    createProduct(data) { return http.post("/produits", data); }


    

    getclients() { return http.get("/clients"); }
    updateclients(id,data){return http.put(`/clients/${id}`, data);}
    deleteclients(id) { return http.delete(`/clients/${id}`); }
    createClient(data) { return http.post("/clients", data); }

    addPanier(idC,idP) { return http.post(`/client/panier/${idC}/${idP}`); }
    addCommande(idC) { return http.post(`/command/${idC}`); }



    update(id, data) { return http.put(`/tutorials/${id}`, data); }
    delete(id) { return http.delete(`/tutorials/${id}`); }
    deleteAll() { return http.delete(`/tutorials`); }
    findByTitle(title) { return http.get(`/tutorials?title=${title}`); }
}
export default new DataService();