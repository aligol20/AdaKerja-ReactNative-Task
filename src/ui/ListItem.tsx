/**
 * Commit list item can be found here
 */
import React, {useState} from 'react';
import {
  TouchableOpacity,
  Image,
  TouchableHighlight,
  View,
  Text,
} from 'react-native';
import Modal from 'react-native-modal';
import UserImage from './UserImage';
import {list_item} from '../styles/Styles';
import {ScrollView} from 'react-native-gesture-handler';
interface Props {
  avatar_url: string;
  name: string;
  message: string;
  userImage: string;
  email?: string;
}
const ListItem: React.FC<Props> = ({
  avatar_url,
  name,
  message,
  userImage,
  email,
}) => {
  const [detailsModal, visibleDetailsModal] = useState<boolean>(false);
  const makeModalVisible = () => {
    visibleDetailsModal(true);
  };
  return (
    <View style={list_item.container}>
      <View style={list_item.image_container}>
        <View style={list_item.user_image}>
          <UserImage name={name} email={email} uri={userImage} />
          {avatar_url && (
            <Image style={list_item.bot} source={{uri: avatar_url}} />
          )}
        </View>

        <Text style={list_item.user_name}>{name && name}</Text>
      </View>
      <TouchableHighlight
        underlayColor={'transparent'}
        style={list_item.message_button}
        onPress={makeModalVisible}>
        <Text>{message && message.split('\n\n')[0]}</Text>
      </TouchableHighlight>
      <Modal
        swipeDirection={['down', 'left', 'up', 'right']}
        style={list_item.modal}
        useNativeDriver={true}
        onSwipeComplete={() => visibleDetailsModal(false)}
        isVisible={detailsModal}>
        <View style={list_item.modal_container}>
          <ScrollView>
            {message.split('\n\n').map((x: any) => {
              return (
                <View style={list_item.message_container}>
                  <Text>{x}</Text>
                  <View style={list_item.split} />
                </View>
              );
            })}
          </ScrollView>
        </View>
      </Modal>
    </View>
  );
};

export default ListItem;
