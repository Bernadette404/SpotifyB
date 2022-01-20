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
        fontSize: 15
    },
    songTitle:{
        color: 'white',
        marginLeft:5,
        fontSize:16,
        top: 1
    },
    songStreams:{
        color: 'white',
        marginLeft:5,
        fontSize: 13,
        top:10
    },
    ellipsis:{
        color: 'white',
        position:'absolute',
        right:12,
        top: 25
    },
})

export default styles;