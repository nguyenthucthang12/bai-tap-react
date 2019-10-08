import React,{ Component,Fragment } from 'react';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  View,
  Text,
  SafeAreaView,
  StatusBar,
  ActivityIndicator, Keyboard, KeyboardAvoidingView,
  TouchableWithoutFeedback
  //Animated, Dimensions,FlatList, Modal,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Input,Button } from 'react-native-elements';
import { LinearGradient } from 'expo-linear-gradient';
import { colors, sizes, fonts } from '../constants/theme';
export default class Login extends Component {
  constructor(props) {
    super(props);
    this.unSubsrciber = null;
    this.state = {
      isAuthenticate : false,
      user: null,
      typePassword : "",
      typeEmail : ""
    };
  }
  render(){
    const { navigation  } = this.props;
    return(
      <Fragment>
          <View style={style.container}> 
              <View style={style.brand} >
                  <Image style={style.logo} source={require("../images/plant.png")} />
              </View>
              <View style={style.content}>
                  <Input
                    keyboardType="email-address"
                    autoCapitalize="none"
                    placeholder='example@mail.com'
                    label="Email"
                    inputStyle ={style.email}
                    onChangeText ={ (text) => {
                      this.setState({ typeEmail: text });
                    }}
                    rightIcon={
                      <Icon
                        name='envelope-o'
                        size={24}
                        color='black'
                      />
                    }
                  />
                  <Input
                    keyboardType="default"
                    secureTextEntry={true}
                    placeholder='*******'
                    label="Password"
                    inputStyle ={style.pass}
                    labelStyle={style.label}
                    onChangeText ={ (text) => {
                      this.setState({ typePassword: text });
                    }}
                    rightIcon={
                      <Icon
                        name='lock'
                        size={24}
                        color='black'
                      />
                    }
                  />
                <View style={{
                  flex: 1,
                  justifyContent: "center",
                  alignItems: "center",
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
                        onPress={ () => navigation.navigate("Loading",
                          { 
                            email: this.state.typeEmail,
                            password: this.state.typePassword
                          }
                        )}
                        >
                      </Button>
                  </LinearGradient>
                </View>
              </View>
          </View>
      </Fragment>
    );
  }
}
Login.navigationOptions = {
  title: "Login"
};
const style = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center"
  },
  title: {
    fontWeight: "bold",
    fontSize: 18,
    marginLeft: 20,
    marginTop: 20
  },
  brand: {
    flex: 40,
    justifyContent: "center",
    alignItems: "center"
  },
  logo: {
    height: 50,
    width: 50,
  },
  content: {
    flex: 60,
    justifyContent: "center",
    alignItems: "center"
  },
  email:{
    padding: 2,
    marginLeft: 10,
    marginRight: 10,
    borderColor: "cyan",
    borderRadius: 8
  },
  label:{
    marginTop: 10
  },
  pass:{},
  btnLogin: {
      height: 40,
      backgroundColor: 'transparent',
      marginLeft: 5,
      marginRight: 5,
      // marginTop: 10,
      //justifyContent: "center",
      borderRadius: 8,
      alignSelf:'center',
      width: 350,
  },
  titleLogin : {
    color: '#fff',
  },
  button: {
    borderRadius: sizes.radius,
    //height: sizes.base * 3,
    justifyContent: 'center',
    alignItems: "center",
    marginVertical: sizes.padding / 2,
    marginTop: 30
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