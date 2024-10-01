import { Text, View, TouchableOpacity } from 'react-native';
import React from 'react';

const Category = ({ item, selectedCategory, setSelectedCategory }) => {
  return (
    <TouchableOpacity
      onPress={() => setSelectedCategory(item)}
      className={`rounded-lg bg-gray-300 mx-2 h-10 justify-center px-4 ${
        selectedCategory === item ? 'bg-purple-600' : ''
      }`}
    >
      <Text className={`text-base font-semibold text-center ${
        selectedCategory === item ? 'text-white' : 'text-gray-600'
      }`}>
        {item}
      </Text>
    </TouchableOpacity>
  );
};

export default Category;
