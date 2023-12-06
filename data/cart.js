export let cart = JSON.parse(localStorage.getItem('cart'));

if(!cart){
    cart =[{
        productId:'e43638ce-6aa0-4b85-b27f-e1d07eb678c6',
        quantity:2
    },{
        productId:'15b6fc6f-327a-4ec4-896f-486349e85a3d',
        quantity:1
    }];
}

function saveTpStorage(){
    localStorage.setItem('cart',JSON.stringify(cart));
}

export function addToCart(productId){
    let matchingItem;
    cart.forEach((carItem)=>{
        if (productId === carItem.productId){
            matchingItem = carItem;
        }
    })
    if(matchingItem){
        matchingItem.quantity++;
    }
    else{
        cart.push({
            productId: productId,
            quantity: 1
        })
    }
    saveTpStorage();
}

export function removeFromCart(productId){
    const newCart = [];

    cart.forEach((carItem) => {
        if (carItem.productId !== productId){
            newCart.push(carItem);
        }
    });

    cart = newCart;
    saveTpStorage();
}