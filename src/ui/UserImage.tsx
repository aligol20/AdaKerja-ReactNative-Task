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
import {image_style} from './Styles';
import Modal from 'react-native-modal';

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
        <View
          style={{
            backgroundColor: 'white',
            alignItems: 'center',
            borderRadius: 13,
            width: '70%',
            height: '25%',
          }}>
          <Image style={image_style.user_image_large} source={{uri: uri}} />
          <View style={image_style.user_info}>
            <View style={{flexDirection: 'column'}}>
              <Text style={{fontSize: 19, color: '#4F68C4'}}>{name}</Text>
            </View>
            <TouchableHighlight
              underlayColor={'transparent'}
              onPress={() => {
                Linking.openURL('mailto:' + email);
              }}
              style={{
                backgroundColor: '#4F68C4',
                borderRadius: 7,
                width: '70%',
                margin: 23,
              }}>
              <View
                style={{
                  flexDirection: 'column',
                  margin: 13,
                  alignItems: 'center',
                }}>
                <Text style={{color: 'white', fontSize: 23}}>
                  {'Send Email'}
                </Text>
              </View>
            </TouchableHighlight>
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default UserImage;
