import Mobile2 from './Mobile2.js';
import Prime1 from './Prime1.js';
import Cart from './Cart.js';
import React from 'react';
import {View, Text, StyleSheet, TextInput, FlatList, Image, TouchableOpacity, ScrollView, ImageBackground} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {useRoute} from '@react-navigation/native';
const Stack = createNativeStackNavigator();
const Home = ({ navigation: { navigate } }) => {
    const renderItem = ({ item }) => (
        <Item title={item.title} />
    );
    const Item = ({ title,id }) => (
        <TouchableOpacity onPress = {() => {
            navigate('Prime1', {caption: title});
        }}>
      <View style={style.item}>
        <Text style={style.title}>{title}</Text>
      </View>
      </TouchableOpacity>
    );
    return(
    <ScrollView>
        <View>
            <View>
                <TextInput style={style.input} placeholder="Search Amazon.in"></TextInput>
            </View>
            <View style={{paddingLeft: 15, padding: 10, flexDirection: 'row', alignItems: 'center', backgroundColor: '#E1ECF4'}}>
                <Image source={require('../assets/images/location.png')} style={{width:10,height:10, marginRight: 10}} />
                <Text style={{flex:2}}>Select a location to see product availability</Text>
            </View>
            <View>
                <FlatList
                        showsHorizontalScrollIndicator={false}
                        horizontal
                        data={DATA}
                        renderItem={renderItem}
                        keyExtractor={item => item.id}
                />

            </View>
            <View style={{paddingLeft: 20, marginTop:10, color: '#000', paddingTop: 20, paddingRight:20, backgroundColor: '#fff', paddingBottom: 30}}>
                <Text style={{fontSize: 20}}>HP 15s-Fr2514tu Intel Core i3 11th Gen (15.6 inch, 8GB, 256GB, Window 11 Home)</Text>
                <Image source={require('../assets/images/p1.jpeg')} style={{width:300,height: 300, marginLeft: 'auto', marginRight:'auto', marginTop: 20, marginBottom:20}} />
                <View style={{display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center'}}>
                    <Text style={{flex:1, backgroundColor: 'red', padding:5, color: '#fff', borderRadius: 10}}>Up to 50% off</Text>
                    <Text style={{padding: 5, flex:2.8, fontWeight: 'bold'}}>Deal of the day</Text>
                </View>
                <TouchableOpacity style={style.loginScreenButton} onPress={() => navigate("Cart", { caption: <Text>HP 15s-Fr2514tu Intel Core i3 11th Gen (15.6 inch, 8GB, 256GB, Window 11 Home)</Text>, image: <Image source={require('../assets/images/p1.jpeg')} style={{width:300,height: 300, marginLeft: 'auto', marginRight:'auto', marginTop: 20, marginBottom:20}} />, price: 'Rs.75,000' })} underlayColor='#fff'>
                                  <Text style={style.loginText}>View</Text>
                </TouchableOpacity>
            </View>
            <View style={{paddingLeft: 20, marginTop:10, color: '#000', paddingTop: 20, paddingRight:20, backgroundColor: '#fff', paddingBottom: 30}}>
                            <Text style={{fontSize: 20}}>Lenovo Ideapad Slim 3 Intel Core i3 11th Gen (15.6 inch, 8GB, 256GB, Windows 11)</Text>
                            <Image source={require('../assets/images/p2.jpeg')} style={{width:300,height: 300, marginLeft: 'auto', marginRight:'auto', marginTop: 20, marginBottom:20}} />
                            <View style={{display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center'}}>
                                <Text style={{flex:1, backgroundColor: 'red', padding:5, color: '#fff', borderRadius: 10}}>Up to 50% off</Text>
                                <Text style={{padding: 5, flex:2.8, fontWeight: 'bold'}}>Deal of the day</Text>
                            </View>
                            <TouchableOpacity style={style.loginScreenButton} onPress={() => navigate("Cart", { caption: <Text>Lenovo Ideapad Slim 3 Intel Core i3 11th Gen (15.6 inch, 8GB, 256GB, Windows 11)</Text>, image: <Image source={require('../assets/images/p2.jpeg')} style={{width:300,height: 300, marginLeft: 'auto', marginRight:'auto', marginTop: 20, marginBottom:20}} />, price: 'Rs.50,000' })} underlayColor='#fff'>
                                              <Text style={style.loginText}>View</Text>
                            </TouchableOpacity>
                        </View>
            <View style={{paddingLeft: 20, marginTop:10, color: '#000', paddingTop: 20, paddingRight:20, backgroundColor: '#fff', paddingBottom: 30}}>
                            <Text style={{fontSize: 20}}>ASUS 14 Intel Celeron (14 inch, 4GB, 256GB, Windows 11, Intel HD Graphics, FHD IPS Display)</Text>
                            <Image source={require('../assets/images/p3.jpeg')} style={{width:300,height: 300, marginLeft: 'auto', marginRight:'auto', marginTop: 20, marginBottom:20}} />
                            <View style={{display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center'}}>
                                <Text style={{flex:1, backgroundColor: 'red', padding:5, color: '#fff', borderRadius: 10}}>Up to 50% off</Text>
                                <Text style={{padding: 5, flex:2.8, fontWeight: 'bold'}}>Deal of the day</Text>
                            </View>
                            <TouchableOpacity style={style.loginScreenButton} onPress={() => navigate("Cart", { caption: <Text>ASUS 14 Intel Celeron (14 inch, 4GB, 256GB, Windows 11, Intel HD Graphics, FHD IPS Display)</Text>, image: <Image source={require('../assets/images/p3.jpeg')} style={{width:300,height: 300, marginLeft: 'auto', marginRight:'auto', marginTop: 20, marginBottom:20}} />, price: 'Rs.48,000' })} underlayColor='#fff'>
                                              <Text style={style.loginText}>View</Text>
                            </TouchableOpacity>
                        </View>
        </View>
        </ScrollView>
    );
}
const Home1 = () => {
    return(
            <NavigationContainer>
                <Stack.Navigator initialRoute="Home" screenOptions={{ headerShown: false}}>
                        <Stack.Screen name="Home" component={Home}/>
                        <Stack.Screen name="Cart" component={Cart1} />
                        <Stack.Screen name="Prime1" component={Prime1} />
                        <Stack.screen name="Mobile2" component={Mobile2} />
                      </Stack.Navigator>
            </NavigationContainer>
    );
}
const DATA = [
  {
    id: 1,
    title: 'Prime',
    //imageurl: '../assets/images/img1.jpg'
  },
  {
    id: 2,
    title: 'Mobiles',
    //imageurl: '../assets/images/img1.jpg'
  },
  {
    id: 3,
    title: 'Fashion',
    //imageurl: '../assets/images/img1.jpg'
  },
  {
      id: 4,
      title: 'Movies',
      //imageurl: '../assets/images/img1.jpg'
  },
  {
      id: 5,
      title: 'miniTV',
      //imageurl: '../assets/images/img1.jpg'
  },
  {
      id: 6,
      title: 'Home',
      //imageurl: '../assets/images/img1.jpg'
  },
  {
      id: 7,
      title: 'Travel',
      //imageurl: '../assets/images/img1.jpg'
  },
  {
      id: 8,
      title: 'Alexa',
      //imageurl: '../assets/images/img1.jpg'
  },
];
const style = StyleSheet.create({
    input: {
            height: 40,
            margin: 12,
            borderWidth: .4,
            padding: 10,
            borderRadius: 10,
            boxShadow: '2px 2px black'
        },
        loginScreenButton:{

               marginTop:10,
                paddingTop:10,
                paddingBottom:10,
                borderRadius:10,
                borderWidth: 1,
                borderColor: '#000',
                backgroundColor: 'orange'
              },
              scrollView: {
                  backgroundColor: 'pink',
                  marginHorizontal: 20,
                },
        loginText:{
                  color:'#000',
                  textAlign:'center',
                  paddingLeft : 10,
                  paddingRight : 10
              },
        container: {
            flex: 1,
          },
          item: {
            borderRadius:10,
                            borderWidth: 1,
                            borderColor: '#000',
            width: 50,
            height: 50,
            backgroundColor: 'orange',
            marginVertical: 8,
            marginHorizontal: 10,
          },
          title: {
          color: '#000',
            fontSize: 10,
            flex: 1,
            textAlign: 'center',
            justifyContent: 'center',
            marginTop: 18
          },
});


export default Home;