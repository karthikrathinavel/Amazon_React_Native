import {Text,View, Image, TouchableOpacity, StyleSheet} from 'react-native';
import React from 'react';

const Alexastos = () => {
    return(
        <View>
        <View style={{backgroundColor: '#202F40', height:'77%', padding:30, justifyContent:'center', alignItems:'center'}}>
            <Text style={{color:'#fff', fontSize: 35, paddingBottom:5, fontWeight:'bold'}}>Speak to Shop</Text>
            <Text style={{color:'#fff', fontSize:20, padding:5}}>Just say "Alexa"</Text>
            <View style={{backgroundColor:'#fff', marginTop:90, margin:10, width:'100%', paddingTop:20, paddingBottom:20, borderRadius:10}}>
                <Image source={require('../assets/images/anarrow.jpg')} style={{height:60, top:-60, left:-40, position:'absolute'}}/>
                <Text style={{textAlign:'center', color:'#000', fontSize:18, fontStyle:'italic'}}>"Alexa, search for sarees"</Text>
            </View>
            <View style={{backgroundColor:'#fff', marginTop:10, margin:10, width:'100%', paddingTop:20, paddingBottom:20, borderRadius:10}}>
                <Image source={require('../assets/images/anarrow.jpg')} style={{height:60, top:-5, left:270, position:'absolute', transform: [{ rotate: '90deg'}]}}/>
                <Text style={{textAlign:'center', color:'#000', fontSize:18, fontStyle:'italic'}}>"Alexa, introduce me to Amit ji"</Text>
            </View>
            <View style={{backgroundColor:'#fff', marginTop:10, margin:10, width:'100%', paddingTop:20, paddingBottom:20, borderRadius:10}}>
                <Image source={require('../assets/images/anarrow.jpg')} style={{height:60, top:10, left:-122, position:'absolute', transform:[{rotate:'-90deg'}]}}/>
                <Text style={{textAlign:'center', color:'#000', fontSize:18, fontStyle:'italic'}}>"Alexa, where is my order?"</Text>
            </View>
        </View>
        <View style={{height:'20%',padding:30}}>
            <Text style={{textAlign:'center', fontSize:10}}>At any time you can remove Alexa microphone access and{'\n'}disable Alexa in <Text style={{fontWeight:'bold'}}>Alexa Settings</Text></Text>
            <TouchableOpacity style={style.loginScreenButton} onPress={()=>null}>
                <Text style={style.loginText}>Continue</Text>
            </TouchableOpacity>
        </View>
        </View>
    );
}
const style = StyleSheet.create({
    loginScreenButton:{
            marginTop:20,
            paddingTop:15,
            paddingBottom:15,
            borderRadius:5,
            borderWidth: .5,
            borderColor: '#000',
            backgroundColor: '#FF9F00',
        },
        loginText:{
                color:'#000',
                textAlign:'center',
                paddingLeft : 10,
                paddingRight : 10,
            },
})
export default Alexastos;