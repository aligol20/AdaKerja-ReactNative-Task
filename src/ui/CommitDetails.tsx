/**
 * A modal for see the cimmit details
 */
import React, {useState} from 'react';
import Modal from 'react-native-modal';
import {View, Text} from 'react-native';
import {commit_details} from '../styles/Styles';

interface Props {
  message: string;
}

const CommitDetails: React.FC<Props> = ({message}) => {
  const [detailsModal, visibleDetailsModal] = useState<boolean>(false);

  return (
    <Modal
      swipeDirection={'down'}
      onSwipeComplete={() => visibleDetailsModal(false)}
      isVisible={detailsModal}>
      <View style={commit_details.container}>
        <Text>I am the modal content!</Text>
      </View>
    </Modal>
  );
};

export default CommitDetails;
