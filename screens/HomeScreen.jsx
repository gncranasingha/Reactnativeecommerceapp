import { View, Text, TextInput, FlatList } from 'react-native';
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
    <LinearGradient colors={['#f5f9fc', '#efe5ff']} className="p-5">
      <Header />
      <Text className="text-3xl text-black mt-6">Match Your Style</Text>
      {/* Input container */}
      <View className="bg-white h-12 rounded-lg flex-row items-center mb-5">
        <View className="mx-4">
          <Fontisto name={"search"} size={20} color={"#C0C0C0"} />
        </View>
        <TextInput 
          className="flex-1 text-lg" 
          placeholder="Search" 
          placeholderTextColor="#C0C0C0" 
        />
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
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 20 }}
      />
      {/* Product List */}
      <FlatList
        data={filteredProducts}
        renderItem={({ item }) => (
          <ProductCard product={item} />
        )}
        keyExtractor={(item) => item.id.toString()}
        numColumns={2}
        columnWrapperStyle={{ justifyContent: 'space-between' }}
        contentContainerStyle={{ paddingBottom: 230 }}
        showsVerticalScrollIndicator={false}
      />
    </LinearGradient>
  );
};

export default HomeScreen;
