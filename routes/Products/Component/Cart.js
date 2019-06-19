import React,{Component} from "react"
import {Card, Button, ListItem} from 'react-native-elements'
import {Text,View,FlatList,TouchableOpacity,StyleSheet,ScrollView,Image} from 'react-native'
import {connect} from 'react-redux'
import { bindActionCreators } from "redux"
import {removeCart} from '../modules/actions'
import Icon from 'react-native-vector-icons/Entypo'
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
                    <Text style={styles.text2}><Icon name ="circle-with-cross"/>{item.price} x {item.quantity} = {item.total.toFixed(2)}</Text>
                    <TouchableOpacity style={{backgroundColor:"red",width:"40%"}}>
                    <Text style={{color:"#fff",textAlign:"center",textAlignVertical:"center"}} onPress={()=> this.props.removeCart(index)}><Icon name ="cross"/>Remove</Text>
                    </TouchableOpacity>

            </View>
           
            </Card>
            )
           })
           }
         
           <Text style={{position:"absolute",bottom:0,textAlign:"center"}}>Total:{this.props.cart.reduce((total,item)=>{
               return total + item.total
           },0)}</Text>
          
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
        removeCart
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
    text2:{
        fontSize: 15,
        fontWeight: 'bold',
        color:"black",
        justifyContent: 'center', alignItems: 'center',
        marginBottom:20,
    
    }
   
  });
export default connect(mapStatetoProps,mapDispatchtoProps)(Cart)