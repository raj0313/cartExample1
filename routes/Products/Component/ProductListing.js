import React,{Component} from "react"
import {Card, Button} from 'react-native-elements'
import {Text,View,FlatList,TouchableHighlight,Image,StyleSheet} from 'react-native'
import  Icon  from 'react-native-vector-icons/FontAwesome'
import { connect } from 'react-redux'
class ProductListing extends React.Component{
    constructor(props){
        super(props)
        {
          
        }
    }
    componentDidMount(){
       console.log(this.props)
    }
    render()
   
    {
        return(
            <View style ={styles.container}>
           
            <Card key={this.props.data.index}  >
           
                <View style ={{alignItems : "center"}}>
                <Image source={require('../../../assets/cat.png') }
                resizeMode = "contain" height= "10" width ="20"/>
               <Text style={styles.text}>{this.props.data.item.name}</Text>
                <Text><Icon name ="dollar"/>{this.props.data.item.price}</Text>
                {/* <View style={{ 
										flexDirection: "row",
										justifyContent: "space-evenly" }}>
										<View style={{ flex: 1, flexDirection: "row", alignItems: "stretch", justifyContent: "space-evenly" }}>
											<Icon
												name="minus-circle"
												size={30} color={"blue"}
												onPress={() => this.props.removeQuantity(this.props.data.index)} />
											<Text> {this.props.quantity}</Text>
											<Icon
												name="plus-circle"
												size={30} color={"blue"}
												onPress={() => this.props.addQuantity(this.props.data.index)} />
										</View>
									</View> */}
                
                <Text style={{
                    backgroundColor:"grey",width:"100%",height:"4%",textAlign:"center",textAlignVertical:"center"}} onPress = {()=> this.props.addToCart({
                    id: this.props.data.item.id,
                    name : this.props.data.item.name,
                    price: this.props.data.item.price,
                    quantity : this.props.quantity
                })}>ADD TO CART</Text>


                </View>
                      
            </Card>
           
        </View>  
            
            
        )
    }

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
  const mapStatetoProps =(state)=>({
    quantity    :   state.products.quantity,
    
})


export default connect(mapStatetoProps,null)(ProductListing)