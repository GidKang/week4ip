let carts = document.querySlectorAll('.add-cart');

let products = [
    {
        name: 'Margehrita',
        tag: 'margehrita',
        price: 4.20,
        inCart: 0
    },
    {
        name: 'Hawaiian',
        tag: 'hawaaian',
        price: 4.20,
        inCart: 0
    },
    {
        name: 'Seafood',
        tag: 'seafood',
        price: 4.20,
        inCart: 0
    },
    {
        name: 'Pepperoni',
        tag: 'pepperoni',
        price: 4.20,
        inCart: 0
    },
    {
        name: 'Veggie',
        tag: 'veggie',
        price: 4.20,
        inCart: 0
    },
    {
        name: 'Meat Lover',
        tag: 'meatlover',
        price: 4.20,
        inCart: 0
    },

]

for (let i=0; i < carts.length; i++){
    carts[i].addEventListener('click', () =>{
      cartNumbers()
    })
}

function cartNumbers(){
    let productNumbers = localStorage.getItem('cartNumbers');

    productNumbers = parseInt(productNumbers);
    
    localStorage.setItem('cartNumbers', 1);
}