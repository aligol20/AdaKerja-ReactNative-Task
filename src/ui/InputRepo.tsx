/**
 * User input it's favorite repo to  find
 */
import {useFocusEffect} from '@react-navigation/native';
import LottieView from 'lottie-react-native';
import React, {useState, useEffect} from 'react';
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
  const [searchResult, setSearchResult] = useState<any>();
  const [foundResult, setFoundResult] = useState<number>(0);
  const octokit = require('@octokit/rest')();
  const [loading, setLoading] = useState<boolean>(false);
  const [pagination, setPagination] = useState<boolean>(false);
  const [page, setPage] = useState<number>(1);

  useFocusEffect(
    React.useCallback(() => {
      StatusBar.setBarStyle('light-content');
      Platform.OS === 'android' && StatusBar.setBackgroundColor('#4F68C4');
    }, [page]),
  );

  useEffect(() => {
    if (repo) {
      setPagination(true);

      octokit.search
        .repos({
          q: repo,
          in: 'name',
          page: page,
        })
        .then(({data, headers, status}: any) => {
          // handle data
          if (searchResult) {
            let combinedArray = [...searchResult, ...data.items];
            setSearchResult(combinedArray);
            setPagination(false);
          } else {
            setSearchResult(data.items);
            setPagination(false);
          }
        });
    }
  }, [page]);

  const findRepo = () => {
    setLoading(true);
    octokit.search
      .repos({
        q: repo,
        in: 'name',
        page: page,
      })
      .then(({data, headers, status}: any) => {
        console.log(data, 'data data');
        // handle data
        setFoundResult(data.total_count);
        if (searchResult) {
          let combinedArray = [...searchResult, ...data.items];
          setSearchResult(combinedArray);
        } else {
          setSearchResult(data.items);
        }

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
        <View style={input_repo.text_input_container}>
          <View style={input_repo.input_view}>
            <TextInput
              clearButtonMode={'while-editing'}
              style={input_repo.text_input}
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
                  ? input_repo.button_disable
                  : input_repo.button_enable
              }
              onPress={() => {
                if (repo?.length !== 0) {
                  findRepo();
                }
              }}>
              <Text style={input_repo.button_text}>{'Find'}</Text>
            </TouchableHighlight>
          </View>
          <Text style={{color: 'white'}}>{'found result:' + foundResult}</Text>
          {loading ? (
            <View style={input_repo.lottie_view}>
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
              onEndReached={() => setPage(page + 1)}
              onEndReachedThreshold={0.5}
              keyExtractor={(item, index) => item + index.toString()}
              renderItem={(item) => (
                <TouchableHighlight
                  key={item.index}
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
                  <View style={input_repo.list_view}>
                    <Text style={{fontSize: 19, color: 'black', margin: 7}}>
                      {item && item.item && item.item.name}
                    </Text>
                    <Text style={{fontSize: 13, color: '#999999', margin: 7}}>
                      {item && item.item && item.item.owner.login}
                    </Text>
                  </View>
                </TouchableHighlight>
              )}
            />
          )}
          {pagination && (
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
          )}
        </View>
      </LinearGradient>
    </KeyboardAvoidingView>
  );
};

export default InputRepo;
