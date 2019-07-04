import {StyleSheet} from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff'
    }, leftImage: {
        position: 'absolute',
        left: -5,
        top: 0,
        width: 120,
        height: 120,
        resizeMode: 'contain',
        tintColor: '#ffac81'
    },

    footer: {
        flexDirection: 'row',
        height: 60,
        backgroundColor: '#eeeeee',
        paddingHorizontal: 10,
        padding: 5,
    },
    btnSend: {
        backgroundColor: "#00BFFF",
        width: 40,
        height: 40,
        borderRadius: 360,
        alignItems: 'center',
        justifyContent: 'center',
    },
    iconSend: {
        width: 30,
        height: 30,
        alignSelf: 'center',
    },
    inputContainer: {
        borderBottomColor: '#F5FCFF',
        backgroundColor: '#FFFFFF',
        borderRadius: 30,
        borderBottomWidth: 1,
        height: 40,
        flexDirection: 'row',
        alignItems: 'center',
        flex: 1,
        marginRight: 10,
    },
    inputs: {
        height: 40,
        marginLeft: 16,
        borderBottomColor: '#FFFFFF',
        flex: 1,
    },
    balloon: {
        maxWidth: 250,
        padding: 5,
        borderRadius: 20,
    },
    itemIn: {
        alignSelf: 'flex-start'
    },
    itemOut: {
        alignSelf: 'flex-end',
    },
    time: {
        margin: 5,
        fontSize: 12,
        color: "#c8c8c8",
    },
    item: {
        padding: 5

    }, item2: {
        padding: 5
    }, userImage: {
        backgroundColor: '#000',
        height: 40,
        width: 40,
        borderRadius: 20,
        marginRight: 10,
        marginTop: 5
    }, msgContainer: {
        borderColor: '#d0d0d0',
        borderWidth: 0.5,
        borderRadius: 5,
        shadowColor: '#d0d0d0',
        shadowOffset: {
            width: 1,
            height: 3
        },
        shadowRadius: 3,
        shadowOpacity: 1,
        elevation: 1,
        padding: 10,
        margin: 5
    }
});

export default styles;
