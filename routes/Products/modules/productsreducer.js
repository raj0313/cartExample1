const initialState ={
    isLoading : false,
    products :[],
    cart :[],
    quantity : 1,
    total : 0
}

export default function ProductReducer(state=initialState,action){
    switch(action.type)
    {
        case 'GET_PRODUCT_LIST':
           return {  ...state,
                products : data
            }
            
    }

}