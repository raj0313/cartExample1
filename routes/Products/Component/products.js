import React,{Component} from "react"
import {Card, Button, ListItem} from 'react-native-elements'
import {Text,View,FlatList,TouchableOpacity} from 'react-native'
import {connect} from 'react-redux'
import { bindActionCreators } from "redux"
import {getProductList,addToCart,addQuantity,removeQuantity} from '../modules/actions'
import Icon from 'react-native-vector-icons/FontAwesome'
import ProductListing from './ProductListing'
import { Actions } from "react-native-router-flux";


const products =
[
{ 	id :0,
    name :"Sledgehammer",
    price: 125.76
},
{	
    id :1,
    name :"Axe",
    price: 190.51
},
{	id :2,
    name :	"Bandsaw",
    price: 562.14
},
{	id :3,
    name: "Chisel",
    price: 13.9

},
{	id :4,
    name: "Hacksaw",
    price : 19.45
}
]


class ProductList extends React.Component{
    constructor(){
        super()
        {
          
        }
    }
    componentDidMount(){
        //call to action 
        //this.props.getProductList(products)
        console.log(this.props)
    }
    
    render()
    
    {
        return(
            <View style = {{flex:1}}>
            {products.length>=1 &&
            <FlatList
            data = {products}
            keyExtractor={(item, index) => item.key}
            renderItem = {(item)=><ProductListing 
                data = {item}  
                addQuantity = {this.props.addQuantity}
                removeQuantity = {this.props.removeQuantity}
                addToCart = {this.props.addToCart}/>}
            />
            }
            
             {this.props.cart.length>=1 &&
            
                <TouchableOpacity onPress={()=>  Actions.push("cart")} 
                style={{bottom:0,
                  flexDirection:"row",
                height:"5%",
                justifyContent:"space-around",
                alignItems:"center",
                backgroundColor:"#3E9920",
                borderRadius:0}}>
                 <Text  
                 style={{color:"#fff",
                 textAlign:"center",
                 textAlignVertical:"center"}}>  
                 VIEW CART 
                 </Text>
                 <Text  style={{color:"#fff",
                 textAlign:"center",
                 textAlignVertical:"center"}}> NZ $   Total:{this.props.cart.reduce((total,item)=>{
                    return total + item.total
                },0)} 
                </Text>
                <Text  style={{color:"#fff",
                 textAlign:"center",
                 textAlignVertical:"center"}}> items : {this.props.cart.length} </Text>
                 </TouchableOpacity>
                     
            }
            </View>             
            )
        }

}
const mapStatetoProps =(state)=>({
        products    :   state.products.products || "",
        quantity    :   state.products.quantity || 0,
        total       :   state.products.total || 0,
        quantity    :   state.products.quantity ||1,
        cart        :   state.products.cart || []
})
const mapDispatchtoProps =(dispatch)=>{
    return bindActionCreators({
    getProductList,
    addToCart,
    addQuantity,
    removeQuantity
},dispatch);
}
export default connect(mapStatetoProps,mapDispatchtoProps)(ProductList)