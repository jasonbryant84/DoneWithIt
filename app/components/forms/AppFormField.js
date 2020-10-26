import React from 'react'
import { View } from 'react-native'
import { useFormikContext } from 'formik'

import AppTextInput from '../AppTextInput'
import ErrorMessage from './ErrorMessage'

export default function AppFormField({ name, width, ...otherProps }) {
    const { setFieldTouched, handleChange, errors, touched } = useFormikContext()

    return (
        <View style={{ width }}>
            <AppTextInput
                onBlur={() => setFieldTouched(name)}
                onChangeText={handleChange(name)}
                { ...otherProps }
            />
            <ErrorMessage  error={errors[name]} visible={touched[name]}/>
        </View>
    )
}

