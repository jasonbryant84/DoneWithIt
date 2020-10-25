import React from 'react';
import { View, StyleSheet, Flatlist } from 'react-native'
import ListItem from '../components/ListItem'
import Screen from '../components/Screen'
import Icon from '../components/Icon'

import colors from '../config/colors'
import ListItemSeparatorComponent from '../components/ListItemSeparator'

const menuItems = [
    {
        title: 'My Listings',
        icon: {
            name: 'format-list-bulleted',
            backgroundColor: colors.primary
        }
    },{
        title: 'My Messages',
        icon: {
            name: 'email',
            backgroundColor: colors.secondary
        }
    }
]

function AccountScreen() {
    return (
        <Screen style={{ backgroundColor: colors.light }}>
            <ListItem
                style={styles.about}
                title={`Mosh Hamedani`}
                subTitle={`programmingwithmosh@gmail.com`}
                image={require('../assets/mosh.jpg')}
            />
            <View style={styles.pages}>
                <FlatList
                    data={menuItems}
                    keyExtractor={menuItem => menuItem.title}
                    renderItem={({item}) => 
                        <ListItem
                            title={item.title}
                            IconComponent={
                                <Icon 
                                    name={item.icon.name} 
                                    size={40}
                                    backgroundColor={item.icon.backgroundColor}
                                />
                            }
                        />
                    }
                    ItemSeparatorComponent={ListItemSeparatorComponent}
                />
            </View>
           
            <ListItem
                style={[styles.listingsContainer, { alignItems: 'center'}]}
                title={`Log Out`}
                IconComponent={
                    <Icon 
                        name={`logout`} 
                        size={40}
                        backgroundColor={styles.logout.backgroundColor}
                    />
                }
            />
        </Screen>
    );
}

export default AccountScreen;

const styles = StyleSheet.create({
    about: {
        marginVertical: 20,
        alignItems: 'center'
    },
    listings: {
        backgroundColor: colors.primary
    }, 
    listingsContainer: {
        marginBottom: 2,
    },
    logout: {
        backgroundColor: '#ffe66d'
    }, 
    messages: {
        backgroundColor: colors.secondary
    },  
    pages: {
        marginVertical: 10
    }
})