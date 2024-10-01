import { Image, Text, View } from 'react-native';
import React from 'react';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { TouchableOpacity } from 'react-native';

const CartCard = ({ item, deleteItemFromCart }) => {
  return (
    <View className="flex-row my-2">
      <Image source={{ uri: item.mainImage }} className="h-24 w-1/3 rounded-lg" />
      <View className="flex-1 mx-2">
        <Text className="text-lg text-gray-800 font-medium">{item.brandName}</Text>
        <Text className="text-gray-600 text-base my-2">
          {item.price.currency} {item.price.amount}
        </Text>
        <View className="flex-row justify-between">
          <Text className="text-gray-800 my-2">Size: {item.size}</Text>
          <Text className="text-gray-800 my-2">Color: {item.colour}</Text>
        </View>
      </View>
      <TouchableOpacity onPress={() => deleteItemFromCart(item)}>
        <MaterialIcons name="delete" color="red" size={24} />
      </TouchableOpacity>
    </View>
  );
};

export default CartCard;
