/**
 * User input it's favorite repo to  find
 */
import {useFocusEffect} from '@react-navigation/native';
import LottieView from 'lottie-react-native';
import React, {useState} from 'react';
import {
  Dimensions,
  FlatList,
  KeyboardAvoidingView,
  Platform,
  StatusBar,
  Text,
  TextInput,
  TouchableHighlight,
  View,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import * as RootNavigation from '../RootNavigation';
import {input_repo} from './Styles';

const width = Dimensions.get('screen').width;
const InputRepo: React.FC = () => {
  const [repo, setRepo] = useState<string>();
  const [searchResult, setSearchResult] = useState();
  const octokit = require('@octokit/rest')();
  const [loading, setLoading] = useState<boolean>(false);

  /**
   * more Details @ref - PaymentsOverView.tsx
   */
  useFocusEffect(
    React.useCallback(() => {
      StatusBar.setBarStyle('light-content');
      Platform.OS === 'android' && StatusBar.setBackgroundColor('#4F68C4');
    }, []),
  );

  const findRepo = () => {
    setLoading(true);
    octokit.search
      .repos({
        q: repo,
        in: 'name',
      })
      .then(({data, headers, status}: any) => {
        console.log(data, 'data data');
        // handle data
        setSearchResult(data.items);
        setLoading(false);
      });
  };

  return (
    <KeyboardAvoidingView style={input_repo.container}>
      <LinearGradient
        start={{x: 0, y: 0}}
        end={{x: 0, y: 1}}
        colors={['#4F68C4', '#0C2682']}
        style={{flex: 1}}>
        <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
          <View
            style={{
              width: '95%',
              borderRadius: 13,
              flexDirection: 'row',
              alignItems: 'center',
              marginTop: 13,
              marginBottom: 13,
            }}>
            <TextInput
              style={{
                width: '80%',
                backgroundColor: 'white',
                borderRadius: 13,
                alignItems: 'center',
                marginTop: 13,
                marginBottom: 13,
                height: '100%',
                paddingLeft: 5,
              }}
              returnKeyType={'search'}
              placeholder={'Repository name'}
              placeholderTextColor={'#999999'}
              onChangeText={(text) => setRepo(text)}
              onSubmitEditing={findRepo}
            />

            <TouchableHighlight
              underlayColor={'transparent'}
              style={
                repo?.length === 0
                  ? {
                      backgroundColor: '#999999',
                      borderRadius: 13,
                      margin: 3,
                      alignItems: 'center',
                      width: '18%',
                    }
                  : {
                      backgroundColor: '#20B87B',
                      borderRadius: 13,
                      margin: 3,
                      alignItems: 'center',
                      width: '18%',
                    }
              }
              onPress={() => {
                if (repo?.length !== 0) {
                  findRepo();
                }
              }}>
              <Text style={{color: 'white', margin: 13, fontWeight: 'bold'}}>
                {'Find'}
              </Text>
            </TouchableHighlight>
          </View>
          {loading ? (
            <View
              style={{
                alignItems: 'center',
                justifyContent: 'center',
                flex: 1,
              }}>
              <LottieView
                style={{
                  marginTop: 3,
                  width: 0.15 * width,
                  height: 0.15 * width,
                }}
                source={require('../lottie/loading__.json')}
                autoPlay
                loop={true}
              />
            </View>
          ) : (
            <FlatList
              data={searchResult}
              contentContainerStyle={{paddingBottom: 53}}
              onEndReached={() => null}
              keyExtractor={(item) => item.id}
              renderItem={(item) => (
                <TouchableHighlight
                  underlayColor={'transparent'}
                  style={{
                    alignItems: 'center',
                    width: width,
                  }}
                  onPress={() =>
                    RootNavigation.navigate('CommitesList', {
                      owner: item.item.owner.login,
                      repo: item.item.name,
                    })
                  }>
                  <View
                    style={{
                      flexDirection: 'column',
                      width: '95%',
                      backgroundColor: 'white',
                      margin: 3,
                      borderRadius: 7,
                    }}>
                    <Text style={{fontSize: 19, color: 'black', margin: 7}}>
                      {item && item.item && item.item.name}
                    </Text>
                  </View>
                </TouchableHighlight>
              )}
            />
          )}
        </View>
      </LinearGradient>
    </KeyboardAvoidingView>
  );
};

export default InputRepo;
