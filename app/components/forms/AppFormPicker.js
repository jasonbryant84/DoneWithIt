import React from 'react'
import { View } from 'react-native'
import { useFormikContext } from 'formik'

import AppPicker from '../AppPicker'
import ErrorMessage from './ErrorMessage'

export default function AppFormPicker({ 
    items, 
    name, 
    numberOfColumns,
    PickerItemComponent,
    placeholder, 
    width = '100%' 
}) {
    const { errors, setFieldValue, touched, values } = useFormikContext()

    return (
        <View style={{ width }}>   
            <AppPicker 
                items={items}
                numberOfColumns={numberOfColumns}
                onSelectItem={ (item) => setFieldValue(name, item) }
                PickerItemComponent={PickerItemComponent}
                placeholder={placeholder}
                selectedItem={values[name]}
            />
            <ErrorMessage  error={errors[name]} visible={touched[name]}/>
        </View>
    )
}