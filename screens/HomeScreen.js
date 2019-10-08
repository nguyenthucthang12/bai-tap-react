import React,{ Component,Fragment } from 'react';
import {
  Image,
  StyleSheet,
  View,
  Text,
  StatusBar,
} from 'react-native';
import { Button } from 'react-native-elements';
import { LinearGradient } from 'expo-linear-gradient';
import { colors, sizes, fonts } from '../constants/theme';
export default class HomeScreen extends Component {
  render(){
    const { navigation } = this.props;
    return(
      <Fragment>
        <StatusBar hidden />
          <View style={style.container}>
            <View style={style.brand}> 
                <Image source={require('../images/logo.png')} style={ style.logo}></Image>
                <Text style={style.title}>Plant App</Text>
            </View>
            <View style={{
              flex:30,
              justifyContent:"center",
              alignItems:'center'
            }}>
              <LinearGradient colors={['#2BDA8E','#0AC4BA']}
                start={{x: 0, y: 1}}
                end={{x: 1, y: 0}}
                style={buttonStyles}
                >
                  <Button
                    buttonStyle ={style.btnLogin}
                    titleStyle={style.titleLogin}
                    title="Login"
                    onPress={() => navigation.navigate("Login")}>
                  </Button>
                </LinearGradient>
              <LinearGradient
                colors={['#9DA3B4','#C5CCD6']}
                start={{x: 0, y: 0}}
                end={{x: 1, y: 1}}
                style={buttonStyles}
              >
                <Button 
                  buttonStyle ={style.btnSignUp}
                  titleStyle={style.titleSignUp}
                  title="Sign Up"></Button>
              </LinearGradient>
            </View>
          </View>
      </Fragment>
    );
  }
}

HomeScreen.navigationOptions = {
  header: null,
};
const style = StyleSheet.create({
  container:{
      flex: 1,
      backgroundColor: '#fff',
      justifyContent: "center",
      alignItems: "center"
  },
  logoContainer: {
      alignItems: 'center',
      justifyContent: 'center',
      flex: 1
  },
  title: {
      fontWeight: 'bold',
      color: 'rgb(32,53,70)',
      fontSize: 18,
      opacity: 0.9,
      alignItems: 'center',
      marginTop: 20
  },
  logo: {
    width: 200,
    height: 200
  },
  inforContainer:{
      position: 'absolute',
      left: 0,
      right: 0,
      bottom: 0,
      //backgroundColor: 'red',
      height: 200,
      //justifyContent: "center"
  },
  btnLogin: {
      height: 35,
      backgroundColor: 'transparent',
      marginLeft: 5,
      marginRight: 5,
      width: 250,
      justifyContent: "center",
      borderRadius: 8,
  },
  btnSignUp: {
      height: 35,
      backgroundColor: 'transparent',
      marginLeft: 5,
      marginRight: 5,
      // marginTop: 10,
      width: 250,
      borderRadius: 8,
      justifyContent: "center",
  },
  brand:{
    flex: 60,
    //backgroundColor: 'rgb(32,53,70)',
    justifyContent: "center",
    alignItems: "center"
  },
  titleLogin : {
    color: '#fff'
  },
  titleSignUp: {
    color: '#fff'
  },
  button: {
    borderRadius: sizes.radius,
    //height: sizes.base * 3,
    justifyContent: 'center',
    marginVertical: sizes.padding / 3,
  },
  shadow: {
    shadowColor: colors.black,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 10,
  },
  accent: { backgroundColor: colors.accent, },
  primary: { backgroundColor: colors.primary, },
  secondary: { backgroundColor: colors.secondary, },
  tertiary: { backgroundColor: colors.tertiary, },
  black: { backgroundColor: colors.black, },
  white: { backgroundColor: colors.white, },
  gray: { backgroundColor: colors.gray, },
  gray2: { backgroundColor: colors.gray2, },
  gray3: { backgroundColor: colors.gray3, },
  gray4: { backgroundColor: colors.gray4, },
})
const buttonStyles = [
  style.button,
  style.shadow,
  // color && style[color], // predefined styles colors for backgroundColor
  // color && !style[color] && { backgroundColor: color }, // custom backgroundColor
  // style,
];
