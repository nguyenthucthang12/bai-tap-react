import React, { Component } from 'react';

import {
  StyleSheet,
  View,
  ActivityIndicator,
  Image
} from 'react-native';
import { Text,Button  } from 'react-native-elements';
import axios from 'axios';
import Icon from 'react-native-vector-icons/FontAwesome'
class ProductDetails extends Component {
	static navigationOptions = ({navigation}) =>{
		return {
			title: navigation.getParam('productName','Product Detail')
		};
	};
	constructor(props) {
	  super(props);
	
	  this.state = {
	  	images: "",
	  	isLoadingComplete: false,
	  };
	}
  render() {
  	const { params } =  this.props.navigation.state;
  	return(
  		<View style={styles.loading}>
  			<View style={styles.product}>
  				<Image style={styles.image} source= {{uri: params.item.images}}/>
  			</View>
  			<View style={styles.content}>
  				<Text h4 style={styles.titleName}>
  					{params.item.name}
  				</Text>
  				<Text h5 style={styles.title}>
  					Giá: {params.item.price}đ
  				</Text>
  				<Text h5 style={styles.title}>
  					Số lượng: {params.item.soluong}
  				</Text>
  				<Button
					  title="Mua Ngay"
					  type="clear"
					  icon={
					    <Icon
					      name="cart-plus"
					      size={15}
					      color="white"
					    />
					  }
					  titleStyle={ styles.buttonTitle}
					  buttonStyle={ styles.button}
				/>
				<Text h5 style={styles.title}>
  					{params.item.mieuta}
  				</Text>
  			</View>
  		</View>
  	);
  }
}

const styles = StyleSheet.create({
	loading:{
		flex: 1,
	},
	product:{
		flex: 50,
		justifyContent: "center",
        alignItems: "center",
        borderColor: "blue",
		borderRadius: 5,
		borderWidth:1
	},
	image: {
		width: 200,
		height: 200
	},
	title: {
		marginLeft: 8,
		marginBottom: 10,
	},
	titleName:{
		alignItems:"center",
		marginLeft: 8,
		marginBottom: 10,
	},
	content:{
		flex: 50
	},
	button: {
		backgroundColor: '#ff683b',
		marginLeft: 8,
		marginRight: 8
	},
	buttonTitle: {
		color: 'white',
		marginLeft: 2
	}
});


export default ProductDetails;