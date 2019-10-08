
import React, { Component } from 'react';

import {
  StyleSheet,
  View,
  Image
} from 'react-native';
import { Text } from 'react-native-elements';

const ProductItem = (props) => {
	const { product } = props;
	return(
		<View style={style.container} >
	     	<View style={style.brand}>
	     		<Image style={style.image} source={{uri: product.images}} />
	     	</View>
	     	<View style={style.content}>
	     		<Text h5>{product.name}</Text>
	     		<Text h5>{product.price}đ</Text>
	     	</View>
     	</View>
	);
}
export default ProductItem;
const style = StyleSheet.create({
	container: {
		flex: 1,
		flexDirection: 'row',
		padding: 8,
		shadowOpacity: 1,
		shadowRadius:20,
		shadowOffset: { width: 0 , height: 0},
		shadowColor: "red",
	    marginLeft: 5,
	    marginRight: 5,
	    marginTop: 5,
	    marginBottom: 5,
	    borderRadius: 3,
	    backgroundColor: "#0ff29f"
	},
	brand:{
		flex: 30,
		borderRadius: 8,
	},
	content: {
		flex: 70
	},
	image: {
		width: 64,
		height: 64
	}
});