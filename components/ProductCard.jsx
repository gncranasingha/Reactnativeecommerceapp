import { Image, Text, View, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import { useNavigation } from 'expo-router';

const ProductCard = ({ product }) => {
  const navigation = useNavigation();

  // State to toggle description visibility
  const [showDescription, setShowDescription] = useState(false);

  return (
    <TouchableOpacity
      onPress={() => {
        navigation.navigate("PRODUCT_DETAILS", { product });
      }}
      className="flex-1 p-3 rounded-lg bg-white my-2 mx-1 shadow-md justify-between"
    >
      <Image source={{ uri: product.mainImage }} className="h-24 w-32 rounded-lg mb-2" />

      <Text className="text-lg font-bold mb-1">{product.name}</Text>
      <Text className="text-base text-gray-600 mb-1">{product.brandName}</Text>
      <Text className="text-base font-bold mb-1">
        {product.price.currency} {product.price.amount}
      </Text>

      <Text className={`text-base font-bold mb-2 ${product.stockStatus === 'IN STOCK' ? 'text-green-500' : 'text-red-500'}`}>
        {product.stockStatus}
      </Text>

      

      <Text className="text-base mb-2">Color: {product.colour}</Text>

      {/* Uncomment below to show/hide description */}
      {/* <TouchableOpacity
        className="mt-2 bg-gray-300 p-2 rounded"
        onPress={() => setShowDescription(!showDescription)}
      >
        <Text className="text-base font-bold text-indigo-600">{showDescription ? 'Show Less' : 'Show More'}</Text>
      </TouchableOpacity>

      {showDescription && (
        <Text className="text-base text-gray-600 mt-2">{product.description}</Text>
      )} */}
    </TouchableOpacity>
  );
};

export default ProductCard;
