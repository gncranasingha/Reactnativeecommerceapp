import { StyleSheet, Text, View, TextInput, FlatList } from 'react-native';
import React, { useState, useEffect } from 'react';
import Fontisto from 'react-native-vector-icons/Fontisto';
import { LinearGradient } from 'expo-linear-gradient';
import Header from '../components/Header';
import Category from '../components/Category';
import ProductCard from '../components/ProductCard';
import product from '../data/data.json';

const categories = ['All', 'Nike', 'Puma'];

const HomeScreen = () => {
  const [products, setProducts] = useState(product.data);
  const [filteredProducts, setFilteredProducts] = useState(product.data);
  const [selectedCategory, setSelectedCategory] = useState('All');

  useEffect(() => {
    // Filter products based on the selected category
    if (selectedCategory === 'All') {
      setFilteredProducts(products); // Show all products
    } else {
      const filtered = products.filter((item) => item.brandName === selectedCategory);
      setFilteredProducts(filtered); // Show filtered products
    }
  }, [selectedCategory, products]);

  return (
    <LinearGradient colors={['#f5f9fc', '#efe5ff']} style={styles.container}>
      <Header />
      <Text style={styles.matchText}>Match Your Style</Text>
      {/* Input container */}
      <View style={styles.inputContainer}>
        <View style={styles.iconContainer}>
          <Fontisto name={"search"} size={20} color={"#C0C0C0"} />
        </View>
        <TextInput style={styles.textInput} placeholder="Search" placeholderTextColor="#C0C0C0" />
      </View>
      {/* Category section */}
      <FlatList
        data={categories}
        renderItem={({ item }) => (
          <Category
            item={item}
            selectedCategory={selectedCategory}
            setSelectedCategory={setSelectedCategory}
          />
        )}
        keyExtractor={(item) => item}
        horizontal={true}
        showsHorizontalScrollIndicator={false} // Remove scroll 
        contentContainerStyle={{ paddingBottom: 20 }}
      />
      {/* Product List */}
      <FlatList
        data={filteredProducts} // Use filtered products
        renderItem={({ item }) => (
          <ProductCard product={item} /> // Pass each product to the ProductCard
        )}
        keyExtractor={(item) => item.id.toString()} // Ensure key is a string
        numColumns={2} // Display products in two columns
        columnWrapperStyle={{ justifyContent: 'space-between' }}
        contentContainerStyle={{ paddingBottom: 230 }}
        showsVerticalScrollIndicator={false}
      />
    </LinearGradient>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  matchText: {
    fontSize: 28,
    color: "#000000",
    marginTop: 25,
  },
  inputContainer: {
    backgroundColor: "#FFFFFF",
    height: 48,
    borderRadius: 12,
    alignItems: "center",
    flexDirection: "row",
    marginVertical: 20,
  },
  iconContainer: {
    marginHorizontal: 15,
  },
  textInput: {
    flex: 1,
    fontSize: 20,
  },
})
