import { combineReducers } from 'redux'
import ProductReducer from './routes/Products/modules/productsreducer'

 export const makeRootReducer= () =>{
	return combineReducers({
        products:ProductReducer
		});
} 
export default makeRootReducer;