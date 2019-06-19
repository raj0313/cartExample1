

const initialState ={
    isLoading : false,
    products :[],
    cart :[],
    quantity : 0,
    total : 0,
    count : 0
    
}

export default function ProductReducer(state=initialState,action){
    switch(action.type)
    {
            case 'GET_PRODUCT_LIST':
            return {  ...state,
                products : data
            }
            case 'ADD_TO_CART':
                console.log(action.payload)
               let idAlreadyExists = state.cart.indexOf(action.payload.name) > -1
              var index = state.cart.findIndex(p => p.id == action.payload.id)
             
              if(index > -1)
              {
                  
                state.cart.splice(index)
                var newData = {
                    id:action.payload.id,
                    name: action.payload.name,
                    price:action.payload.price,
                    quantity:state.quantity
                }
                return {  
                    ...state,
                        cart:[...state.cart,newData],
                        total : action.payload.price * action.payload.quantity,
                        quantity : state.quantity + 1
                    }
              }
                return {  
                ...state,
                    cart:[...state.cart,action.payload],
                    total : action.payload.price * action.payload.quantity,
                    quantity:1
                
                    
                }
                case 'ADD_QUANTITY':
                return{
                    ...state,
                    quantity : state.quantity + 1
                }
                case 'REMOVE_QUANTITY':
                    if(state.quantity <= 1)
                    {
                        return{
                            ...state,
                            quantity : state.quantity
                        }
        
                    }
                    return{
                        ...state,
                        quantity : state.quantity - 1 
                    }
                
        default:
        return{...state}
    }

}