import React from "react";
import { Text, View } from "react-native";
import { Styles, TaskStyle } from "./Styles";


export function Task(props) {
    return (
        <View style={TaskStyle.item}>
            <View style={TaskStyle.itemLeft}>
                <View style={TaskStyle.square}/>
                <Text style={[TaskStyle.itemText, Styles.karla]}>
                    {props.text}
                </Text>
            </View>
        </View>
    );
}
