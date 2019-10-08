import React, { Component} from 'react';
import { View,StyleSheet,ActivityIndicator,Text} from 'react-native';

export default class LoadingScreen extends Component {
    render(){
        const { params } =  this.props.navigation.state;
        return(
            <View style={style.container}>
               <Text>{params.email}</Text>
            </View>
        );
    }
}
const style = StyleSheet.create({
    container: {
        flex:1,
        justifyContent: "center",
        alignItems: "center",
    }
})