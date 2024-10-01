import { Text, View, Image, ScrollView, TouchableOpacity } from 'react-native';
import React, { useContext, useState } from 'react';
import { LinearGradient } from 'expo-linear-gradient';
import Header from '../components/Header'; 
import { CartContext } from '../context/context';
import { useNavigation } from 'expo-router';

const ProductDetailsScreen = ({ route }) => {
  const navigation = useNavigation();
  const [selectedSize, setSelectedSize] = useState(null);  // State to manage the selected size
  const { product } = route.params;
  const { addCart } = useContext(CartContext);

  const handleAddToCart = (product) => {
    if (product.stockStatus === 'IN STOCK') {
      product.size = selectedSize;
      addCart(product);
      navigation.navigate("CART");
    }
  };

  return (
    <LinearGradient colors={['#f5f9fc', '#efe5ff']} className="flex-1">
      <View className="p-5">
        <Header />
      </View>

      <ScrollView contentContainerStyle={{ paddingHorizontal: 20, paddingBottom: 30 }}>
        <Image source={{ uri: product.mainImage }} className="w-full h-72 rounded-lg mb-5" />

        <View className="bg-white rounded-lg p-5 shadow-md">
          <Text className="text-2xl font-bold text-gray-800 mb-2">{product.name}</Text>
          <Text className="text-xl text-gray-600 mb-1">{product.brandName}</Text>
          <Text className="text-xl font-bold text-[#5A67D8] mb-2">
            {product.price.currency} {product.price.amount}
          </Text>

          <Text className={`text-lg font-bold mb-2 ${product.stockStatus === 'IN STOCK' ? 'text-green-600' : 'text-red-600'}`}>
            {product.stockStatus}
          </Text>

          <View className="flex-row items-center mb-2">
            <Text className="text-lg font-bold mr-2">Sizes:</Text>
            {product.sizes.map((size, index) => (
              <TouchableOpacity
                key={index}
                onPress={() => setSelectedSize(size)}
                className={`mr-2 px-3 py-2 rounded-lg ${selectedSize === size ? 'bg-[#ab1aff] text-white' : 'bg-gray-200 text-black'}`}
              >
                <Text className="text-sm">{size}</Text>
              </TouchableOpacity>
            ))}
          </View>

          <Text className="text-lg mb-2">Color: {product.colour}</Text>

          <Text className="text-lg font-bold mt-4 mb-2">Description</Text>
          <Text className="text-sm text-gray-600">{product.description}</Text>

          {/* Button container */}
          <TouchableOpacity
            onPress={() => handleAddToCart(product)}
            className={`py-3 rounded-full mt-5 ${product.stockStatus === 'OUT OF STOCK' ? 'bg-gray-400' : 'bg-[#ab1aff]'}`} // Change button color when out of stock
            disabled={product.stockStatus === 'OUT OF STOCK'} // Disable the button
          >
            <Text className="text-xl font-semibold text-white text-center">
              {product.stockStatus === 'OUT OF STOCK' ? 'Out of Stock' : 'Add to Cart'}
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </LinearGradient>
  );
};

export default ProductDetailsScreen;
