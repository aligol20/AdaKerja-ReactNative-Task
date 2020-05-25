/**
 * This page gets password from user
 */
import LottieView from 'lottie-react-native';
import React, {useEffect, useState} from 'react';
import {
  Alert,
  Dimensions,
  KeyboardAvoidingView,
  StatusBar,
  Text,
  TextInput,
  TouchableHighlight,
  View,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {RouteState} from '../Mytypes';
import login_styles from './LoginStyles';
import Logo from './Logo';
import SavingUserInfo from './SavingUserInfo';

interface Props {
  resend?: any;
  loginInput: {user: string};
  response(
    decide:
      | RouteState.loading
      | RouteState.logged
      | RouteState.signIn
      | RouteState.validation,
  ): void;
}
const width = Dimensions.get('screen').width;
const PasswordPage: React.FC<Props> = ({resend, response, loginInput}) => {
  const [reSend, setReSend] = useState(false);
  const [loading, setLoading] = useState<boolean>(false);
  const [password, setPassword] = useState<string>('');
  const [user, setUser] = useState<string>('');

  useEffect(() => {
    setUser(loginInput.user);
  }, []);
  const octokit = require('@octokit/rest')({
    timeout: 0, // 0 means no request timeout
    headers: {
      accept: 'application/vnd.github.v3+json',
      'user-agent': 'octokit/rest.js v1.2.3', // v1.2.3 will be current version
    },

    // custom GitHub Enterprise URL
    baseUrl: 'https://api.github.com',

    // Node only: advanced request options can be passed as http(s) agent
    agent: undefined,
  });

  async function paginate(method: any) {
    console.log('user', loginInput.user);
    console.log('password', password);

    octokit.authenticate({
      type: 'basic',
      username: user,
      password: password,
    });
    let response = await method({per_page: 100});
    let {data} = response;
    while (octokit.hasNextPage(response)) {
      response = await octokit.getNextPage(response);
      data = data.concat(response.data);
    }
    return data;
  }

  const loginResponse = () => {
    setLoading(true);

    paginate(octokit.repos.getAll)
      .then((data) => {
        if (data) {
          setLoading(false);
          SavingUserInfo(user, password);
          response(RouteState.logged);
        }
      })
      .catch((err) => {
        Alert.alert(
          'Error',
          'Your password or username is wrong',
          [{text: 'ok', onPress: () => response(RouteState.signIn)}],
          {cancelable: false},
        );
      });
  };

  return (
    <KeyboardAvoidingView style={login_styles.safe_area}>
      <StatusBar barStyle="light-content" backgroundColor="#4F68C4" />
      <LinearGradient
        start={{x: 0, y: 0}}
        end={{x: 0, y: 1}}
        colors={['#4F68C4', '#0C2682']}
        style={{flex: 1}}>
        <View style={[login_styles.login_body]}>
          <Logo type={'password'} />
          <View style={login_styles.package}>
            <TextInput
              style={login_styles.phone_input}
              placeholder={'password'}
              placeholderTextColor={'rgba(255,255,255,0.4)'}
              onChangeText={(code) => setPassword(code)}
              onSubmitEditing={loginResponse}
            />

            {loading ? (
              <View
                style={{
                  alignItems: 'center',
                  justifyContent: 'center',
                  flex: 1,
                }}>
                <LottieView
                  style={{
                    marginTop: 3,
                    width: 0.15 * width,
                    height: 0.15 * width,
                  }}
                  source={require('../lottie/loading__.json')}
                  autoPlay
                  loop={true}
                />
              </View>
            ) : (
              <TouchableHighlight
                underlayColor={'transparent'}
                style={login_styles.button}
                disabled={false}
                onPress={loginResponse}>
                <Text style={login_styles.button_text}>{'Login'}</Text>
              </TouchableHighlight>
            )}
            <TouchableHighlight
              underlayColor={'transparent'}
              onPress={() => response(RouteState.signIn)}>
              <Text style={login_styles.link_text}>{'Edit User name'}</Text>
            </TouchableHighlight>
          </View>
        </View>
      </LinearGradient>
    </KeyboardAvoidingView>
  );
};

export default PasswordPage;
