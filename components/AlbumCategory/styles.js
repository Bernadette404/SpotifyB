import { StyleSheet } from "react-native";


const styles = StyleSheet.create({
    container:{ 
        flex:1,
    },
    songContainer:{
        flexDirection:'row',
        backgroundColor: '#121212',
        paddingTop:17,
    },
    number:{
        color: 'white',
        marginHorizontal: 10,
        top:15
        
    },
    image:{
        width: 60,
        height:60,
        marginHorizontal: 10
    },
    text:{
        fontSize: 15,
        fontFamily: 'CircularStd-Black',
    },
    songTitle:{
        color: 'white',
        marginLeft:5,
        fontSize:16,
        top: 1,
        fontFamily: 'CircularSpotifyText-Light',
    },
    songStreams:{
        color: 'lightgray',
        marginLeft:5,
        fontSize: 13,
        top:10,
        fontFamily: 'CircularSpotifyText-Light',
    },
    ellipsis:{
        color: 'lightgray',
        position:'absolute',
        right:20,
        top: 25
    },
})

export default styles;