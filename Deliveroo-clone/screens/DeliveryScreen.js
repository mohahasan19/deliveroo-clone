import { View, Text, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import { SafeAreaView } from 'react-native-safe-area-context';
import { selectRestaurant } from '../features/restaurantSlice';
import { useSelector } from "react-redux";
import { XCircleIcon } from 'react-native-heroicons/outline';
import * as Progress from "react-native-progress";
import MapView, { Marker } from "react-native-maps";

const DeliveryScreen = () => {
    const navigation = useNavigation();
    const restaurant = useSelector(selectRestaurant)
  return (
    {/* using flex-1 in the below code applies the color to the entire screen, including the SafeAreaView */},
    <View className="bg-[#00CCBB] flex-1">
      <SafeAreaView className="z-50">
        <View className="flex-row justify-between items-center p-5">
            <TouchableOpacity 
            onPress={() => navigation.navigate("Home")}>
                <XCircleIcon color="white" size={30} />
            </TouchableOpacity>
            <Text className="font-light text-white text-lg">Order help</Text>
        </View>

        <View className="bg-white mx-5 my-2 rounded-md p-6 z-50 shadow-md">
            <View className="flex-row justify-between">
                <View>
                    <Text className="text-lg text-gray-400">Estimated Time</Text>
                    <Text className="text-4xl font-bold">45-55 minutes</Text>
                </View>
                <Image
                source={{
                    uri: "https://links.papareact.com/fls"
                }}
                className="h-20 w-20" />
            </View>
            
            <Progress.Bar size={30} color="#00CCBB" indeterminate={true} />

            <Text className="mt-3 text-gray-500">
                Your order at {restaurant.title} is being prepared
            </Text>
        </View>
      </SafeAreaView>

      <MapView
      initialRegion={{
        latitude: restaurant.lat,
        longitude: restaurant.long,
        latitudeDelta: 0.05,
        longitudeDelta: 0.05
      }}
      className="flex-1 -mt-10 z-0"
      mapType='standard' />

      <Marker
      coordinate={{
        latitude: restaurant.lat,
        longitude: restaurant.long,
      }}
      title={restaurant.title}
      description={restaurant.short_description}
      pinColor="#00CCBB"
      identifier='origin' />
    </View>
  )
}

export default DeliveryScreen;