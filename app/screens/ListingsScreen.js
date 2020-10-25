import React, { useState } from 'react';
import { StyleSheet, FlatList } from 'react-native' // SectionList is a thing
 
import Card from '../components/Card' 
import Screen from '../components/Screen'

import colors from '../config/colors'

const initalListings = [
    {
        id: 1,
        title: 'Red jacket for sale!',
        subTitle: 100,
        imageStr: require('../assets/jacket.jpg')
    },
    {
        id: 2,
        title: 'Couch in great condition',
        subTitle: 1000,
        imageStr: require('../assets/couch.jpg')
    }
]
export default function ListingsScreen() {
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
                        subTitle={'$' + item.subTitle}
                        image={item.imageStr}
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