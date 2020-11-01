import React from 'react';
import { View, StyleSheet, FlatList } from 'react-native'

import colors from '../config/colors'
import Icon from '../components/Icon'
import { ListItem } from '../components/lists'
import ListItemSeparatorComponent from '../components/lists/ListItemSeparator'
import Screen from '../components/Screen'

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
        },
        targetScreen: 'Messages'
    }
]

function AccountScreen({ navigation }) {
    const { user, logOut } = useAuth()

    return (
        <Screen style={{ backgroundColor: colors.light }}>
            <ListItem
                style={styles.about}
                title={user.name}
                subTitle={user.email}
                image={require('../assets/mosh.jpg')}
                showChevrons
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
                            onPress={() => navigation.navigate(item.targetScreen) }
                            showChevrons
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
                onPress={logOut}
                showChevrons
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