import React from "react";
import {View, Text, TouchableOpacity, Image} from "react-native";
import styles from "./SearchbarStyle";

//import  img1 from '../assets/face_agent.png'

export class Searchbar extends React.PureComponent {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <View style={styles.container}>
                <Text>for search</Text>
            </View>
        );
    }
}

export default Searchbar;
