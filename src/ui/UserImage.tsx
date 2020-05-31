/**
 * UserImage and User details in modal
 */
import React, {useState} from 'react';
import {
  TouchableOpacity,
  Image,
  View,
  Text,
  Linking,
  TouchableHighlight,
} from 'react-native';
import {image_style, user_image} from '../styles/Styles';
import Modal from 'react-native-modal';
import LinkToEmailApp from '../functions/LinkToEmailApp';

interface Props {
  uri: string;
  email?: string;
  name?: string;
}
const UserImage: React.FC<Props> = ({uri, name, email}) => {
  const [emailModal, emailModalVisible] = useState<boolean>(false);

  return (
    <View>
      <TouchableOpacity onPress={() => emailModalVisible(true)}>
        {uri && <Image style={image_style.user_image} source={{uri: uri}} />}
      </TouchableOpacity>
      <Modal
        swipeDirection={['down', 'left', 'up', 'right']}
        onSwipeComplete={() => emailModalVisible(false)}
        style={image_style.modal}
        useNativeDriver={true}
        isVisible={emailModal}>
        <View style={user_image.container}>
          <Image style={image_style.user_image_large} source={{uri: uri}} />
          <View style={image_style.user_info}>
            <View style={user_image.name_container}>
              <Text style={user_image.name}>{name}</Text>
            </View>
            <TouchableHighlight
              underlayColor={'transparent'}
              onPress={() => email && LinkToEmailApp(email)}
              style={user_image.email_button}>
              <View style={user_image.button_view}>
                <Text style={user_image.button_text}>{'Send Email'}</Text>
              </View>
            </TouchableHighlight>
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default UserImage;
