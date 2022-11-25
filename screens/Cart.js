import Payment from './Payment.js';
import React from 'react'
import {View,Text, Image, TouchableOpacity, StyleSheet} from 'react-native'
import { useRoute } from '@react-navigation/native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
const Stack = createNativeStackNavigator();
//const Cart = () => {
//    return(
//        <View>
//        <Text>User Screen</Text>
//        </View>
//    );
//}
function MyText() {
  const route = useRoute();
  return(
    <View>
        <Text>
            {route.params.caption}
        </Text>
        <View>
            {route.params.image}
        </View>
    </View>
  );
}
function MyText2(){
    const route = useRoute();
    return(

        <Text style={{fontSize:30}}>
                {route.params.price}</Text>
    );
}
const Cart = ({ navigation: { navigate } }) => {
  const route = useRoute();
  var name = route.params.caption;
  var price = route.params.price;
  return (
    <View style={{ flex: 1, alignItems: 'center', padding: 30, backgroundColor: '#fff' }}>
      <MyText />
      <View style = {{border:'1px solid #000', backgroundColor: '#E1ECF4', padding: 10, display: 'flex', flexDirection:'row', margin:10,alignItems:'center'}}>
        <Image source={require('../assets/images/alexa.png')} style={{height: 100, width:100}} />
        <Text>Play music, hear the news, control smart home devices, and more. Just ask Alexa.</Text>
      </View>
      <View>
      </View>
      <View style={{display: 'flex',flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'}}>
                  <Text style={{color: 'red', fontWeight: 'lighter', fontSize: 30}}>-20%     </Text>
                  <MyText2 />
              </View>
      <Text style={{marginTop: 15}}><Text style={{fontWeight:'bold'}}>EMI</Text> from Rs.3,774. No Cost EMI available. EMI options{'\n'}Inclusive of all taxes</Text>
      <TouchableOpacity style={style.loginScreenButton} onPress={() => navigate('Payment', {price: price, pname: name})} underlayColor='#fff'>
           <Text style={style.loginText}>Add to Cart</Text>
      </TouchableOpacity>
    </View>
  );
}
const Cart1 = (navigation,route) => {
    return(
        <NavigationContainer>
                          <Stack.Navigator initialRouteName="Home" screenOptions={{
                                                                       headerShown: false
                                                                     }}>
                            <Stack.Screen name="Cart" component={Cart} />
                            <Stack.Screen name="Payment" component={Payment} />
                          </Stack.Navigator>
                        </NavigationContainer>
    );
}
const style = StyleSheet.create({
    loginScreenButton:{
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
              paddingLeft : 10,
              paddingRight : 10
          },
});
export default Cart;