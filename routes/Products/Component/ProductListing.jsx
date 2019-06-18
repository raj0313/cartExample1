import React,{Component} from "react"
import {Card, Button} from 'react-native-elements'
import {Text,View,FlatList,TouchableOpacity} from 'react-native'


class ProductListing extends React.Component{
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
        <Card containerStyle={{padding: 0}} key={productlist.id}  >
            <View style ={{flex:1}}>
                <Text>{productlist.name}</Text>
                <Text>{productlist.price}</Text>
                <Button title ={"Add to Cart"}/>
            </View>    
        
        </Card>
           
            
            
        )
    }

}
export default ProductList