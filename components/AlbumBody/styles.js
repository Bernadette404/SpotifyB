import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container:{
       backgroundColor: '#121212',
       flex: 1,
    },
    textStyle:{
        color: 'lightgray',
        flexDirection:'row',
        paddingTop: 45,
    },
    obalaContainer:{
        flexDirection:'row', 
        paddingTop:8, 
        marginBottom:20
    },
    obaTextStyle:{
        bottom:15, 
        color:'white',
        borderWidth:1, 
        borderColor:'white', 
        paddingVertical:7, 
        paddingHorizontal:11, 
        borderRadius: 5, 
        fontSize:12,
        fontWeight:'bold',
        fontFamily: 'CircularStd'
    },
    songImageStyle:{
        width: 45, 
        height:45, 
        bottom:50
    },
    ellipsiStyle:{
        color: 'white', 
        bottom:10, 
        marginLeft:25, 
        alignItems:'center'
    },
    creator: {
        color: 'lightgray',
        fontSize: 13,
        bottom:25,
        fontFamily: 'CircularStd'
    },
    likes: {
        color: 'lightgray',
        fontSize: 13,
        bottom:25,
    },
    secondView:{
        flexDirection: 'row',
        marginTop:0,
        paddingTop:0
    },
    okudumile:{
        color: 'white',
        fontFamily: 'CircularStd',
        fontSize: 18,
        fontWeight: 'bold',
        flexDirection: 'row',
        justifyContent: 'flex-end',
        top:20,
        right:60
    },
    touchIcon:{
        left:130
    },
    touchButton:{
        position:"absolute",
        right:10,
    },
    songstyle:{
        margin:10,
        flexDirection:'row',
        paddingTop: 30,
    },
    songContainer:{
        bottom:30,
        fontFamily: 'CircularStd',
        fontSize:15,
        marginLeft:10,
    },
    songTitle:{
        color: 'white',
        bottom: 18,
        fontFamily: 'CircularStd',
        fontSize:16,
        marginLeft:3
    },
    songName:{
        color: 'white',
        bottom: 10,
        fontSize:14,
        fontFamily: 'CircularStd',
        marginLeft:3,
    },
    linearGradient: {
        flex: 1,
        paddingLeft: 15,
        paddingRight: 15,
        borderRadius: 5
      },
});

export default styles;