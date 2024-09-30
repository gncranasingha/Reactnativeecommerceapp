import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { TouchableOpacity } from 'react-native';


const imageUrl = "https://s3-eu-west-1.amazonaws.com/api.themeshplatform.com/media/7e386191b2ee40b290886a05d3e10e24_nike-air-relentless-a.jpg"

const CartCard = ({item}) => {
  return (
    <View style={styles.container} >
      <Image source={{uri:item.mainImage}} style={styles.coverImage} />
     <View style={styles.cartContent} >
        <Text style={styles.title} >{item.brandName}</Text>
        <Text style={styles.price} >{item.currency} {item.amount}</Text>
        <View style={styles.colorssize} >
            <Text style={styles.size}>Size : {item.size} </Text>
            <Text style={styles.colors}>Color :{item.colour} </Text>
        </View>
        
     </View>
     <TouchableOpacity>
        <MaterialIcons name={"delete"} color={"red"} size={24}/>
     </TouchableOpacity>
     
    </View>
  )
}

export default CartCard

const styles = StyleSheet.create({
    container:{
        marginVertical:10,
         flexDirection:"row"
    },
    coverImage:{
        height:100,
        width:"30%",
        borderRadius:"10%"
    },
    cartContent:{
       flex:1,
       marginHorizontal:10
    },
    title:{
        fontSize:20,
        color:"#444444",
        fontWeight:"500"
    },
    price:{
        color:"#797979",
        marginVertical:10,
        fontSize:18
    },
    size:{
        marginVertical:10,
        color:"#444444",
    },
    colors:{
        marginVertical:10,
       
    },
    colorssize:{
        flexDirection:"row",
        justifyContent:"space-between",
    }
})