import React from 'react';
import {
	Image,
	View,
	StyleSheet,
	Alert
} from 'react-native';
import { Text } from 'react-native-elements';
const CategoryItem = (props) => {
	const { category } = props;
	return (
		<View style={style.container}>
			<Image style={style.imagesProduct} source={{uri: category.images }}></Image>
			<Text style={style.title}>{category.name}</Text>
		</View>
	);
}
export default CategoryItem;
const style = StyleSheet.create({
	imagesProduct:{
		width: 60,
		height: 60
	},
	container: {
		alignItems: "center",
		padding: 8,
		backgroundColor: "#FFF",
		shadowColor: "black",
		shadowOpacity: 0.8,
		shadowRadius: 10,
		shadowOffset: { width: 2 , height: 2},
		borderRadius: 4,
	    // elevation: 1,
	    marginLeft: 5,
	    marginRight: 5,
	    marginTop: 10,
	    marginBottom: 8,
	    borderColor: "#ddd",
	    borderWidth: 1,
	},
	title: {
		textTransform: "uppercase",
		marginBottom: 8,
		marginTop: 8,
		fontWeight: "700"
	}
});