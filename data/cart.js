export const cart = [];

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
}