import React from "react";
import {Text, View, Image, TouchableOpacity} from "react-native";
import styles from "./ChatMessageTypeStyle";


//import  img1 from '../assets/face_agent.png'

export class ChatMessageType extends React.PureComponent {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        const {item} = this.props
        return (
            <View>
                {item.type === 'in' ?
                    <View style={{flexDirection: 'row'}}>
                        <Image
                            source={require('../assets/bryan_apen_470048_unsplash.png')}
                            style={styles.userImage}/>
                        <View>
                            <View style={styles.msgContainer}>
                                <Text>{item.message}</Text>
                            </View>
                            <Text style={{
                                marginLeft: 10,
                                color: '#9a9a9a',
                                fontSize: 12
                            }}>{item.date}</Text>
                        </View>
                    </View> : < View style={{alignItems: 'flex-end'}}>
                        <View style={[styles.msgContainer, {backgroundColor: '#ffd881'}]}>
                            <Text>{item.message}</Text>
                        </View>
                        <Text style={{
                            marginLeft: 10,
                            color: '#9a9a9a',
                            fontSize: 12
                        }}>{item.status}</Text>
                    </View>
                }
            </View>
        );
    }
}

export default ChatMessageType;
