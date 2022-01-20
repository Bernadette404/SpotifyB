import React from 'react';
import { Text, View, Image, Stylesheet} from 'react-native';
import AlbumBody from './components/AlbumBody';
import AlbumHeader from './components/AlbumHeader';
import AlbumCategory from './components/AlbumCategory';
import IkhayaScreen from './screens/IkhayaScreen';
import SeshaScreen from './screens/SeshaScreen';
import UmtapoScreen from './screens/UmtapoScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { forceTouchGestureHandlerProps } from 'react-native-gesture-handler/lib/typescript/handlers/ForceTouchGestureHandler';
import Icon from 'react-native-vector-icons/FontAwesome5';
import FontAwesome5Icon from 'react-native-vector-icons/FontAwesome5';


const Tab = createBottomTabNavigator();

export default function App() {
  return(
      <NavigationContainer>
            <Tab.Navigator
               screenOptions={({ route }) => ({
                 tabBarActiveTintColor:'#B9B9B9',
                 tabBarInactiveTintColor: '#7B7B7B',
                 headerShown: false,
                 tabBarStyle: { position: 'absolute', backgroundColor:'#282828' },
                 tabBarIcon: ({forceTouchGestureHandlerProps, size, color}) => {
                    let iconName;
                    if(route.name === 'Ikhaya'){
                      iconName = 'home';
                      size = 22
                    } else if(route.name === 'Sesha'){
                      iconName= 'search';
                      size = 22
                    }
                    else if(route.name === 'Umtapo'){
                      iconName = 'book-open';
                      size = 22
                    }
                    return(
                      <FontAwesome5Icon
                          name={iconName}
                          size={size}
                          color={color}
                      />
                    )
                 },
               })}
            >
      
            <Tab.Screen 
            name = "Ikhaya"
            component={IkhayaScreen} 
            />

            <Tab.Screen
            name = "Sesha"
            component={SeshaScreen}
            />

            <Tab.Screen 
            name = "Umtapo"
            component={UmtapoScreen} 
            />
            </Tab.Navigator>
          </NavigationContainer>
    
  )
}


