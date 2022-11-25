import {MyText, MyText2} from './Cart.js';
import {Delivery} from './Delivery.js';
import React from 'react';
import {View,Text, TouchableOpacity, StyleSheet, AsyncStorage} from 'react-native';
import { RadioButton } from 'react-native-paper';
import { NavigationContainer, useRoute } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
const Stack = createNativeStackNavigator();
function MyText1() {
    const route = useRoute();
  return(
    <View style={{margin: 20}}>
        <Text style={{fontSize: 25}}>{'\n'}{'\n'}Product Name:{'\n'}{route.params.pname}{'\n'}</Text>
        <Text style={{fontSize: 20}}>Price: {route.params.price}</Text>
    </View>
  );
}
const Payment = ({ navigation: { navigate } }) => {
    let trackingId = 0;
    const [checked, setChecked] = React.useState('first');
    return(
        <View>
            <Text style={{fontSize: 25, fontWeight: 'bold', margin: 20}}>Select a Payment method</Text>
            <MyText1/>
            <View style={{marginTop: 30, backgroundColor: '#E1ECF4', padding: 20, margin: 20}}>
                   <View style={{display: 'flex', flexDirection: 'row', alignItems: 'center'}}>
                    <RadioButton
                    value="first"
                    status={ checked === 'first' ? 'checked' : 'unchecked' }
                    onPress={() => setChecked('first')}
                  /><Text>UPI/Netbanking</Text>
                  </View>
                  <View style={{display: 'flex', flexDirection: 'row', alignItems: 'center'}}>
                  <RadioButton
                    value="second"
                    status={ checked === 'second' ? 'checked' : 'unchecked' }
                    onPress={() => setChecked('second')}
                  /><Text>Pay with Debit/Credit/ATM Cards</Text></View>
                  <View style={{display: 'flex', flexDirection: 'row', alignItems: 'center'}}>
                                    <RadioButton
                                      value="third"
                                      status={ checked === 'third' ? 'checked' : 'unchecked' }
                                      onPress={() => setChecked('third')}
                                    /><Text>Pay on Delivery</Text></View>
                </View>
                <TouchableOpacity style={style.loginScreenButton} onPress={() => {navigate('Delivery')}} underlayColor='#fff'>
                    <Text style={style.loginText}>Continue</Text>
                </TouchableOpacity>
        </View>
    );
}
const style = StyleSheet.create({
    loginScreenButton:{
    marginLeft: 'auto',
    marginRight: 'auto',
                width:350,
                marginTop:20,
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

              },
});

const Payment1 = () => {
    return(
        <NavigationContainer>
                                  <Stack.Navigator initialRouteName="Payment" screenOptions={{
                                                                               headerShown: false
                                                                             }}>
                                    <Stack.Screen name="Payment" component={Payment} />
                                    <Stack.Screen name="Delivery" component={Delivery} />
                                  </Stack.Navigator>
                                </NavigationContainer>
    );
}
export default Payment;