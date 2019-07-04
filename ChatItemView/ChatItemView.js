import React from "react";
import {View, Text, TouchableOpacity, Image, TextInput} from "react-native";
import styles from "./SearchbarStyle";


//import  img1 from '../assets/face_agent.png'

export class Searchbar extends React.PureComponent {
    constructor(props) {
        super(props);
        this.state = {text: ''};
    }

    render() {
        return (
            <View style={styles.container}>
                <TextInput
                    placeholder={"Search by name"}
                    value={this.props.value ? this.props.value : null}
                    onChangeText={text => {
                        this.setState(({text: text}));
                    }}
                    style={{width: '85%',paddingLeft:15}}/>

                <TouchableOpacity
                    onPress={() => this.props.onSearch ? this.props.onSearch(this.state.text) : null}
                    style={{position: 'absolute', right: 10, alignSelf: 'center'}}>

                    <Image source={require('../../assets/magnify.png')}
                           style={{height: 30, width: 30, tintColor: '#6eabff'}}/>
                </TouchableOpacity>
            </View>
        );
    }
}

export default Searchbar;
