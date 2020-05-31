/**
 * Simple component for rendering Logo
 */
import React from 'react';
import {View, Image, Text, Dimensions} from 'react-native';
import login_styles from '../styles/LoginStyles';
import LottieView from 'lottie-react-native';

const width = Dimensions.get('screen').width;

interface Props {
  type: 'password' | 'user';
}
const Logo: React.FC<Props> = ({type}) => {
  return (
    <LottieView
      style={login_styles.lottie}
      source={
        type === 'user'
          ? require('../lottie/user.json')
          : require('../lottie/pass.json')
      }
      autoPlay
      loop={true}
    />
  );
};
export default Logo;
