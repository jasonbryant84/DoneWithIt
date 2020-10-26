import React from 'react'
import { StyleSheet } from 'react-native'
import * as Yup from 'yup'

import Screen from '../components/Screen'
import { 
    AppForm, 
    AppFormField as FormField, // optional aliasing
    AppFormPicker as Picker, 
    SubmitButton 
} from '../components/forms'
import CategoryPickerItem from '../components/CategoryPickerItem'

const validationSchema = Yup.object().shape({
    title: Yup.string().required().min(1).label('Title'),
    price: Yup.number().required().min(1).max(10000).label('Price'),
    category: Yup.object().required().nullable().label('Category'),
    description: Yup.string().label('Description')
})

const categories = [
    { label: 'Furniture', icon: 'floor-lamp', backgroundColor: '#fc5c65', value: 1 },
    { label: 'Cars', icon: 'car', backgroundColor: '#fd9644', value: 2 },
    { label: 'Cameras', icon: 'camera', backgroundColor: '#fed330', value: 3 },
    { label: 'Games', icon: 'cards', backgroundColor: '#26de81', value: 4 },
    { label: 'Clothing', icon: 'shoe-heel', backgroundColor: '#2bcbba', value: 5 },
    { label: 'Sports', icon: 'basketball', backgroundColor: '#45aaf2', value: 6 },
    { label: 'Movies & Music', icon: 'headphones', backgroundColor: '#4b7bec', value: 7 },
]

export default function ListingEditScreen() {
    return (
        <Screen style={styles.container}>
            <AppForm
                initialValues={{ 
                    title: '', 
                    price: '', 
                    description: '', 
                    category: null 
                }}
                onSubmit={(values) => console.log(values)}
                validationSchema={validationSchema}
            >
                <FormField
                    autoCapitalize='none'
                    keyboardType='default'
                    name='title'
                    placeholder='Title'
                    maxLength={255}
                />
                <FormField
                    autoCapitalize='none'
                    keyboardType='numeric'
                    name='price'
                    placeholder='Price'
                    maxLength={8}
                    width={'30%'}
                />
                <Picker
                    items={categories}
                    name='category'
                    placeholder='Category'
                    numberOfColumns={3}
                    PickerItemComponent={CategoryPickerItem} // has a default value
                    width={'50%'}
                />
                <FormField
                    autoCapitalize='none'
                    autoCorrect={false}
                    keyboardType='default'
                    name='password'
                    placeholder='Description'
                    multiline
                    maxLength={255}
                />
                <SubmitButton title='Post' />
            </AppForm>
        </Screen>
    )
}

const styles = StyleSheet.create({
    container: {
        padding: 10
    }
})
