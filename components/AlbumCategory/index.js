import React from "react";
import { Text, View, Image, FlatList, StyleSheet} from 'react-native';
import styles from "./styles";

const AlbumCategory = () => {

    const songs= [
        {
        id:'1',
        imageUri:'https://lite-images-i.scdn.co/image/ab67616d0000b273afe2c354496abc63e4917abb',
        title:'Im fine - IMANU Remix',
        listens:'823,428',
    },
    {
        id:'2',
        imageUri:'https://lite-images-i.scdn.co/image/ab67616d0000b27359d64a6a3a250f6826b59dc9',
        title:'Im fine',
        listens:'1,045,267',
    },
    {
        id:'3',
        imageUri:'https://www.socanmagazine.ca/wp-content/uploads/2018/05/HighKlassified_ByVisuallyTasteful_Banner.jpg',
        title:'Ns Bounce',
        listens:'745,267',
    },
    {
        id:'4',
        imageUri:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjEcJ-CyoPIUftQeJ-yM_TxwVxdYrsIvSImQ&usqp=CAU',
        title:'3 Words',
        listens:'954,267',
    }]

    return (
        <View style={styles.container}>
            <FlatList
                data={songs}
                renderItem={({ item }) => (
                    <Item item={ item } />
                )}
                keyExtractor={( item ) => item.id}
            />
        </View>
    )

}

function Item( props ){
    return(
        <View style={styles.songContainer}>
            <Text style={styles.number}> {props.item.id}</Text>
            <Image style={styles.image} source={require ("../../assets/album_cover.png")}/>

             <View style={styles.text}> 
                 <Text style={styles.songTitle}> {props.item.title} </Text>
                 <Text style={styles.songStreams}> {props.item.listens}</Text>
             </View>

             <Text style={styles.ellipsis}> •••</Text>
        </View>
    )
}

export default AlbumCategory;