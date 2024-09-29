import { View, Text } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import HomeScreen from '../screens/HomeScreen';
import Entypo from 'react-native-vector-icons/Entypo';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesome6 from 'react-native-vector-icons/FontAwesome6';

const Tab = createBottomTabNavigator();


function Home(){
    return(
        <View>
            <Text>Home</Text>
        </View>
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
        <Tab.Screen name='HOME' component={HomeScreen} options={{
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