import { FlatList, StyleSheet, Text, View } from 'react-native'
import React, { useContext } from 'react'
import { LinearGradient } from 'expo-linear-gradient';
import Header from '../components/Header';
import CartCard from '../components/CartCard';
import { TouchableOpacity } from 'react-native';
import { CartContext } from '../context/context';

const CartScreen = () => {
  const {carts, totalPrice,deleteItemFromCart} = useContext(CartContext)
  return (
    <LinearGradient colors={['#f5f9fc', '#efe5ff']} style={styles.container}>
      <View style={styles.headerContainer}>
        <Header isCart={true}/>
      </View>
     
      <FlatList data={carts} 
        ListHeaderComponent={<></>} 
        renderItem={({item}) =>(
          <CartCard  item={item} deleteItemFromCart={deleteItemFromCart}/>
        )}
        ListFooterComponent={
          <>
            <View  style={styles.priceContainer}>
              <View style={styles.priceAndTitle}>
                <Text style={styles.text} >Total:</Text>
                <Text style={styles.text} >{totalPrice}</Text>
              </View>
              <View style={styles.priceAndTitle} >
                <Text style={styles.text} >Shipping:</Text>
                <Text style={styles.text} >0.0</Text>
              </View>
            </View>
              <View style={styles.divider} />
              <View style={styles.priceAndTitle} >
                <Text style={styles.text} >Grand Total:</Text>
                <Text style={[styles.text,{color:"black", fontWeight:"700"}]} >{totalPrice}</Text>
              </View>
          </>
        }
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          paddingBottom:100
        }}
      />
      
      <TouchableOpacity style={styles.checkoutContainer} >
        <Text style={styles.buttonText} >CheckOut</Text>
      </TouchableOpacity>
    </LinearGradient>
  )
}

export default CartScreen

const styles = StyleSheet.create({
  headerContainer:{
    padding:20
  },
  container:{
    flex:1,
    padding:15,
  },
  priceAndTitle:{
    flexDirection: "row",
    justifyContent:"space-between",
    marginHorizontal:15
  },
  priceContainer:{
    marginTop:30
  },
  text:{
    color:"#757575",
    fontSize:18,
    paddingTop:20
  },
  divider:{
    borderWidth:1,
    borderColor:"#C0C0C0",
    marginVertical:10
  },
  checkoutContainer:{
    backgroundColor:"#ab1aff",
    width:"100%",
    marginVertical:10,
    borderRadius:10
  },
  buttonText:{
    fontSize:25,
    color:"white",
    textAlign:"center",
    padding:10,
    
  }

})