/**
 * Ui styles can be found here
 * except login pages
 */
import {StyleSheet, Dimensions} from 'react-native';

const height = Dimensions.get('screen').height;
export const image_style = StyleSheet.create({
  user_image: {
    width: 40,
    height: 40,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: 'white',
  },
  user_image_large: {
    width: 0.1 * height,
    height: 0.1 * height,
    borderRadius: 0.05 * height,
    borderWidth: 1,
    borderColor: 'white',
    position: 'absolute',
    bottom: height * 0.18,
  },
  modal: {justifyContent: 'center', alignItems: 'center'},
  user_info: {
    top: 0.05 * height,
    flexDirection: 'column',
    width: '100%',
    alignItems: 'center',
  },
});
export const list_item = StyleSheet.create({
  bot: {
    width: 40,
    height: 40,
    borderRadius: 20,
    position: 'absolute',
    zIndex: -1,
    marginLeft: 13,
  },
  user_image: {
    width: 40,
    height: 40,
  },
  container: {
    flexDirection: 'row',
    flex: 1,
    backgroundColor: 'white',
    height: '100%',
    marginLeft: 7,
    marginRight: 7,
    marginBottom: 3,
    borderRadius: 7,
  },
  user_name: {width: '100%', color: '#999999'},
  image_container: {
    width: '25%',
    flexDirection: 'column',
    marginTop: 7,
    marginLeft: 7,
  },
  message_button: {
    marginLeft: 7,
    width: '70%',
    height: '100%',

    alignItems: 'flex-start',
    justifyContent: 'center',
  },
  modal: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  modal_container: {backgroundColor: 'white', borderRadius: 13, width: '100%'},
  message_container: {
    flexDirection: 'column',
    margin: 13,
    justifyContent: 'center',
  },
  split: {
    width: '100%',
    height: 0.5,
    marginTop: 7,
    backgroundColor: '#999999',
  },
});
export const commit_list = StyleSheet.create({
  title: {
    color: '#4F68C4',
    backgroundColor: 'white',
    borderTopLeftRadius: 7,
    borderTopRightRadius: 7,
    marginRight: 7,
    marginLeft: 7,
    marginTop: 3,
    padding: 5,
    marginBottom: -7,
  },
});
export const input_repo = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    backgroundColor: '#728DF1',
  },
});