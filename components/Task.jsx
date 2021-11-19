import React from "react";
import { Text, StyleSheet, View } from "react-native";

export function Task(props) {
    const { taskName = 'Task'} = props
    return (
        <View>
            <Text>{taskName}</Text>
        </View>
    );
}
