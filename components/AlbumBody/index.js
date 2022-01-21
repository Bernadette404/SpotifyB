import React from "react";
import { Text, Image, View, TouchableOpacity} from "react-native";
import styles from "./styles";
import LinearGradient from 'react-native-linear-gradient';
import FontAwesome5Icon from 'react-native-vector-icons/FontAwesome5';
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import Ionicons from "react-native-vector-icons/Ionicons";

const AlbumBody = () => {
    return (
        <View style={styles.container}>
            <LinearGradient 
                start={{x: 0.0, y: 0.0}} end={{x: 0.0, y: 1.0}}
                locations={[0,0.5,0.6]}
                colors={['#272727', '#161616', '#121212']} 
                style={styles.linearGradient}> 
                
                <View style={styles.textStyle}>
                    <Text style={styles.creator}> Abalaleli benyangu abangu-166,307</Text>

                    <View style={styles.obalaContainer}>
                        <Text style={styles.obaTextStyle}> OBALANDELAYO</Text>
                        <Text style={styles.ellipsiStyle}> ••• </Text>
                    </View>
                </View>

                <View style={styles.secondView}>
                    <View style={styles.playIcon}>
                        <FontAwesome5Icon name="play" size={30} style={{ marginTop:3, marginLeft: 15}} color={'white'}> </FontAwesome5Icon> 
                        <View style={styles.shuffle} >
                            <Ionicons name="shuffle" size={18} style={{marginTop:2, marginLeft:1}} color={'#3DBA54'}> </Ionicons>
                        </View>
                    </View>
                </View>

                </LinearGradient>

                <View style={styles.songstyle}>
                    <Image style={styles.songImageStyle} source={require('../../assets/song_cover.png')} />
                    
                    <View style={styles.songContainer}>
                        <Text style={styles.songTitle}> Izingoma Ezithandiwe</Text>
                        <Text style={styles.songName}>5 Izingoma • High Klassified</Text>
                        
                        <Text style={styles.okudumile}> Okudumile </Text>
                    </View>
                    
                    <View style={styles.touchButton}>
                        <MaterialIcons name="navigate-next" size={35} style={{}} color={'#606060'}/>
                    </View>

                </View>
 
        </View>
        
    )
}

export default AlbumBody;