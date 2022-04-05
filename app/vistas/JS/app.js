let mprods=newMap();
let carrito=new Array();   

const btnAddProduct = document.getElementById("btnaddP"); //Agregar nuevos productos a la base de datos a traves de un formulario
btnAddProduct.addEventListener("click", () => {
    let name = document.getElementById("txtnameP").value ;
    let cost = document.getElementById("txtcost").value;
    let quantity = document.getElementById("txtquantity").value; 
    let data = {
             name:name,
             cost:cost,
             quantity:quantity
            }
        console.log(data);

    fetch ('http://localhost:1339/api/product', {
        method:'Post',
        body:JSON.stringify(data),
        headers:{'Content-Type': 'application/json'}
    })    
    .then(response => response.json())
    .then(json => {
        let detproduct = document.getElementById("detproduct");

        detproduct.innerHTML += 
        '<p>Se agrego el producto a la base de datos</p>'
    })
})

const btnCargarProduct = document.getElementById("btncargarP"); //carga el precio y cantidad de los productos y los acomoda en la tabla del html
btnCargarProduct.addEventListener("click", () => {
    fetch('http://localhost:1339/api/product')
  .then(response => response.json())
  .then(json => {
      const data = document.getElementById("slproduct") //modificarlo a forma de selec 
      let body = ''
      for (let i = 0; i < json.length; i++) {  // se puede modificar o dejarlo asi, no hay mucho problema
        mprods.set(json[i].id, json[i].name);
         body += `<option value=${json[i].id}>${json[i].name}</option>`
    }
        data.innerHTML = body;
  });
});


//agregar clientes a la base de datos a traves de un formulario
    const btnAddClient = document.getElementById("btnaddC"); //Agregar nuevos productos a la base de datos a traves de un formulario
    btnAddClient.addEventListener("click", () => {
    let name = document.getElementById("txtnameC").value ;
    let rfc = document.getElementById("txtrfc").value;
    let zipcode = document.getElementById("txtzip").value; 
    let data = {
             name:name,
             rfc:rfc,
             zipcode:zipcode
            }
        console.log(data);

    fetch ('http://localhost:1339/api/client', {
        method:'Post',
        body:JSON.stringify(data),
        headers:{'Content-Type': 'application/json'}
    })    
    .then(response => response.json())
    .then(json => {
        let detclient = document.getElementById("detclient");

        detclient.innerHTML += 
        '<p>Se agrego el cliente a la base de datos</p>'
    })
})

const btnCargarClient = document.getElementById("btncargarC"); //carga el precio y cantidad de los productos y los acomoda en la tabla del html
btnCargarProduct.addEventListener("click", () => {
    fetch('http://localhost:1339/api/client')
  .then(response => response.json())
  .then(json => {
      const data = document.getElementById("slclient") //modificarlo a forma de selec 
      let body = ''
         body += `<option value=${json[i].id}>${json[i].name}</option>`
        data.innerHTML = body;
  });
});