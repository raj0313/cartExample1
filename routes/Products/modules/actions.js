export function getProductList(data){
    return{
        type : 'GET_PRODUCT_LIST',
        data
    }

}
export function addToCart(){
    return{
        type:'ADD_TO_CART',
        payload
    }
}