import React, {Component} from 'react';
import {FlatList, Image, ScrollView, StyleSheet, Text, View, TouchableOpacity, AppRegistry} from 'react-native';
import BottomTab from './Components/BottomTabs'
import Toolbar from './Components/Toolbar'
import Searchbar from './Components/Searchbar'
import ChatItemView from './ChatItemView'


export default class ChatScreen extends Component {

    componentWillMount() {

        //Check for login status and switch screen accordingly

        setTimeout(() => {
            // const resetAction = StackActions.reset({
            //     index: 0,
            //     actions: [NavigationActions.navigate({routeName: 'HomeScreen'})],
            // });
            //this.props.navigation.dispatch(resetAction);

        }, 3000);

    }

    render() {
        return (
            <View style={styles.container}>

                <Image source={require('./assets/rectangle_338.png')}
                       style={{
                           position: 'absolute',
                           left: -5,
                           top: 0,
                           width: 150,
                           height: 150,
                           resizeMode: 'contain'
                       }}/>
                <Toolbar title={"Chat"}/>
                <ScrollView style={{marginBottom: 100}}>
                    <View>
                        <Searchbar/>
                        <View style={{padding: 10}}>
                            <View style={{flexDirection: 'row', flex: 1, alignItems: 'center'}}>
                                <Text style={{padding: 10, fontWeight: 'bold'}}>{'Favourites (2/3)'}</Text>

                                <TouchableOpacity style={{flex: 1}}>
                                    <Image source={require('./assets/controls.png')}
                                           style={{alignSelf: 'flex-end', margin: 10}}
                                    />
                                </TouchableOpacity>

                            </View>

                            <FlatList

                                data={[{name: 'JLo', msg: 'Hey, how’s it going?'}, {name: 'Mike', msg: 'Hey'}, {
                                    name: 'Jordon',
                                    msg: 'Hey, how’s it going?'
                                },]}
                                renderItem={({item}) =>
                                    <ChatItemView item={item}/>
                                }
                            />
                        </View>

                        <View style={{padding: 10}}>
                            <View style={{borderColor: '#d0d0d0', borderTopWidth: 1}}/>
                            <View style={{flexDirection: 'row', flex: 1, alignItems: 'center', padding: 5}}>
                                <Text style={{padding: 5, fontWeight: 'bold'}}>{'Archived chats (10)'}</Text>

                                <TouchableOpacity style={{flex: 1}}>
                                    <Image source={require('./assets/chevron_right.png')}
                                           style={{alignSelf: 'flex-end', margin: 10}}
                                    />
                                </TouchableOpacity>

                            </View>
                            <View style={{borderColor: '#d0d0d0', borderTopWidth: 1, marginBottom: 20}}/>
                            <FlatList

                                data={[{name: 'JLo', msg: 'Hey, how’s it going?'}, {name: 'Mike', msg: 'Hey'}, {
                                    name: 'Jordon',
                                    msg: 'Hey, how’s it going?'
                                },]}
                                renderItem={({item}) =>
                                    <ChatItemView item={item}/>
                                }
                            />
                        </View>
                    </View>
                </ScrollView>
                <BottomTab/>
            </View>
        );
    }
}

AppRegistry.registerComponent('ChatScreen', function () {
    return ChatScreen;
});


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff'
    },
});
