import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import React from 'react';

const Category = ({ item, selectedCategory, setSelectedCategory }) => {
  return (
    <TouchableOpacity
      onPress={() => setSelectedCategory(item)}
      style={[
        styles.categoryContainer,
        selectedCategory === item && {
          backgroundColor: '#ab1aff',
        },
      ]}
    >
      <Text style={[
        styles.CategoryText,
        selectedCategory === item && {
          color: '#FFFFFF',
        },
      ]}>
        {item}
      </Text>
    </TouchableOpacity>
  );
};

export default Category;

const styles = StyleSheet.create({
    categoryContainer: {
      borderRadius: 16,
      backgroundColor: '#DFDCDC', 
      marginHorizontal: 10,
      height: 40, 
      justifyContent: 'center', 
      paddingHorizontal: 10, 
    },
    CategoryText: {
      fontSize: 16,
      fontWeight: '600',
      color: '#938F8F',
      textAlign: 'center',
    },
  });
  