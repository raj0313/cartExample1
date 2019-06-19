import React,{Component} from "react"
import {Card, Button, ListItem} from 'react-native-elements'
import {Text,View,FlatList,TouchableOpacity,StyleSheet,ScrollView} from 'react-native'
import {connect} from 'react-redux'
import { bindActionCreators } from "redux"
import {getProductList,addToCart,addQuantity,removeQuantity} from '../modules/actions'
import Icon from 'react-native-vector-icons/FontAwesome'
import ProductListing from './ProductListing'
import { Actions } from "react-native-router-flux";





class Cart extends React.Component{
    constructor(){
        super()
        {
          
        }
    }
    componentDidMount(){
        //call to action 
        //this.props.getProductList(products)
        console.log(this.props.cart)
    }
    
    render()
    
    {
        return(
            <ScrollView contentContainerStyle = {{paddingBottom:15}}>
            
           {this.props.cart.map((item,index)=>{
               return(
            <Card key={index}>
           
            <View style ={{alignItems : "center"}}>
           
                <Text style={styles.text}>{item.name}</Text>
                    <Text><Icon name ="dollar"/>{item.price} x {item.quantity} = {this.props.products.total}</Text>
            </View>
              
            </Card>
            )
           })
           }
          
         </ScrollView>  
         )
        }

}
const mapStatetoProps =(state)=>({
       cart         :   state.products.cart || [],
       products     :   state.products.products
})
const mapDispatchtoProps =(dispatch)=>{
    return bindActionCreators({
    getProductList,
    addToCart,
    addQuantity,
    removeQuantity
},dispatch);
}
const styles = StyleSheet.create({
   
    container: {
        flex:1,
        flexDirection:"row",
        marginBottom:20,
        justifyContent :"space-around",
        
    },
    text: {
        fontSize: 19,
        fontWeight: 'bold',
        color:"black",
        justifyContent: 'center', alignItems: 'center'
    },
   
  });
export default connect(mapStatetoProps,null)(Cart)