import React from "react";
import {View, Text, TouchableOpacity, Image} from "react-native";
import styles from "./BottomSwitchStyle";

//import  img1 from '../assets/face_agent.png'

export class BottomSwitch extends React.PureComponent {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <View style={styles.bottomView}>
                <View style={styles.itemContainer}>
                    <TouchableOpacity
                        onPress={this.props.callButton}
                        style={styles.itemView}>
                        <Image
                            style={styles.unselectedIconStyle}
                            source={require("../assets/chat_1.png")}
                        />
                        <Text style={styles.labelStyle}>{'Feed'}</Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        onPress={this.props.homeButton}
                        style={styles.itemView}>
                        <Image
                            style={styles.unselectedIconStyle}
                            source={require("../assets/compass.png")}
                        />
                        <Text style={styles.labelStyle}>{'Discover'}</Text>

                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={this.props.locationButton}
                        style={styles.itemView}>

                        <Image
                            style={styles.selectedIconStyle}
                            source={require("../assets/chat_1.png")}
                        />

                        <Text style={styles.selectedLabelStyle}>{'Chat'}</Text>

                    </TouchableOpacity>

                </View>
            </View>
        );
    }
}

export default BottomSwitch;
