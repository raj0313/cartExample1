

const initialState ={
    isLoading : false,
    products :[],
    cart :[],
    quantity : 1,
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
               
              var index = state.cart.findIndex(p => p.id == action.payload.id)
             
              if(index > -1)
              {
                state.cart.splice(index,1)
                var newData = {
                    id:action.payload.id,
                    name: action.payload.name,
                    price:action.payload.price,
                    quantity: state.quantity ,
                    total : action.payload.price * state.quantity
                }
                return {  
                    ...state,
                        cart:[...state.cart,newData],
                        
                        
                    }
              }
              var newData = {
                id:action.payload.id,
                name: action.payload.name,
                price:action.payload.price,
                quantity:action.payload.quantity,
                total : action.payload.price * action.payload.quantity
            }
                return {  
                ...state,
                    cart:[...state.cart,newData],
                   
                    
                
                    
                }
                case 'ADD_QUANTITY':
               var index = state.cart.findIndex(p=>p.id === action.payload)

               
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

                    case 'REMOVE_CART':{
                       
                            return{
                                ...state,
                                cart:[
                                    ...state.cart.slice(0, action.payload),
                                    ...state.cart.slice(action.payload + 1)
                                ]
                            }
                        }
                    
                
        default:
        return{...state}
    }

}