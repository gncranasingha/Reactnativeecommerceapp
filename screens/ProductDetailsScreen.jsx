import { StyleSheet, Text, View, Image, ScrollView, TouchableOpacity } from 'react-native';
import React, { useContext, useState } from 'react';
import { LinearGradient } from 'expo-linear-gradient';
import Header from '../components/Header'; 
import { CartContext } from '../context/context';
import { useNavigation } from 'expo-router';


const ProductDetailsScreen = ({ route }) => {

  const navigation = useNavigation();
  const [selectedSize, setSelectedSize] = useState(null);  // State to manage the selected size
  const { product } = route.params;

  const {addCart} = useContext(CartContext);
  
  const handleAddToCart = (product) => {
    product.size = selectedSize;
    addCart(product);
    navigation.navigate("CART")
  }

  return (
    <LinearGradient colors={['#f5f9fc', '#efe5ff']} style={styles.container}>
      <View style={styles.headerContainer}>
        <Header />
      </View>

      <ScrollView contentContainerStyle={styles.contentContainer}>
       
        <Image source={{ uri: product.mainImage }} style={styles.image} />

        
        <View style={styles.detailsContainer}>
          <Text style={styles.productName}>{product.name}</Text>
          <Text style={styles.brand}>{product.brandName}</Text>
          <Text style={styles.price}>
            {product.price.currency} {product.price.amount}
          </Text>

          <Text style={[styles.stockStatus, { color: product.stockStatus === 'IN STOCK' ? 'green' : 'red' }]}>
            {product.stockStatus}
          </Text>

          
          <View style={styles.sizesContainer}>
            <Text style={styles.sizesLabel}>Sizes:</Text>
            {product.sizes.map((size, index) => (
              <TouchableOpacity
                key={index}
                onPress={() => setSelectedSize(size)
                   
                }  
                style={[
                  styles.sizeButton,
                  selectedSize === size ? styles.selectedSize : styles.unselectedSize,  
                ]}
              >
                <Text style={styles.sizeText}>{size}</Text>
              </TouchableOpacity>
            ))}
          </View>

          <Text style={styles.color}>Color: {product.colour}</Text>

       
          <Text style={styles.sectionTitle}>Description</Text>
          <Text style={styles.description}>{product.description}</Text>
           {/* button container */}
           <TouchableOpacity  onPress={()=> {
              handleAddToCart(product)
           }} style={styles.button} >
             <Text style={styles.buttontext} >Add to Cart</Text>
           </TouchableOpacity>
        </View>
       

      </ScrollView>
    </LinearGradient>
  );
};

export default ProductDetailsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  headerContainer: {
    padding: 20,
  },
  contentContainer: {
    paddingHorizontal: 20,
    paddingBottom: 30,
  },
  image: {
    width: '100%',
    height: 300,
    borderRadius: 10,
    marginBottom: 20,
  },
  detailsContainer: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 20,
    elevation: 3,
  },
  productName: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 10,
  },
  brand: {
    fontSize: 18,
    color: '#555',
    marginBottom: 5,
  },
  price: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#5A67D8',
    marginBottom: 10,
  },
  stockStatus: {
    fontSize: 14,
    marginBottom: 10,
    fontWeight: 'bold',
  },
  sizesContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  sizesLabel: {
    fontSize: 16,
    fontWeight: 'bold',
    marginRight: 5,
  },
  sizeButton: {
    marginRight: 10,
    padding: 10,
    borderRadius: 5,
    
  },
  selectedSize: {
    backgroundColor: '#ab1aff', 
    color: '#fff',  
   
  },
  unselectedSize: {
    backgroundColor: '#f0f0f0',
     
  },
//   sizeText: {
//     fontSize: 14,
   
//   },
  color: {
    fontSize: 14,
    marginBottom: 10,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 10,
  },
  description: {
    fontSize: 14,
    color: '#777',
  },
  button:{
    backgroundColor:"#ab1aff",
    padding:10,
    margin:10,
    borderRadius:20
  },
  buttontext:{
    fontSize:24,
    fontWeight:"600",
    color:"white",
    textAlign:"center"
  }

});
