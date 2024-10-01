import { FlatList, Text, View, TouchableOpacity } from 'react-native';
import React, { useContext } from 'react';
import { LinearGradient } from 'expo-linear-gradient';
import Header from '../components/Header';
import CartCard from '../components/CartCard';
import { CartContext } from '../context/context';

const CartScreen = () => {
  const { carts, totalPrice, deleteItemFromCart } = useContext(CartContext);

  return (
    <LinearGradient colors={['#f5f9fc', '#efe5ff']} className="flex-1 p-4">
      <View className="p-5">
        <Header isCart={true} />
      </View>

      <FlatList
        data={carts}
        ListHeaderComponent={<></>}
        renderItem={({ item }) => (
          <CartCard item={item} deleteItemFromCart={deleteItemFromCart} />
        )}
        ListFooterComponent={
          <>
            <View className="mt-8">
              <View className="flex-row justify-between mx-4">
                <Text className="text-gray-600 text-lg pt-5">Total:</Text>
                <Text className="text-gray-600 text-lg pt-5">{totalPrice}</Text>
              </View>
              <View className="flex-row justify-between mx-4">
                <Text className="text-gray-600 text-lg pt-5">Shipping:</Text>
                <Text className="text-gray-600 text-lg pt-5">0.0</Text>
              </View>
            </View>
            <View className="border-b border-gray-300 my-2" />
            <View className="flex-row justify-between mx-4">
              <Text className="text-gray-600 text-lg pt-5">Grand Total:</Text>
              <Text className="text-black text-lg font-bold pt-5">{totalPrice}</Text>
            </View>
          </>
        }
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          paddingBottom: 100,
        }}
      />

      <TouchableOpacity className="bg-[#ab1aff] w-full my-2 rounded-lg">
        <Text className="text-white text-2xl text-center py-2">CheckOut</Text>
      </TouchableOpacity>
    </LinearGradient>
  );
};

export default CartScreen;
