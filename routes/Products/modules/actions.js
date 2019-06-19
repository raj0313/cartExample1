

export function getProductList(data){
    return{
        type : 'GET_PRODUCT_LIST',
        data
    }

}
export function addToCart(payload){
   
    return{
        type:'ADD_TO_CART',
        payload
    }
}
export function addQuantity(payload){
   
    return{
        type:'ADD_QUANTITY',
        payload
    }
}
export function removeQuantity(payload){
   
    return{
        type:'REMOVE_QUANTITY',
        payload
    }
}