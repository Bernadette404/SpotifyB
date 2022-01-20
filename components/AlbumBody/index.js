import React from "react";
import { Text, Image, View, TouchableOpacity} from "react-native";
import styles from "./styles";
import LinearGradient from 'react-native-linear-gradient';
import FontAwesome5Icon from 'react-native-vector-icons/FontAwesome5';
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import Ionicons from "react-native-vector-icons/Ionicons";

const AlbumBody = () => {
    return (
        <View style={styles.container}>
            <LinearGradient 
                start={{x: 0.0, y: 0.25}} end={{x: 0.5, y: 1.0}}
                locations={[0,0.5,0.6]}
                colors={['#272727', '#161616', '#121212']} 
                style={styles.linearGradient}> 
                
                <View style={styles.textStyle}>
                    <Text style={styles.creator}> Abalaleli benyangu abangu</Text>
                    <Text style={styles.likes}>-166,307</Text>
                </View>

                <View style={styles.secondView}>
                    <View style={styles.obalaContainer}>
                        <Text style={styles.obaTextStyle}> OBALANDELAYO</Text>
                        <Text style={styles.ellipsiStyle}> ••• </Text>
                    </View>

                    <TouchableOpacity style={styles.touchIcon}> 
                        <FontAwesome5Icon name="play-circle" size={55} style={{width:60, height:60, bottom:35,}} color={'#3DBA54'}> </FontAwesome5Icon>  
                    </TouchableOpacity>

                    <Ionicons name="shuffle" size={22} style={{top:5, left:105}} color={'#EEFBF8'}> </Ionicons>
                </View>

                <View style={styles.songstyle}>
                    <Image style={styles.songImageStyle} source={require('../../assets/song_cover.png')} />
                    
                    <View style={styles.songContainer}>
                        <Text style={styles.songTitle}> Izingoma Ezithandiwe</Text>
                        <Text style={styles.songName}>5 Izingoma • High Klassified</Text>
                        <TouchableOpacity style={styles.touchButton}>
                            <MaterialIcons name="navigate-next" size={30} style={{bottom:10 , left:130, }} color={'#606060'}/>
                        </TouchableOpacity>
                        <Text style={styles.okudumile}> Okudumile </Text>
                    </View>
                    
                </View>
                
            </LinearGradient>
 
        </View>
        
    )
}

export default AlbumBody;