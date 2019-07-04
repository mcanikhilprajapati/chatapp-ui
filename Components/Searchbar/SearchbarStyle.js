import {StyleSheet} from "react-native";

const styles = StyleSheet.create({
    container: {
        flex:1,
        margin:15,
        backgroundColor: '#fff',
        shadowColor: '#e1e1e1',
        borderRadius: 10,
        zIndex: 3,
        padding: 10,
        elevation: 2,
        shadowOffset: {
            width: 0,
            height: 1
        },
        shadowRadius: 8,
        shadowOpacity: 1.0
    },
    itemContainer: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    itemView: {
        alignSelf: 'center',
        marginLeft: 25, marginRight: 25,
        backgroundColor: 'white',
    },
    selectedIconStyle: {
        height: 30,
        width: 30,
        resizeMode: 'contain',
        margin: 5,
        tintColor: '#00B4FD',
        alignSelf: 'center'

    },
    unselectedIconStyle: {
        height: 30,
        width: 30,
        margin: 5,
        resizeMode: 'contain',
        alignSelf: 'center'

    },
    viewWithBorder: {
        borderRadius: 35,
        borderWidth: 1,
        borderColor: '#00A0E1'
    },
    labelStyle: {
        fontSize: 14,
        color: '#333333',
        alignSelf: 'center'
    }, selectedLabelStyle: {
        fontSize: 14,
        fontWeight: 'bold',
        color: '#333333',
        alignSelf: 'center'
    }
});

export default styles;
