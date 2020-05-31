/**
 * A function for remove 'userInfo' item from AsyncStorage and restart the App
 */
import AsyncStorage from '@react-native-community/async-storage';
import RNRestart from 'react-native-restart';

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

export default LogOut;
