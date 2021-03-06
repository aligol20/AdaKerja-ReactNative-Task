/**
 * This page gets username from user
 */
import React, {useState} from 'react';
import {
  KeyboardAvoidingView,
  StatusBar,
  Text,
  TextInput,
  TouchableHighlight,
  View,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {RouteState} from '../types/Mytypes';
import {common_styles} from '../styles/CommonStyle';
import login_styles from '../styles/LoginStyles';
import Logo from './Logo';

interface Props {
  response({}: {
    decide: RouteState.loading | RouteState.validation;
    user: string;
  }): void;
}

const LoginUser: React.FC<Props> = ({response}) => {
  const [user, setUser] = useState<string>('');

  const login = () => {
    response({decide: RouteState.validation, user: user});
  };
  const setUserName = (username: string) => {
    setUser(username.toLocaleLowerCase());
  };

  return (
    <KeyboardAvoidingView style={common_styles.safe_area}>
      <StatusBar barStyle="light-content" backgroundColor="#4F68C4" />
      <LinearGradient
        start={{x: 0, y: 0}}
        end={{x: 0, y: 1}}
        colors={['#4F68C4', '#0C2682']}
        style={login_styles.gradient}>
        <View style={login_styles.login_body}>
          <Logo type={'user'} />
          <View style={common_styles.package}>
            <TextInput
              style={login_styles.phone_input}
              clearButtonMode={'while-editing'}
              placeholder={'username'}
              placeholderTextColor={'rgba(255,255,255,0.4)'}
              onSubmitEditing={login}
              onChangeText={setUserName}
            />
            <TouchableHighlight
              underlayColor={'transparent'}
              style={login_styles.login_button}
              onPress={login}>
              <Text style={login_styles.login_button_text}>{'Next'}</Text>
            </TouchableHighlight>
          </View>
        </View>
      </LinearGradient>
    </KeyboardAvoidingView>
  );
};

export default LoginUser;
