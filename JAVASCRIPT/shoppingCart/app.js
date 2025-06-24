let cart = {};
const products = [
  { id: 1, name: "Product 1", price: 25 },
  { id: 2, name: "Product 2", price: 50 },
  { id: 3, name: "Product 3", price: 75 },
];


function showProducts(){

    let str = ``;

    products.map((value)=>{
      str+= `Product id:  ${value.id} \nProduct Name: ${value.name}\nProduct price: ${value.price}\n`;
    });

    console.log("Product List");
    console.log(str);

};

// showProducts();

const addToCart = (id) =>{
    cart = {...cart,[id]:1};
};

// addToCart(1);
// addToCart(3);
// addToCart(2);

const increment = (id) =>{
  cart = {...cart,[id] : cart[id]+1};
}

const decrement = (id) =>{
  cart = {...cart,[id]:cart[id]-1};
}
// increment(1);
// decrement(2);

const orderValue = (id) =>{
  let total  = 0;
  products.map(val =>{
  if(cart[val.id])
      total += cart[val.id] * val.price; 
  });
  
  console.log("Total order value:",total);
}
const order = products.reduce((sum,val)=>{
  return sum + (cart[val.id] * val.price) ?? 0;
});

const showCart = () =>{
  let str = ``;
  products.map(val => {
    if(cart[val.id])
      str+=`${val.name} - ${val.price}-${cart[val.id]}-${cart[val.id] * val.price}\n`;
  });
  console.log("My Cart");
  console.log(str);
}

// orderValue();
// showCart();
