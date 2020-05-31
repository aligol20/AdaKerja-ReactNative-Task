/**
 * In this page we check AsyncStorage for userInfo
 */
import AsyncStorage from '@react-native-community/async-storage';
import LottieView from 'lottie-react-native';
import React from 'react';
import {Dimensions, View} from 'react-native';
import {RouteState} from '../types/Mytypes';

const width = Dimensions.get('screen').width;
interface Props {
  response(decide: RouteState): void;
}

/**
 *
 * @param response response - callBack for chosen route
 *
 */
const LoadingScreen: React.FC<Props> = ({response}) => {
  /**
   * Loader first check AsyncStorage
   * if there isn't any userInfo we call response('signIn') for going UserInput route
   */
  const Loader = () => {
    const getToken = async () => {
      const token = await AsyncStorage.getItem('userInfo');

      if (!token) {
        response(RouteState.signIn);
      } else {
        response(RouteState.logged);
      }
      return token;
    };
    /**
     * getToken function is just for checking AsyncStorage
     */
    getToken();

    return <></>;
  };

  return (
    <View style={{alignItems: 'center', justifyContent: 'center', flex: 1}}>
      {Loader()}
      <LottieView
        style={{marginTop: 3, width: 0.15 * width, height: 0.15 * width}}
        source={require('../lottie/loading__.json')}
        autoPlay
        loop={true}
      />
    </View>
  );
};

export default LoadingScreen;
