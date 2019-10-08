import React, { Component} from 'react';
import { View,StyleSheet,Text,ScrollView,FlatList,Alert,TouchableOpacity} from 'react-native';
import CategoryItem from '../components/CategoryItem';
import axios from 'axios';
export default class CategoryScreen extends Component {
	static navigationOptions = {
		title: "Home"
	};
    constructor(props){
        super(props);
        this.state = {
        	category: []
        }

    }
    componentDidMount(){
    	axios.get("/category.php?a=getall")
    	.then( res => {
    		this.setState({
    			category: res.data
    		})
    	}).catch(err=> console.log(err))
    }
    render(){
        const { category } = this.state;
        const { navigation } = this.props;
        return(
            <ScrollView>
                <FlatList
                contenContainerStyle={style.container}
                 numColumns={2} data={category} renderItem={({item})=> 
                   <TouchableOpacity style = {style.wrapper } onPress = { () => { navigation.navigate("Product",{ categoryName: item.name,idCate: item.id }) }}>
                    	<CategoryItem category = {item} />
                   </TouchableOpacity>
                }
                keyExtractor={(item,index) => index.toString() }>
                    
                </FlatList>
            </ScrollView>
        );
    }
}
const style = StyleSheet.create({
    container: {
        flex:1,
        alignItems: "stretch",
        backgroundColor: "#FFF",
        paddingLeft: 8,
        paddingRight: 8,
    },
    wrapper:{
        flex: 1
    }
})
