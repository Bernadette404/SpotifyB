import React from "react";
import { Text, View, Image, Touchable, Pressable, StyleSheet } from "react-native";
import AlbumBody from "../components/AlbumBody";
import AlbumHeader from '../components/AlbumHeader';
import AlbumCategory from '../components/AlbumCategory';

export default function IkhayaScreen ({ navigation }) {

    const onPressHandler = () => {
        navigation.navigate('Screen_B');
    }

    return (
        <View style={{flex: 1}}>
            <AlbumHeader></AlbumHeader>
            <AlbumBody></AlbumBody>
            <AlbumCategory></AlbumCategory>
        </View>
    )
}

const styles = StyleSheet.create({
    body: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {
        fontSize: 40,
        fontWeight: 'bold',
        margin: 10,
    }
})
