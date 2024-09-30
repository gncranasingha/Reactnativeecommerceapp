import { View, Text, Image,StyleSheet } from 'react-native';
import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';

import { TouchableOpacity } from 'react-native';
import { useNavigation } from 'expo-router';


const Header = ({isCart}) => {
  const navigation = useNavigation();

  return (
    <View className="flex-row justify-between items-center">
      <TouchableOpacity onPress={() => navigation.navigate("HOME_STACK")} className="bg-white h-11 w-11 rounded-full justify-center items-center">
        {
          isCart ? <Ionicons name={"arrow-back"} color={"#ab1aff"} size={24} /> :<Image source={require("../assets/logo.png")} className="h-7 w-7" />
        } 
      </TouchableOpacity>
      {isCart && <Text style={styles.myCart} >My Cart</Text>}
      
      <Image source={require("../assets/mama.jpg")} className="h-11 w-11 rounded-full" />
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  myCart:{
     fontSize:28,
     color:"black"
  }
})