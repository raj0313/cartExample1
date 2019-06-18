import React,{Component} from "react"
import {Card, Button} from 'react-native-elements'
import {Text,View,FlatList,TouchableOpacity} from 'react-native'
import connect from 'react-redux'
import { bindActionCreators } from "redux";

const products =
[
{ 	"id" :0,
    "name" :"Sledgehammer",
    "price": 125.76
},
{	
    "id" :0,
    "name" :"Axe",
  "price": 190.51
},
{	"id" :0,
    "name" :	"Bandsaw",
    "price": 562.14
},
{	"id" :0,
    "name": "Chisel",
    "price": 13.9

},
{	"id" :0,
    "name": "Hacksaw",
    "price" : 19.45
}
]
class ProductList extends React.Component{
    constructor(){
        super(props)
        {
          
        }
    }
    componentDidMount(){
        //call to action 
        this.props.getProductList(products)

    }
    render()
    
    {
        return(
            <View style = {{flex:1}}>
            {this.props.products.length>=1 &&
            <FlatList
            keyExtractor = {this.keyExtractor}
            renderItem = {()=> <ProductListing productlist={this.props.products}/>}
            data = {this.props.products}
            />
            
            }
            </View>             
            
            
        )
    }

}
const mapStatetoProps =(state)=>({
        products    :   state.products.products,
        quantity    :   state.products.quantity,
        total       :   state.products.total
})
const mapDispatchtoProps =(dispatch)=>{
    return bindActionCreators=({
    getProductList,
    addToCart
},dispatch);
}
export default connect(mapStatetoProps,mapDispatchtoProps)(ProductList)