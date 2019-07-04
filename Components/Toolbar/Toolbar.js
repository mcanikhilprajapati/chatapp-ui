import React from "react";
import {View, Text, TouchableOpacity, Image} from "react-native";
import styles from "./ToolbarStyle";

//import  img1 from '../assets/face_agent.png'

export class Toolbar extends React.PureComponent {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <View style={{padding:15,flex: 1,margin:20}}>
            <View style={styles.container}>
                <Image source={require("../assets/compass.png")}/>
                <Text style={{color:'#333333',fontWeight: 'bold'}}>{this.props.title}</Text>
                <Image source={require("../assets/compass.png")}/>

            </View>
            </View>
        );
    }
}

export default Toolbar;
