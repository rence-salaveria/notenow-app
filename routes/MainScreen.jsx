import React from 'react';
import {
    SafeAreaView,
    StyleSheet,
    View,
    Text,
    TextInput, // dont forget to lagay yung border
} from 'react-native';
import { Styles, Layout } from '../components/Styles';
import CustomButton from '../components/CustomButton';
import {Task} from "../components/Task";

export default function MainScreen() {
    return (
        <SafeAreaView style={Styles.container}>
            {/* Reference at: https://www.youtube.com/watch?v=0kL6nhutjQ8 */}
                <View style={style.header}>
                    <Text style={style.sectionTitle}>Task List</Text>
                    <View style={style.taskList}>
                        <Task taskName={'Task 1'}/>
                        <Task taskName={'Task 2'}/>
                        <Task taskName={'Task 3'}/>
                    </View>
                </View>
        </SafeAreaView>
    );
}

const style = StyleSheet.create({
    header: {
        paddingTop: 20,
        paddingHorizontal: 30
    },
    sectionTitle: {
        fontSize: 30,
        fontWeight: 'bold',
        fontFamily: 'Rubik',
        color: '#000',
        marginBottom: 10
    },
})
