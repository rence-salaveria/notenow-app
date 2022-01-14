import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import { Styles } from './Styles'

export default function CustomButton(props) {
    const { onPress, title } = props;
    return (
        <TouchableOpacity
            style={Styles.buttonStyle}
            onPress={onPress}
            activeOpacity={0.2}
        >
            <Text style={Styles.buttonText}>{title}</Text>
        </TouchableOpacity>
    );
}


