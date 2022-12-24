const stockProductos = [
  {
    id: 1,
    nombre: "Harry Potter y la cámara secreta",
    cantidad: 1,
    desc: "Fantasia",
    autor: "Jk.Rowling",
    precio: 1000,
    img: "img/harrypotter.jpg",
  },
  {
    id: 2,
    nombre: "Viaje al centro de la tierra",
    cantidad: 1,
    desc: "fantasia",
    autor: "Julio Verne",
    precio: 1500,
    img: "img/viaje.jpg",
  },
  {
    id: 3,
    nombre: "El codigo Da Vinci (novela)",
    cantidad: 1,
    desc: "Misterio",
    autor: "Dan Brown",
    precio: 1570,
    img: "img/davinci.jpg",
  },
  {
    id: 4,
    nombre: "El ser y la nada (Colección pensamiento)",
    cantidad: 1,
    desc: "Filosofia",
    autor: "Jean Paul Sartre",
    precio: 1000,
    img: "img/elser.jpg",
  },
  {
    id: 5,
    nombre: "El Principito",
    cantidad: 1,
    desc: "Fantasia",
    autor: "Antoine De Saint Exupéry",
    precio: 900,
    img: "img/principito.jpg",
  },
  {
    id: 6,
    nombre: "Cien Años De Soldead",
    cantidad: 1,
    desc: "Novela",
    precio: 1100,
    autor: "Gabriel Garcia Maquez",
    img: "img/cienaños.jpg",
  },
  {
    id: 7,
    nombre: "Cuentos De Amor,de locura y de muerte",
    cantidad: 1,
    desc: "Cuentos Cortos",
    autor: "Horacio Quiroga",
    precio: 1250,
    img: "img/locura.png",
  },
  {
    id: 8,
    nombre: "Puro Futbol",
    cantidad: 1,
    desc: "Cuentos",
    precio: 100,
    autor: "Roberto Fontanarrosa",
    img: "img/puro.jpg",
  },
  {
    id: 9,
    nombre: "Martin Fierro",
    cantidad: 1,
    desc: "Clasicos de siempre",
    autor:"José Hernandez",
    precio: 1700,
    img: "img/martin.jpg",
  },
  {
    id: 10,
    nombre: "La Ilíada",
    cantidad: 1,
    desc: "Epopeya Griega",
    autor: "Homero",
    precio: 900,
    img: "img/iliada.jpg",
  },
  {
    id: 11,
    nombre: "Alicia en el pais de las maravillas",
    cantidad: 1,
    desc: "Fantasia",
    autor: "Lewis Carroll",
    precio: 1400,
    img: "img/alicia.png",
  },
  {
    id: 12,
    nombre: "El Instituto",
    cantidad: 1,
    desc: "Misterio",
    autor: "Estephen King",
    precio: 1600,
    img: "img/instituto.jpeg",
  },
];
let carrito = [];

const contenedor = document.querySelector('#contenedor');
const carritoContenedor = document.querySelector('#carritoContenedor'); 
const vaciarCarrito = document.querySelector('#vaciarCarrito');
const precioTotal = document.querySelector('#precioTotal');


stockProductos.forEach((prod) => {
  const { id, nombre, precio, desc, autor, img, cantidad } = prod;
  if (contenedor) {
    contenedor.innerHTML += `
    <div class="card mt-3" style="width: 18rem;">
    <img class="card-img-top mt-2" src="${img}" alt="Card image cap">
    <div class="card-body">
      <h5 class="card-title">${nombre}</h5>
      <p class="card-text">Precio: ${precio}</p>
      <p class="card-text">Descripcion: ${desc}</p>
      <p class="card-text">Autor: ${autor}</p>
      <p class="card-text">Cantidad: ${cantidad}</p>
      <button class="btn btn-primary" onclick="agregarProducto(${id})">Comprar Producto</button>
    </div>
  </div>
    `;
  }
}); 



function agregarProducto(id) {

   const existe  = carrito.some(prod => prod.id === id)
  
   if (existe) {
    const prod = carrito.map(prod => {
      if(prod.id === id) {
        prod.cantidad++
      }
    })
  }else {   
  const item = stockProductos.find((prod) => prod.id === id) 
  carrito.push(item)
  } 


  mostrarCarrito()
}

const mostrarCarrito = () => {
    const modalBody  = document.querySelector('.modal .modal-body')
    


    modalBody.innerHTML = ''     //limpio html 
    carrito.forEach((prod) => {
      const {id, nombre, img, cantidad, precio} = prod 
      modalBody.innerHTML += `
      <div class="modal-contenedor">
      <div>
      <img class="img-fluid img-carrito" src="${img}"/>
      <div>
      
      <div>
      <p>Producto: ${nombre}</p>
      <p>Producto: ${precio}</p>
      <p>Cantidad: ${cantidad}</p> 

      <button onclick="eliminarProducto(${id})" class="btn btn-danger">Eliminar Producto</button> 
      <div>`
    })

    //mensaje de que no se agregó nada al carrito 

    if(carrito.length === 0) {
      modalBody.innerHTML += `
      <p class="text-center text-primary parrafo">El carrito está vacio.</p>`
    } 

    //contador del carrito
    carritoContenedor.textContent = carrito.length;

    //calculo del costo total. 
    precioTotal.textContent = carrito.reduce((acc, prod) => acc + prod.cantidad * prod.precio, 0); 
} 

function eliminarProducto(id) {
    const libroId = id 
    carrito = carrito.filter((libro) => libro.id !== libroId)
    mostrarCarrito();
}