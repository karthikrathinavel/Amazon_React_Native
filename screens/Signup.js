import Home1 from './Home.js'
import React, {useState} from 'react';
import {View, Text, TextInput, StyleSheet, TouchableOpacity, Image} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {useRoute} from '@react-navigation/native';
import { StackActions } from '@react-navigation/native';
const Stack = createNativeStackNavigator();
const SignUp = ({ navigation: { navigate } }) => {
    const [name, setName] = useState("");
    const [mobile, setMobile] = useState("");
    const [password, setPassword] = useState("");
    const[error, setError] = useState('');
    return(
        <View>
            <View style={{backgroundColor:'#fff'}}>
                <Image source={require('../assets/images/logo1.png')} style={{height: 100,marginLeft:'auto', marginRight: 'auto'}} />
            </View>
            <View style={{backgroundColor: '#E1ECF4', marginBottom: -30}}>
                <Text style={{paddingLeft: 20, fontSize: 20, marginTop: 50, color: '#000', paddingBottom: 20}}>Welcome</Text>
            </View>
            <Text style={{paddingLeft: 20, fontSize: 20, marginTop: 15, color: '#000', paddingBottom: 20, fontWeight: 'bold'}}>Create account - New to Amazon</Text>
            <Text style={{paddingLeft: 20, fontSize: 15, marginTop:10, color: '#000', fontWeight: 'bold'}}>First and last name *</Text>
            <TextInput style={style.input} onChangeText={(value) => setName(value)}></TextInput>
            <Text style={{paddingLeft: 20, fontSize: 15, marginTop:10, color: '#000', fontWeight: 'bold'}}>Mobile number *</Text>
            <TextInput style={style.input} maxLength={10} keyboardType="phone-pad" onChangeText={(value) => setMobile(value)}></TextInput>
            <Text style={{paddingLeft: 20, fontSize: 15, marginTop:10, color: '#000', fontWeight: 'bold'}}>Set Password *</Text>
            <TextInput style={style.input} secureTextEntry={true} onChangeText={(value) => setPassword(value)}></TextInput>
            <Text style = {{marginLeft:20, color: 'red'}}>{error}</Text>
            <TouchableOpacity style={style.loginScreenButton} onPress={() => {if(name.length == 0 || mobile.length == 0 || password.length == 0){setError('*Enter all details')}else{navigate('HomePage')}}} underlayColor='#fff'>
                  <Text style={style.loginText}>Continue</Text>
            </TouchableOpacity>
        </View>
    );
}
const ErrorMessage = () => {
    return(
        <Text>Error</Text>
    );
}
const style = StyleSheet.create({
    input: {
        height: 50,
        margin: 12,
        borderWidth: 1,
        padding: 10,
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
});
const SignUp1 = () => {
    return(
            <NavigationContainer>
                      <Stack.Navigator initialRouteName="SignUp" screenOptions={{ headerShown: false}}>
                        <Stack.Screen name="SignUp" component={SignUp} />
                        <Stack.Screen name="HomePage" component={Home1} />
                      </Stack.Navigator>
                    </NavigationContainer>
    );
}
export default SignUp;