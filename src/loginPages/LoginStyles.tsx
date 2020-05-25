/**
 * Login styles can be found here
 */
import {StyleSheet, Dimensions} from 'react-native';

const width = Dimensions.get('screen').width;
const login_styles = StyleSheet.create({
  login_body: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  image_container: {
    width: '50%',
    alignItems: 'center',
    flexDirection: 'column',
  },
  phone_input: {
    width: '80%',
    borderColor: 'white',
    borderWidth: 0.7,
    borderRadius: 23,
    color: 'white',
    fontSize: 0.07 * width,
    textAlign: 'center',
  },
  logo_text: {color: 'white'},
  help_text: {
    color: 'white',
    marginTop: 7,
  },
  login_button: {
    borderRadius: 23,
    backgroundColor: 'white',
    width: '20%',
    alignItems: 'center',
    marginTop: 43,
  },
  login_button_text: {
    margin: 13,
    fontSize: 0.05 * width,

    color: '#4F68C4',
  },
  guide_text: {color: 'white'},
  safe_area: {
    flex: 1,
    backgroundColor: '#728DF1',
  },

  package: {
    width: '100%',
    flexDirection: 'column',
    alignItems: 'center',
    height: '40%',
  },
  button: {
    backgroundColor: 'white',
    borderRadius: 23,
    margin: 5,
    marginBottom: 13,
    marginTop: 13,
    alignItems: 'center',
    justifyContent: 'center',
  },
  button_text: {
    margin: 19,
    fontSize: 0.05 * width,
  },
  timer_format: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    margin: 13,
  },
  link_text: {
    color: 'white',
    margin: 3,
  },
});

export default login_styles;
