import { View, Text, Image, TextInput, ScrollView} from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import {React, useLayoutEffect} from 'react'
import { useNavigation } from '@react-navigation/native'
import {AdjustmentsVerticalIcon, MagnifyingGlassIcon, ChevronDownIcon, UserIcon} from "react-native-heroicons/outline"
import Categories from '../components/Categories'
import FeaturedRow from '../components/FeaturedRow'

const Home = () => {
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false
    })
  }, [])

  return (
    <SafeAreaView className="bg-white pt-5">
        {/*hEADER*/}
        <View className="flex-row pb-3 items-center mx-4 space-x-2">
          <Image source={{
            uri: "https://links.papareact.com/wru",
          }}
          className="h-7 w-7 bg-gray-300 p-4 rounded-full"/>

          <View className="flex-1">
            <Text className="font-bold text-gray-400 text-xs">Deliver Now!</Text>
            <View className="flex-row items-center">
              <Text className="font-bold text-xl">Current Location</Text>
              <ChevronDownIcon size={20} color="#00CCBB"/>
            </View>
          </View>

          <UserIcon size={35} color="#00CCBB" className="flex-row-reverse"/>
        </View>

        {/*Search*/}
        <View className="flex-row items-center space-x-2 pb-2 mx-4">
          <View className="flex-row flex-1 space-x-2 bg-gray-200 p-3">
            <MagnifyingGlassIcon color="gray" size={25}/>
            <TextInput placeholder="Restaurants and Cuisines" keyboardType='default'/>
          </View>

          <AdjustmentsVerticalIcon color="#00CCBB"/>
        </View>

        {/* Body */}
        <ScrollView className="bg-gray-100">
          <Categories/>

          <FeaturedRow
          
          title="Featured"
          description="Paid placements from our partners"
                  />

          <FeaturedRow
          title="Tasty Discounts"
          description="Everyone's being enjoying these juicy discounts!"
        
          />

          <FeaturedRow
          title="Offers near you"
          description="Why not support your local restaurant tonight?"
                />
        </ScrollView>
    </SafeAreaView>
  )
}

export default Home;