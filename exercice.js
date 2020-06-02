var express = require('express');
var app = express();
var bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended : false
}));

console.log('test');

//lIVRE
let tablivre= [
    {
        'name' : 'Harry potter', 
        'ISBN' : 'RDGHJ',
        'price' : '13.00',
        'id_author': '1',
    },
    {
        'name' : 'pouet', 
        'ISBN' : 'RTHGF',
        'price' : '14.00',
        'id_author' : '1',
    }
]

app.post('/livre', (req, res) => {
        let livre = {
            'name' : req.body.name,
            'ISBN' : req.body.ISBN,
            'price' : req.body.price,
            'id_author': req.body.id_author
        };
        res.json(livre);
        console.log(livre);
        tablivre.push(livre);
})

app.route('/livre/:idlivre')
    .get((req, res) => {
        let idlivre = req.params.idlivre;

        if(tablivre[idlivre] != null){
            res.json(tablivre[idlivre]);
        }
        else{
            res.send('Pas de livre');
        }
    })
    .put((req, res) => {
        res.send('modifier un livre')
        let idlivre = req.params.idlivre;
        if(tablivre[idlivre] != null){
            let livre = {
                'name' : req.body.name,
                'ISBN' : req.body.ISBN,
                'price' : req.body.price,
                'id_author': req.body.id_author
            };
            res.json(livre);
            tablivre[idlivre] = livre;
        }
        else{
            res.send('Pas de livre');
        }
    })
    .delete((req, res) => {
        let idlivre = req.params.idlivre;
        res.send('supprimer un livre')
        if(tablivre[idlivre] != null){
            res.json(livre);
            tablivre.splice(idlivre);
        }
        else{
            res.send('Pas de livre');
        }

    })


//Auteur
let tabauteur= [
    {
        'first_name' : 'Mehdi', 
        'last_name' : 'MOAD',
        'email' : 'mehdi.moad@estiam.com',
        
    },

]

app.post('/auteur', (req, res) => {
        let auteur = {
            'first_name' : req.body.first_name,
            'last_name' : req.body.last_name,
            'email' : req.body.email,
            
        };
        res.json(auteur);
        console.log(auteur);
        tabauteur.push(auteur);
})

app.route('/auteur/:idauteur')
    .get((req, res) => {
        let idauteur = req.params.idauteur;

        if(tabauteur[idauteur] != null){
            res.json(tabauteur[idauteur]);
        }
        else{
            res.send("Pas d'auteur");
        }
    })
    .put((req, res) => {
        res.send('modifier un auteur')
        let idauteur = req.params.idauteur;
        if(tabauteur[idauteur] != null){
            let auteur = {
                'first_name' : req.body.first_name,
                'last_name' : req.body.last_name,
                'email' : req.body.email,
                
            };
            res.json(auteur);
            tabauteur[idauteur] = auteur;
        }
        else{
            res.send("Pas d'auteur");
        }
    })
    .delete((req, res) => {
        let idauteur = req.params.idauteur;
        res.send('supprimer un auteur')
        if(tabauteur[idauteur] != null){
            res.json(auteur);
            tabauteur.splice(idauteur);
        }
        else{
            res.send("Pas d'auteur");
        }

    })

// PURCHASE
let tabpurchase = [
    {
        'id_customer' : '1', 
        'id_book' : '0',
        'date' : '2020-06-02',
        
    },

]

app.post('/purchase', (req, res) => {
        let purchase = {
            'id_customer' : req.body.id_customer,
            'id_book'  : req.body.id_book,
            'date' : req.body.date,
            
        };
        res.json(purchase);
        console.log(purchase);
        tabpurchase.push(purchase);
})

app.route('/purchase/:idpurchase')
    .get((req, res) => {
        let idpurchase = req.params.idpurchase;

        if(tabpurchase[idpurchase] != null){
            res.json(tabpurchase[idpurchase]);
        }
        else{
            res.send("Pas d'purchase");
        }
    })
    .put((req, res) => {
        res.send('modifier un purchase')
        let idpurchase = req.params.idpurchase;
        if(tabpurchase[idpurchase] != null){
            let purchase = {
                'id_customer' : req.body.id_customer,
                'id_book' : req.body.id_book,
                'date' : req.body.id_date,
                
            };
            res.json(purchase);
            tabpurchase[idpurchase] = purchase;
        }
        else{
            res.send("Pas d'purchase");
        }
    })
    .delete((req, res) => {
        let idpurchase = req.params.idpurchase;
        res.send('supprimer un purchase')
        if(tabpurchase[idpurchase] != null){
            res.json(purchase);
            tabpurchase.splice(idpurchase);
        }
        else{
            res.send("Pas d'purchase");
        }

    })
//CUSTOMER
let tabcustomer= [
    {
        'first_name' : 'Mehdi', 
        'last_name' : 'MOAD',
        'email' : 'mehdi.moad@estiam.com',
        
    },

]

app.post('/customer', (req, res) => {
        let customer = {
            'first_name' : req.body.first_name,
            'last_name' : req.body.last_name,
            'email' : req.body.email,
            
        };
        res.json(customer);
        console.log(customer);
        tabcustomer.push(customer);
})

app.route('/customer/:idcustomer')
    .get((req, res) => {
        let idcustomer = req.params.idcustomer;

        if(tabcustomer[idcustomer] != null){
            res.json(tabcustomer[idcustomer]);
        }
        else{
            res.send("Pas d'customer");
        }
    })
    .put((req, res) => {
        res.send('modifier un customer')
        let idcustomer = req.params.idcustomer;
        if(tabcustomer[idcustomer] != null){
            let customer = {
                'first_name' : req.body.first_name,
                'last_name' : req.body.last_name,
                'email' : req.body.email,
                
            };
            res.json(customer);
            tabcustomer[idcustomer] = customer;
        }
        else{
            res.send("Pas d'customer");
        }
    })
    .delete((req, res) => {
        let idcustomer = req.params.idcustomer;
        res.send('supprimer un customer')
        if(tabcustomer[idcustomer] != null){
            res.json(customer);
            tabcustomer.splice(idcustomer);
        }
        else{
            res.send("Pas d'customer");
        }

    })

app.listen(3000);
