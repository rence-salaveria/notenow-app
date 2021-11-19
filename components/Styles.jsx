import { StyleSheet } from "react-native";

export const Styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f5f5dc',
    },
    logo: {
        width: 200,
        height: 200,
        resizeMode: 'stretch',
        margin: 50,
        marginTop: 100,
        marginBottom: 15
    },
    title: {
        fontFamily: 'Rubik',
        fontSize: 40,
        color: '#8B4411'
    },
    heading: {
        fontFamily: 'Epilogue',
        fontSize: 30,
        color: '#8B4411',
    },
    subtitle: {
        fontFamily: 'Epilogue',
        fontWeight: '500',
        fontSize: 18,
        marginBottom: 50
    },
    buttonText: {
        fontFamily: 'Rubik',
        color: '#fff'
    },
    buttonStyle: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 7,
        elevation: 3,
        backgroundColor: '#CC9767',
    },
    textInput: {
        borderWidth: 1,
        width: '50%'
    },
    epilogue: {
        fontFamily: 'Epilogue',
        fontSize: 18,
    },
    rubik: {
        fontFamily: 'Rubik',
        fontSize: 18,
    },
    karla: {
        fontFamily: 'Karla',
        fontSize: 18,
    },
    increaseSize: {
        fontSize: 20,
    },

});

export const Layout = StyleSheet.create({
    verticalSpacing: {
        height: 10
    },
    imageContainer: {
        flexDirection: 'row',
        justifyContent: 'center'
    },
    buttonAlignment: {
        justifyContent: 'center',
        alignItems: 'center'
    },
    taskList: {
        marginTop: 30,
    }
});


export const TaskStyle = StyleSheet.create({
    item: {
        backgroundColor: '#fff',
        padding: 15,
        borderRadius: 10,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 20,
    },
    itemLeft: {
        flexDirection: 'row',
        alignItems: 'center',
        flexWrap: 'wrap'
    },
    square: {
        width: 24,
        height: 24,
        backgroundColor: '#CC9767',
        opacity: 0.4,
        borderRadius: 5,
        marginRight: 15,
    },
    itemText: {
        maxWidth: '80%',
    },
    circular: {
        width: 12,
        height: 12,
        borderColor: '#CC9767',
        borderWidth: 2,
        borderRadius: 5,
    },
})

export const MainStyle = StyleSheet.create({
    tasksWrapper: {
        paddingTop: 20,
        paddingHorizontal: 10,
    },
    items: {
        marginTop: 30,
    },
    writeTaskWrapper: {
        position: 'absolute',
        bottom: 20,
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center'
    },
    input: {
        paddingVertical: 10,
        paddingHorizontal: 20,
        backgroundColor: '#FFF',
        borderRadius: 60,
        borderColor: '#C0C0C0',
        borderWidth: 1,
        width: 250,
    },
    addWrapper: {
        width: 50,
        height: 50,
        backgroundColor: '#CC9767',
        borderRadius: 60,
        justifyContent: 'center',
        alignItems: 'center',
        borderColor: '#CC9767',
        borderWidth: 1,
    },
    addText: {
        color: '#fff',
        fontSize: 15
    },
});
