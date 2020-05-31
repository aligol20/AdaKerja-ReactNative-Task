/**
 * Save userToInfo to AsyncStorage
 */
import AsyncStorage from '@react-native-community/async-storage';

/**
 *
 * @param user - username
 * @param pass - password

 */
const SavingUserInfo = (user: string, pass: string) => {
  let done;
  const setInfo = async () => {
    const firstPair = JSON.stringify({user: user, pass: pass});

    console.log(firstPair, 'firstPair');

    try {
      await AsyncStorage.setItem('userInfo', firstPair);
      done = true;
    } catch (e) {
      //save error
    }

    console.log('Done.');
  };

  setInfo();
  return done;
};

export default SavingUserInfo;
