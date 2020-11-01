import React, { useState } from 'react'
import { StyleSheet } from 'react-native'
import * as Yup from 'yup'

import CategoryPickerItem from '../components/CategoryPickerItem'
import { 
    AppForm, 
    AppFormField as FormField, // optional aliasing
    AppFormPicker as Picker, 
    FormImagePicker as ImagePicker, 
    SubmitButton 
} from '../components/forms'
import Screen from '../components/Screen'
import listingsApi from '../api/listings'
import UploadScreen from './UploadScreen'
import useLocation from '../hooks/useLocation'

const validationSchema = Yup.object().shape({
    title: Yup.string().required().min(1).label('Title'),
    price: Yup.number().required().min(1).max(10000).label('Price'),
    category: Yup.object().required().nullable().label('Category'),
    description: Yup.string().label('Description'),
    images: Yup.array().min(1, 'Please select at least one image')
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
    const location = useLocation()
    const [uploadVisible, setUploadVisible] = useState(false)
    const [progress, setProgress] = useState(0)

    const handleSubmit = async (listing, { resetForm }) => {
        setProgress(0)
        setUploadVisible(true)
        const result = await listingsApi.addListing(
            {
                ...listing, location
            }, 
            progress => setProgress(progress))

        if(!result.ok) {
            setUploadVisible(false)
            return alert('Could not save the listing')
        }

        resetForm()
    }

    return (
        <Screen style={styles.container}>
            <UploadScreen 
                onDone={() => setUploadVisible(false)}
                progress={progress} 
                visible={uploadVisible} 
            />
            <AppForm
                initialValues={{ 
                    title: '', 
                    price: '', 
                    description: '', 
                    category: null,
                    images: []
                }}
                onSubmit={handleSubmit}
                validationSchema={validationSchema}
            >
                <ImagePicker name="images" />
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
