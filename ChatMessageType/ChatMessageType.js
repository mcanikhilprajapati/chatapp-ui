import React from "react";
import {Text, View, Image, TouchableOpacity} from "react-native";
import styles from "./ChatItemViewStyle";


//import  img1 from '../assets/face_agent.png'

export class ChatItemView extends React.PureComponent {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <TouchableOpacity
                onPress={this.props.onItemClick}
                style={styles.container}>

                <Image
                    style={{height: 60, width: 60, borderRadius: 30, margin: 5}}
                    source={require('../assets/bryan_apen_470048_unsplash.png')}/>

                <View style={{alignSelf: 'center', marginLeft: 10, width: "45%"}}>
                    <View style={{flexDirection: 'row'}}>

                        <Text style={{color: '#000', fontSize: 16}}>{this.props.item.name}</Text>
                        <Image style={{height: 15, width: 15, alignSelf: 'center', marginLeft: 10}}
                               source={require('../assets/favourites_filled_star_symbol.png')}/>


                    </View>
                    <Text numberOfLines={1} style={{color: '#8f8f8f'}}>{this.props.item.msg}</Text>
                </View>
                <View style={{flex: 1}}>
                    <View style={{alignItems: 'flex-end'}}>
                        <TouchableOpacity
                            onPress={() => {
                                alert("Clicked")
                            }}>
                            <Image source={require('../assets/dots-horizontal.png')}
                                   style={{tintColor: '#3bb7ff', height: 30, resizeMode: 'contain'}}/>
                        </TouchableOpacity>

                        <View
                            style={{
                                margin: 5,
                                backgroundColor: '#ffac81',
                                paddingLeft: 15,
                                paddingRight: 15,
                                paddingBottom: 5,
                                paddingTop: 5,
                                borderRadius: 25,
                                opacity: 0.5
                            }}

                        ><Text>{'Reply'}</Text>
                        </View>
                    </View>
                </View>

            </TouchableOpacity>
        );
    }
}

export default ChatItemView;
