import React, { useState } from 'react';
import {
    KeyboardAvoidingView,
    Text,
    View,
    TextInput,
    TouchableOpacity,
    Keyboard,
    ScrollView,
    SafeAreaView,
    Platform
} from 'react-native';
import { Styles, MainStyle } from '../components/Styles';
import { Task } from "../components/Task";


export default function MainScreen() {
    const [task, setTask] = useState();
    const [taskItems, setTaskItems] = useState([]);

    const handleAddTask = () => {
        Keyboard.dismiss();
        setTaskItems([...taskItems, task])
        setTask(null);
    }

    const completeTask = (index) => {
        let itemsCopy = [...taskItems];
        itemsCopy.splice(index, 1);
        setTaskItems(itemsCopy);
    }

    return (
        <SafeAreaView style={Styles.container}>
            {/* Added this scroll view to enable scrolling when list gets longer than the page */}
            <ScrollView
                contentContainerStyle={{
                    flexGrow: 1
                }}
                keyboardShouldPersistTaps='handled'
            >
                {/* Today's Tasks */}
                <View style={MainStyle.tasksWrapper}>
                    <Text style={Styles.heading}>Today's tasks :</Text>
                    <View style={MainStyle.items}>
                        {
                            /* Map items from the taskItems and show them as tasks */
                            taskItems.map((item, index) => {
                                return (
                                    <TouchableOpacity
                                        key={index}
                                        onPress={() => completeTask(index)}
                                    >
                                        <Task text={item} />
                                    </TouchableOpacity>
                                )
                            })
                        }
                    </View>
                </View>

            </ScrollView>

            {/* Write a task */}
            {/* Uses a keyboard avoiding view which ensures the keyboard does not cover the items on screen */}
            <KeyboardAvoidingView
                behavior={Platform.OS === "ios" ? "padding" : "height"}
                style={MainStyle.writeTaskWrapper}
                keyboardVerticalOffset={null}
            >
                <TextInput
                    style={[MainStyle.input, Styles.karla]}
                    placeholder={'Write a task'} value={task}
                    onChangeText={text => setTask(text)}
                />
                <TouchableOpacity onPress={() => handleAddTask()}>
                    <View style={MainStyle.addWrapper}>
                        <Text style={[MainStyle.addText, Styles.increaseSize]}>+</Text>
                    </View>
                </TouchableOpacity>
            </KeyboardAvoidingView>
        </SafeAreaView>
    );
}
