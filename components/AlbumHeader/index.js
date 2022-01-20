import React from "react";
import { Text, View, Image, TouchableOpacity } from "react-native";
import styles from "./styles";
import Ionicons from 'react-native-vector-icons/Ionicons';

const AlbumHeader =() =>{
    return(
        <View style={styles.headerContainer}>  
            <Image style={styles.image} source={require('../../assets/highklassified.jpg')}/>

            <View style={styles.textStyle}>
                <Text style={styles.highKlas}> High Klassified</Text>
                <Ionicons name="ios-chevron-back" size={30} style={styles.icon} color={'#BABABA'}/>
            </View>
            
        </View>
    )
}

export default AlbumHeader;