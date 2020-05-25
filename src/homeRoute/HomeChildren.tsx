/**
 * This page manages pages for routeing.
 */

import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';

import InputRepo from '../ui/InputRepo';
import CommitesList from '../ui/CommitsList';
import {TouchableHighlight, Text, Alert} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import RNRestart from 'react-native-restart';

const Stack = createStackNavigator();
/**
 * HomeChildren contains 2 screens:
 * 1- InputRepo:User inputs his favorite repository and see the result
 * 2- CommitesList:list of commits for every repo can be found here

 * initial page that shows first is : InputRepo
 */
export const HomeChildren = () => {
  const LogOut = async () => {
    try {
      await AsyncStorage.removeItem('userInfo');
    } catch (e) {
      // remove error
    }

    console.log('Done.');

    /**
     * more details about RnRestart available at @link https://github.com/avishayil/react-native-restart#readme
     */
    RNRestart.Restart();
  };

  return (
    <Stack.Navigator initialRouteName={'InputRepo'}>
      <Stack.Screen
        name="InputRepo"
        component={InputRepo}
        options={{
          headerStyle: {
            backgroundColor: '#4F68C4',
            elevation: 0, // remove shadow on Android
            shadowOpacity: 0, // remove shadow on iOS
          },

          headerTitleStyle: {
            color: 'white',
          },
          headerTintColor: 'white',
          title: 'Search repo',
          headerRight: () => (
            <TouchableHighlight
              underlayColor={'transparent'}
              onPress={() =>
                Alert.alert(
                  'LogOut',
                  'Are you sure?',
                  [
                    {
                      text: 'No',
                      onPress: () => console.log('Cancel Pressed'),
                      style: 'cancel',
                    },
                    {text: 'Yes', onPress: () => LogOut()},
                  ],
                  {cancelable: false},
                )
              }>
              <Text style={{color: 'white', margin: 13}}>{'LogOut'}</Text>
            </TouchableHighlight>
          ),
        }}
      />
      <Stack.Screen
        name="CommitesList"
        component={CommitesList}
        options={{
          headerStyle: {
            backgroundColor: '#4F68C4',
            elevation: 0, // remove shadow on Android
            shadowOpacity: 0, // remove shadow on iOS
          },

          headerTitleStyle: {
            color: 'white',
          },
          headerTintColor: 'white',
          title: 'CommitList',
          headerRight: () => (
            <TouchableHighlight
              underlayColor={'transparent'}
              onPress={() =>
                Alert.alert(
                  'LogOut',
                  'Are you sure?',
                  [
                    {
                      text: 'No',
                      onPress: () => console.log('Cancel Pressed'),
                      style: 'cancel',
                    },
                    {text: 'Yes', onPress: () => LogOut()},
                  ],
                  {cancelable: false},
                )
              }>
              <Text style={{color: 'white', margin: 13}}>{'LogOut'}</Text>
            </TouchableHighlight>
          ),
        }}
        initialParams={{repo: 'repo', owner: 'owner'}}
      />
    </Stack.Navigator>
  );
};
