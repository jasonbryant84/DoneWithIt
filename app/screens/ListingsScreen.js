import React, { useState, useEffect } from 'react';
import { StyleSheet, FlatList } from 'react-native' // SectionList is a thing
 
import ActivityIndicator from '../components/ActivityIndicator'
import AppButton from '../components/AppButton'
import Card from '../components/Card' 
import colors from '../config/colors'
import { listingsApi } from '../api'
import routes from '../navigation/routes'
import Screen from '../components/Screen'
import AppText from '../components/AppText';
import useApi from '../hooks/useApi';

export default function ListingsScreen({ navigation }) {
    const [refreshing, setRefreshing] = useState(false)

    //passing reference to function via param apiFunc
    const { 
        data: listings, 
        error, 
        loading, 
        request: loadListings 
    } = useApi(listingsApi.getListings)

    // Can't pass async function to the useEffect hook
    useEffect(() => {
        loadListings()
    },[])

    return (
        <>
            <ActivityIndicator visible={loading} />
            <Screen style={styles.container}>
                { error && <>
                    <AppText>Couldn't retrievethe listings.</AppText>
                    <AppButton title="Retry" onPress={loadListings} />
                </> }
                <FlatList 
                    style={styles.flatList}
                    data={listings}
                    keyExtractor={listing => listing.id.toString()}
                    renderItem={({ item }) => (
                        <Card 
                            title={item.title + item.uri}
                            subTitle={'$' + item.price}
                            imageUri={item.images[0].url}
                            onPress={() => {
                                navigation.navigate(routes.LISTING_DETAILS, item)
                            }}
                            thumbnailUri={item.images[0].thumbnailUrl}
                        />
                    )}
                    refreshing={refreshing} //refreshing
                />
            </Screen>
        </>
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