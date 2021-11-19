import { StyleSheet, Platform } from "react-native";

export const Styles = StyleSheet.create({
    container: {
        ...Platform.select({
            ios: {
                backgroundColor: '#f5f5dc',
                width: '100%',
                height: '100%'
            },
            android: {
                backgroundColor: '#f5f5dc',
                width: '100%',
                height: '100%'
            },
            default: {
                backgroundColor:'#f5f5dc',
                width: '100%',
                height: '125%'
            }
        })
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
    }
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
    /* removed due to refactoring towards Pressable */
    buttonSize: {
        flexDirection: 'column',
        justifyContent: 'center',
        width: '40%'
    }
})
