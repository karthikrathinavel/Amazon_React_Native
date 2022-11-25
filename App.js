import Mobile2 from './screens/Mobile2.js';
import Prime1 from './screens/Prime1.js';
import Delivery from './screens/Delivery.js';
import Payment from './screens/Payment.js';
import SignIn from './screens/Signin.js';
import SignUp from './screens/Signup.js';
import Home1 from './screens/Home.js';
import Cart from './screens/Cart.js';
import React from 'react';
import {Text, View, Image, StyleSheet, Button, TouchableOpacity} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {useRoute} from '@react-navigation/native';
const Stack = createNativeStackNavigator();
const BeforeSignIn = ({ navigation: { navigate } }) => {
    return(
        <View style={style.view}>
            <Image source={require('./assets/images/logo.png')} style={{marginLeft:'auto', marginRight: 'auto'}} />
            <Text style={style.text}>Sign in to your account</Text>
            <Text style={{margin: 10, paddingLeft:20, color: '#000'}}>View your wish list</Text>
            <Text style={{margin: 10, paddingLeft:20, color: '#000'}}>Find & reorder past purchases</Text>
            <Text style={{margin: 10, paddingLeft:20, color: '#000'}}>Track your purchases</Text>
            <TouchableOpacity style={style.loginScreenButton} onPress={() => navigate('SignIn')} underlayColor='#fff'>
                  <Text style={style.loginText}>Already a customer? Sign in</Text>
            </TouchableOpacity>
            <TouchableOpacity style={style.otherButtons} onPress={() => navigate('SignUp')} underlayColor='#fff'>
                  <Text style={style.loginText}>New to amazon.in? Create an account</Text>
            </TouchableOpacity>
            <TouchableOpacity style={style.otherButtons} onPress={() => navigate('HomePage')} underlayColor='#fff'>
                  <Text style={style.loginText}>Skip sign in</Text>
            </TouchableOpacity>
        </View>
    );
}
const App = () => {
    return(
        <NavigationContainer>
                  <Stack.Navigator initialRouteName="Home" screenOptions={{
                                                               headerShown: false
                                                             }}>
                    <Stack.Screen name="Home" component={BeforeSignIn} />
                    <Stack.Screen name="SignIn" component={SignIn} />
                    <Stack.Screen name="SignUp" component={SignUp} />
                    <Stack.Screen name="HomePage" component={Home1} />
                    <Stack.Screen name="Cart" component={Cart} />
                    <Stack.Screen name="Payment" component={Payment} />
                    <Stack.Screen name="Delivery" component={Delivery} />
                    <Stack.Screen name="Prime1" component={Prime1} />
                    <Stack.Screen name="Mobile2" component={Mobile2} />
                  </Stack.Navigator>
                </NavigationContainer>
    );
}
const style = StyleSheet.create({
    view: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: '#fff'
    },
    text: {
        fontSize: 24,
        fontWeight: 'bold',
        marginLeft: 'auto',
        marginRight: 'auto',
        color: '#000'
    },
    loginScreenButton:{
        marginRight:10,
        marginLeft:10,
       marginTop:10,
        paddingTop:10,
        paddingBottom:10,
        borderRadius:10,
        borderWidth: 1,
        borderColor: '#000',
        backgroundColor: 'orange'
      },
      loginText:{
          color:'#000',
          textAlign:'center',
          paddingLeft : 10,
          paddingRight : 10
      },
      otherButtons: {
          marginRight:10,
          marginLeft:10,
          marginTop:10,
          paddingTop:10,
          paddingBottom:10,
          borderRadius:10,
          borderWidth: 1,
          borderColor: '#000',
          backgroundColor: '#E1ECF4'
      }
});

export default App;