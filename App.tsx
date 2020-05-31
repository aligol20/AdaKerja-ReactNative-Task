/**
 * ب
 * ی  ز
 *App starts from here
 *Starts from Loading page
 *Our Router is ReactNavigation v5
 */

import {NavigationContainer} from '@react-navigation/native';
import React, {useState} from 'react';
import 'react-native-gesture-handler';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {HomeChildren} from './src/homeRoute/HomeChildren';
import {navigationRef} from './src/functions/RootNavigation';
import Loading from './src/loadingScreen/LoadingScreen';
import LoginUser from './src/loginPages/LoginUser';
import PasswordPage from './src/loginPages/PasswordPage';
import {RouteState} from './src/types/Mytypes';

const App: React.FC = () => {
  console.disableYellowBox = true;

  /**
   * whatToDo is Loading page callback for decide correct route
   */

  const [whatToDo, setWhat] = useState<RouteState>(RouteState.loading);

  /**
   * response const is for login mutation
   * get user from UserInput
   */
  const [response, setResponse] = useState<{user: string}>({
    user: '',
  });

  /**
   * Sets values got from UserInput page
   * @param value - get 3 object from LoginUser page
   * user: username
   * decide: decides to go in PasswordPage or loading page
   */
  const LoginResponse = (value: {
    user: string;
    decide: RouteState.loading | RouteState.validation;
  }) => {
    setWhat(value.decide);
    setResponse({user: value.user});
  };

  return (
    <SafeAreaProvider>
      <NavigationContainer ref={navigationRef}>
        {whatToDo === RouteState.logged ? (
          <HomeChildren />
        ) : whatToDo === RouteState.signIn ? (
          <LoginUser response={(value) => LoginResponse(value)} />
        ) : whatToDo === RouteState.validation ? (
          <PasswordPage loginInput={response} response={setWhat} />
        ) : (
          <Loading response={setWhat} />
        )}
      </NavigationContainer>
    </SafeAreaProvider>
  );
};
export default App;
