import React, { useState } from 'react';
import { StyleSheet, FlatList } from 'react-native' // SectionList is a thing
 
import Card from '../components/Card' 
import colors from '../config/colors'
import { routes } from '../navigation'
import Screen from '../components/Screen'

const initalListings = [
    {
        id: 1,
        title: 'Red jacket for sale!',
        price: 100,
        image: require('../assets/jacket.jpg')
    },
    {
        id: 2,
        title: 'Couch in great condition',
        price: 1000,
        image: require('../assets/couch.jpg')
    }
]
export default function ListingsScreen({ navigation }) {
    const [listings, setListings] = useState(initalListings)
    const [refreshing, setRefreshing] = useState(false)

    return (
        <Screen style={styles.container}>
            <FlatList 
                style={styles.flatList}
                data={listings}
                keyExtractor={listing => listing.id.toString()}
                renderItem={({ item }) => (
                    <Card 
                        title={item.title}
                        subTitle={'$' + item.price}
                        image={item.image}
                        onPress={() => {
                            navigation.navigate(routes.LISTING_DETAILS, item)
                        }}
                    />
                )}
                refreshing={refreshing}
            />
        </Screen>
    )
}

const styles = StyleSheet.create({
  container: { 
    position: 'relative',
    padding: 5,
    flex: 1,
    flexDirection: 'column',
    backgroundColor: colors.light
  },
  flatList: {
      padding: 20
  }
})