import { Image, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { TouchableOpacity } from 'react-native';

const CartCard = ({ item,deleteItemFromCart }) => {
  return (
    <View style={styles.container}>
      <Image source={{ uri: item.mainImage }} style={styles.coverImage} />
      <View style={styles.cartContent}>
        <Text style={styles.title}>{item.brandName}</Text>
        <Text style={styles.price}>
          {item.price.currency} {item.price.amount}
        </Text>
        <View style={styles.colorssize}>
          <Text style={styles.size}>Size: {item.size}</Text>
          <Text style={styles.colors}>Color: {item.colour}</Text>
        </View>
      </View>
      <TouchableOpacity onPress={()=>{
        deleteItemFromCart(item)
      }} >
        <MaterialIcons name="delete" color="red" size={24} />
      </TouchableOpacity>
    </View>
  )
}

export default CartCard;

const styles = StyleSheet.create({
  container: {
    marginVertical: 10,
    flexDirection: 'row',
  },
  coverImage: {
    height: 100,
    width: '30%',
    borderRadius: 10,
  },
  cartContent: {
    flex: 1,
    marginHorizontal: 10,
  },
  title: {
    fontSize: 20,
    color: '#444444',
    fontWeight: '500',
  },
  price: {
    color: '#797979',
    marginVertical: 10,
    fontSize: 15,
  },
  size: {
    marginVertical: 10,
    color: '#444444',
  },
  colors: {
    marginVertical: 10,
  },
  colorssize: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
})
