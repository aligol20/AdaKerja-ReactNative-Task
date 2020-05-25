/**
 * A modal for see the cimmit details
 */
import React, {useState} from 'react';
import Modal from 'react-native-modal';
import {View, Text} from 'react-native';

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
      <View style={{width: '70%', height: '70%', backgroundColor: 'white'}}>
        <Text>I am the modal content!</Text>
      </View>
    </Modal>
  );
};

export default CommitDetails;
