import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container:{
       backgroundColor: '#121212',
       flex: 1,
    },
    textStyle:{
        color: 'lightgray',
        paddingTop: 45,
        flex: 3
    },
    obalaContainer:{
        flexDirection:'row', 
        marginBottom:10,
    },
    obaTextStyle:{
        bottom:15, 
        color:'lightgray',
        borderWidth:1, 
        borderColor:'lightgray', 
        paddingVertical:7, 
        paddingHorizontal:11, 
        borderRadius: 5, 
        fontSize:12,
        fontWeight:'bold',
        fontFamily: 'CircularStd-Black'
    },
    songImageStyle:{
        width: 45, 
        height:45, 
        marginTop: 0
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
        bottom:30,
        fontFamily: 'CircularSpotifyText-Light'
    },
    likes: {
        color: 'lightgray',
        fontSize: 13,
        bottom:25,
    },
    secondView:{
        flex: 1,
        justifyContent:'center',
        alignItems:'center'
    },
    okudumile:{
        color: 'white',
        fontFamily: 'CircularStd-Black',
        fontSize: 20,
        fontWeight: 'bold',
        flexDirection: 'row',
        justifyContent: 'flex-end',
        right:60,
        marginTop: 25
    },
    touchIcon:{
        left:130
    },
    touchButton:{
        position:"absolute",
        right:0,
        top: 5
    },
    songstyle:{
        margin:10,
        flexDirection:'row',
        flex: 1,
    },
    songContainer:{
        fontFamily: 'CircularStd-Black',
        fontSize:15,
        marginLeft:10,
    },
    songTitle:{
        color: 'white',
        marginTop:0,
        marginBottom:5,
        fontFamily: 'CircularSpotifyText-Light',
        fontSize:16,
        marginLeft:3
    },
    songName:{
        color: 'lightgray',
        fontSize:14,
        fontFamily: 'CircularSpotifyText-Light',
        marginLeft:3,
    },
    linearGradient: {
        flex: 1,
        paddingLeft: 15,
        paddingRight: 15,
        borderRadius: 5,
        flexDirection:'row'
      },
      playIcon:{
          width: 60,
          height: 60,
          justifyContent:'center',
          alignItems:'center',
          backgroundColor:'#3DBA54',
          borderRadius: 30,
          marginTop: 25,
          marginLeft: 20
      },
      shuffle:{
          width:20,
          height:20,
          backgroundColor: 'white',
          position:'absolute',
          bottom:0,
          right:0,
          borderRadius:10
      }
});

export default styles;