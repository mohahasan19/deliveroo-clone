import { View, Text, ScrollView, Image } from 'react-native'
import React from 'react'
import { ArrowRightIcon } from 'react-native-heroicons/solid'
import RestaurantCard from './RestaurantCard'

const FeaturedRow = ({title, description}) => {
  return (
    <View>
        <View className="mt-4 flex-row items-center justify-between px-4">
            <Text className="font-bold text-lg">{title}</Text>
            <ArrowRightIcon color="#00CCBB" />
        </View>

        <Text className="text-xs text-gray-500 px-4">{description}</Text>

        <ScrollView
        horizontal
        contentContainerStyle={{
            paddingHorizontal: 15,
            paddingTop: 10
        }}
        showsHorizontalScrollIndicator={false}
        >
            <RestaurantCard 
            id={123}
            imgUrl="https://links.papareact.com/gn7"
            title="Sushix"
            rating={4.5}
            genre="Japanese"
            address="123 no. 812"
            short_description="lkdfkdafadjakja"
            dishes={[]}
            long={20}
            lat={0}
             />
             <RestaurantCard 
            id={123}
            imgUrl="https://links.papareact.com/gn7"
            title="Sushix"
            rating={4.5}
            genre="Japanese"
            address="123 no. 812"
            short_description="lkdfkdafadjakja"
            dishes={[]}
            long={20}
            lat={0}
             />
             <RestaurantCard 
            id={123}
            imgUrl="https://links.papareact.com/gn7"
            title="Sushix"
            rating={4.5}
            genre="Japanese"
            address="123 no. 812"
            short_description="lkdfkdafadjakja"
            dishes={[]}
            long={20}
            lat={0}
             />
        </ScrollView>
    </View>
  )
}

export default FeaturedRow