import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { selectBasketItems, selectBasketTotal } from '../features/basketSlice'
import {useSelector} from 'react-redux'
import { useNavigation } from '@react-navigation/native'

const BasketIcon = () => {
    const items = useSelector(selectBasketItems);
    const navigation = useNavigation();
    const basketTotal = useSelector(selectBasketTotal)

    if (items.length == 0) return null;
    
  return (
    <View className = "absolute bottom-10 w-full z-50">
      <TouchableOpacity className="mx-5 bg-[#00CCBB] flex-row p-4 
      rounded-lg items-center space-x-1"
      onPress={() => navigation.navigate("Basket")}>
        <Text className="text-white font-extrabold text-lg bg-[#01A296] py-1 px-2">{items.length}</Text>
        <Text className="flex-1 font-extrabold text-white text-lg text-center">View Basket</Text>
        <Text className="text-lg text-white font-extrabold">GBP {basketTotal}</Text>
      </TouchableOpacity>
    </View>
  )
}

export default BasketIcon