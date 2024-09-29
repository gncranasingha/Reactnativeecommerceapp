import { View, Text, Image } from 'react-native';
import React from 'react';

const Header = () => {
  return (
    <View className="flex-row justify-between items-center">
      <View className="bg-white h-11 w-11 rounded-full justify-center items-center">
        <Image source={require("../assets/logo.png")} className="h-7 w-7" />
      </View>
      <Image source={require("../assets/mama.jpg")} className="h-11 w-11 rounded-full" />
    </View>
  );
};

export default Header;
