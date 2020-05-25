/**
 * Common styles are saved here
 */
import {StyleSheet, Dimensions} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';
const w = Dimensions.get('screen').width;
const h = Dimensions.get('screen').height;
export const common_styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  body: {
    backgroundColor: Colors.white,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.black,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.dark,
  },
  highlight: {
    fontWeight: '700',
  },
  footer: {
    color: Colors.dark,
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
  login_body: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  main_body: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-around',
    backgroundColor: '#eeeeee',
  },

  request_body: {
    flexDirection: 'column',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  message_body: {
    flexDirection: 'column',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  package: {
    width: '100%',
    flexDirection: 'column',
    alignItems: 'center',
    height: '40%',
  },
  text_input_new_message: {
    margin: 7,
    width: '95%',
    textAlign: 'right',
    borderBottomWidth: 0,
    padding: 5,
    backgroundColor: 'white',
  },
  home_body: {
    flex: 1,
    backgroundColor: '#728DF1',
    flexDirection: 'row',
    alignItems: 'center',
  },
  safe_area: {
    flex: 1,
    backgroundColor: '#728DF1',
  },
  safe_area_main: {
    backgroundColor: '#EEF9F6',
    alignItems: 'center',
    flexDirection: 'column',
    height: '100%',
  },
  button: {
    backgroundColor: 'white',
    borderRadius: 3,
    margin: 5,
    width: '50%',
    marginBottom: 13,
    marginTop: 13,
    alignItems: 'center',
    justifyContent: 'center',
  },
  link_button: {
    backgroundColor: 'transparent',
    color: 'white',
    margin: 13,
  },
  link_text_button: {
    backgroundColor: 'white',
    marginTop: 13,
  },
  link_text: {
    color: 'white',
    margin: 3,
  },
  title: {
    margin: 3,
  },
  pre_text: {
    margin: 3,
    color: 'grey',
  },
  button_text: {
    margin: 13,
  },
  button_text_light: {
    color: 'grey',
  },
  button_text_disable: {
    margin: 13,
    color: 'grey',
  },
  input: {
    width: '53%',
    borderRadius: 13,
  },
  timer_format: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    margin: 13,
  },
  row_package: {
    flexDirection: 'row',
  },
  activity_indicator: {
    marginTop: 13,
    marginBottom: 13,
  },
  serach_header: {
    width: '100%',
    alignItems: 'center',
    marginTop: 3,
  },
  search_view: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    backgroundColor: 'white',
    width: '97%',
    borderRadius: 5,
    margin: 5,
    alignItems: 'center',
  },
  flat_list: {
    backgroundColor: 'transparent',
    alignContent: 'center',

    marginTop: 3,
  },
  flat_list_suggestion: {
    flex: 1,
    backgroundColor: 'transparent',
    alignContent: 'center',
    width: '97%',
    marginTop: 3,
  },
  flat_list_items: {
    backgroundColor: '#eeeeee',
    width: '100%',
    alignItems: 'center',
  },
  flat_list_details: {
    width: '100%',
    backgroundColor: 'transparent',
    margin: 1,
  },
  flat_list_child: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'flex-end',
    backgroundColor: 'white',
    marginBottom: 2,
    marginTop: 2,
    margin: 3,
    borderRadius: 3,
  },
  flat_list_history: {
    flexDirection: 'row',
    width: '97%',
    backgroundColor: 'white',
    margin: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  flat_list_tracking: {
    width: '32%',
    backgroundColor: '#00BFFF',
    borderRadius: 5,
    margin: 7,
    alignItems: 'center',
  },
  messages_list: {
    flexDirection: 'column',
    flex: 1,
    alignItems: 'flex-end',
  },
  flat_list_delivered: {
    width: '32%',
    backgroundColor: 'green',
    borderRadius: 5,
    margin: 7,
    alignItems: 'center',
  },
  flat_list_rejected: {
    width: '32%',
    backgroundColor: 'red',
    borderRadius: 5,
    margin: 7,
    alignItems: 'center',
  },
  search_input: {},
  search_box: {
    width: '97%',
    backgroundColor: 'white',
    borderRadius: 5,
  },
  header_button: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  tab_bar_container: {
    flexDirection: 'row',

    alignContent: 'center',
    alignItems: 'center',
    justifyContent: 'center',
  },
  tab_bar_text: {
    color: 'white',
  },
  input_container: {
    backgroundColor: 'white',
    borderRadius: 5,
    margin: 3,
    flexDirection: 'column',
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center',
    padding: 1,
    width: '97%',
  },
});
