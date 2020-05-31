/**
 * An Alert for final logOut check
 */
import {Alert} from 'react-native';
import LogOut from './LogOut';

const LogOutAlert = () => {
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
  );
};
export default LogOutAlert;
