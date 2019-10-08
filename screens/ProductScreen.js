import React, { Component } from 'react';

import {
  StyleSheet,
  View,
  Text,
  FlatList,
  ScrollView,
  TouchableOpacity
} from 'react-native';
import ProductItem from '../components/ProductItem';
import axios from 'axios';
class ProductScreen extends Component {
	static navigationOptions = ({navigation}) =>{
		return {
			title: navigation.getParam('categoryName','Product'),
			headerTintColor: '#fff',
			headerStyle: {
		      backgroundColor: '#ff683b'
		    },
		};
	};
	constructor(props) {
	  super(props);
	  this.state = {
	  	products: []
	  };
	}
	async componentDidMount(){
		const id = this.props.navigation.getParam('idCate');
	  	const result = await axios.get(`/products.php?a=cate&id=${id}`);
	  	//const product = await axios.get('/products.php?a=getall');
	  	this.setState({
	  		products: result.data
	  	})
	  	//console.log(this.state.products)
	}
  render() {
  	const {products} = this.state.products
  	const { navigation } = this.props;
    return (
      	<ScrollView>
      		<FlatList contenContainerStyle={style.FlatStyle}
	      		data = { this.state.products } renderItem={({item})=> 
	      			<TouchableOpacity style={style.wrapper}
	      			onPress = { () => { navigation.navigate("ProductDetail",{ productName: item.name,item: item}) }}
	      			>
	      				<ProductItem product = {item}/>
	      			</TouchableOpacity>
	      		} 
	      		keyExtractor={(item,index) => index.toString() }
	      		>
      		</FlatList>
      	</ScrollView>
    );
  }
}
export default ProductScreen;
const style = StyleSheet.create({
	FlatStyle: {
        flex:1,
        alignItems: "center",
        paddingLeft: 8,
        paddingRight: 8,
    },
    wrapper:{
        flex: 1
    },
});

