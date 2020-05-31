/**
 * This page manages pages for routeing.
 */

import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import {Text, TouchableHighlight} from 'react-native';
import LogOutAlert from '../functions/LogOutAlert';
import CommitesList from '../ui/CommitsList';
import InputRepo from '../ui/InputRepo';

const Stack = createStackNavigator();
/**
 * HomeChildren contains 2 screens:
 * 1- InputRepo:User inputs his favorite repository and see the result
 * 2- CommitesList:list of commits for every repo can be found here

 * initial page that shows first is : InputRepo
 */
export const HomeChildren = () => {
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
              onPress={LogOutAlert}>
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
              onPress={LogOutAlert}>
              <Text style={{color: 'white', margin: 13}}>{'LogOut'}</Text>
            </TouchableHighlight>
          ),
        }}
        initialParams={{repo: 'repo', owner: 'owner'}}
      />
    </Stack.Navigator>
  );
};
