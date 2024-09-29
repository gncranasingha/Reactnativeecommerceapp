import { Image, StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';

const ProductCard = ({ product }) => {
  // State to toggle description visibility
  const [showDescription, setShowDescription] = useState(false);

  return (
    <View style={styles.container}>
      {/* Product Image */}
      <Image source={{ uri: product.mainImage }} style={styles.coverImage} />

      {/* Product Information */}
      <Text style={styles.name}>{product.name}</Text>
      <Text style={styles.brand}>{product.brandName}</Text>
      <Text style={styles.price}>
        {product.price.currency} {product.price.amount}
      </Text>

      {/* Conditional stock status */}
      <Text style={[styles.stockStatus, { color: product.stockStatus === 'IN STOCK' ? 'green' : 'red' }]}>
        {product.stockStatus}
      </Text>

      {/* Sizes */}
      <View style={styles.sizesContainer}>
        <Text style={styles.sizesLabel}>Sizes:</Text>
        {product.sizes.map((size, index) => (
          <Text key={index} style={styles.size}>
            {size}
          </Text>
        ))}
      </View>

      {/* Color */}
      <Text style={styles.color}>Color: {product.colour}</Text>

      {/* Show More Button */}
      <TouchableOpacity
        style={styles.showMoreButton}
        onPress={() => setShowDescription(!showDescription)}
      >
        <Text style={styles.showMoreText}>{showDescription ? 'Show Less' : 'Show More'}</Text>
      </TouchableOpacity>

      {/* Description (conditionally rendered based on state) */}
      {showDescription && (
        <Text style={styles.description}>{product.description}</Text>
      )}
    </View>
  );
};

export default ProductCard;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    borderRadius: 10,
    backgroundColor: '#fff',
    marginVertical: 10,
    marginHorizontal:2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 2,
    justifyContent: 'space-between',
   
  },
  coverImage: {
    height: 100,
    width: 130,
    borderRadius: 10,
    marginBottom: 10,
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  brand: {
    fontSize: 16,
    color: '#555',
    marginBottom: 5,
  },
  price: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
    color: '#000',
  },
  stockStatus: {
    fontSize: 14,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  sizesContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  sizesLabel: {
    fontSize: 14,
    fontWeight: 'bold',
    marginRight: 5,
  },
  size: {
    fontSize: 14,
    marginRight: 5,
    backgroundColor: '#f0f0f0',
    padding: 5,
    borderRadius: 5,
  },
  color: {
    fontSize: 14,
    marginBottom: 10,
  },
  description: {
    fontSize: 14,
    color: '#777',
    marginTop: 10,  // Add margin for spacing
  },
  showMoreButton: {
    marginTop: 10,
    backgroundColor: '#ddd',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
  },
  showMoreText: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#ab1aff',
  },
});
