import React, { Component } from 'react'
import { View, TouchableOpacity, Text, ListView, Image } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialIcons'

const ProfileComponent = ({ profileUrl, username, email }) =>
  <View style={{flexDirection:'row', padding:10}}>
    <Image source={{uri: profileUrl}} resizeMode="contain" style={{margin:15, width:60, height:60, borderRadius:30}} />
  	<View style ={{justifyContent:'center', margin:15}}>
    	<Text style={{fontWeight:'700', fontSize:25, color:'#444'}}>{username}</Text>
    	<Text style={{fontWeight:'200', color:'#999'}}>{email}</Text>
  	</View>
  </View>


export default ProfileComponent
