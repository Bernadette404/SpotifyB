import React from 'react';
import IkhayaScreen from './screens/IkhayaScreen';
import SeshaScreen from './screens/SeshaScreen';
import UmtapoScreen from './screens/UmtapoScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
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
                 tabBarStyle: { position: 'absolute', backgroundColor:'#282828', fontFamily: 'CircularStd-Black',},
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


