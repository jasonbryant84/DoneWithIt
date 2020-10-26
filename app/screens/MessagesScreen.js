import React, { useState } from 'react';
import { FlatList, StyleSheet } from 'react-native'  // SectionList is a thing

import Screen from '../components/Screen'
import { ListItem, ListItemDeleteAction, ListItemSeparator } from '../components/lists'

const initialMessages = [
    {
        id: 1,
        title: 'This is a really long string of text thank you very much',
        description: 'Now that we found love what are we gonna do with it? Make Natty shoot, Make Natty shoot.',
        image: require('../assets/mosh.jpg')
    },
    {
        id: 2,
        title: 'T2',
        description: 'D2',
        image: require('../assets/mosh.jpg')
    }
]
export default function MessagesScreen(props) {
    const [messages, setMessages] = useState(initialMessages)
    const [refreshing, setRefreshing] = useState(false)

    const handleDelete = message => {
        setMessages(messages.filter(m => m.id !== message.id))
    }

    return (
        <Screen style={styles.container}>
            <FlatList 
                data={messages}
                keyExtractor={message => message.id.toString()}
                renderItem={({ item }) => (
                    <ListItem
                        title={item.title}
                        subTitle={item.description}
                        image={item.image}
                        // IconComponent={<Icon/>}
                        onPress={()=> console.log('selected', item)}
                        renderRightActions={() => 
                            <ListItemDeleteAction 
                                onPress={() => handleDelete(item)} 
                            />
                        }
                        showChevrons
                    />
                )}
                ItemSeparatorComponent={ListItemSeparator}
                refreshing={refreshing}
                onRefresh={()=> 
                    setMessages([
                        {
                            id: 2,
                            title: 'T2',
                            description: 'D2',
                            image: require('../assets/mosh.jpg')
                        },
                    ])
                }
            />
        </Screen>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
})

