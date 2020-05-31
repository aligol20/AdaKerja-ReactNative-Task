/**
 * A function for open the email app and link the email address to it
 */
import {Linking} from 'react-native';

/**
 *
 * @param email - user email address
 */
const LinkToEmailApp = (email: string) => {
  Linking.openURL('mailto:' + email);
};

export default LinkToEmailApp;
