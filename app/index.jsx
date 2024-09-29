import { View, Text } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import HomeScreen from '../screens/HomeScreen';
import Entypo from 'react-native-vector-icons/Entypo';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesome6 from 'react-native-vector-icons/FontAwesome6';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ProductDetailsScreen from '../screens/ProductDetailsScreen';


const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();


function Home(){
    return(
        <View>
            <Text>Home</Text>
        </View>
    )
  
}

function MyHomeStack(){
    return(
        <Stack.Navigator 
            screenOptions={{
                // headerShown: false,
            }}
        >
            <Stack.Screen name="HOME" component={HomeScreen} />
            <Stack.Screen name="PRODUCT_DETAILS" component={ProductDetailsScreen} />
        </Stack.Navigator>
    )
  
}



const index = () => {
  return (
    <NavigationContainer independent={true} >
      <Tab.Navigator screenOptions={{
        headerShown: false, //hide header
        tabBarShowLabel:false, //hide lable under the icon
        tabBarActiveTintColor: "#ab1aff", //control appbar icon focuse color
        }} >
        <Tab.Screen name='HOME_STACK' component={MyHomeStack} options={{
            tabBarIcon:({size, focused,color})=>{
                return(
                    <Entypo name={"home"} size={size} color={color} />
                )
            }
            }} />
        <Tab.Screen name='REORDER' component={Home} options={{
            tabBarIcon:({size,color})=>{
                return(
                    <Ionicons name={"reorder-four"} size={size} color={color} />
                )
            }
            }} />
        <Tab.Screen name='CART' component={Home} options={{
            tabBarIcon:({size,color})=>{
                return(
                    <MaterialCommunityIcons name={"cart"} size={size} color={color} />
                )
            }
            }} />
        <Tab.Screen name='ACCOUNT' component={Home} options={{
            tabBarIcon:({size,color})=>{
                return(
                    <FontAwesome6 name={"user"} size={size} color={color} />
                )
            }
            }}/>
      </Tab.Navigator>
    </NavigationContainer>
  )
}

export default index