import React, {useEffect, useState} from 'react';
import {
  View,
  FlatList,
  Text,
  Image,
  StyleSheet,
  SectionList,
  Dimensions,
  StatusBar,
  Platform,
} from 'react-native';
import LottieView from 'lottie-react-native';

import {useFocusEffect, useRoute} from '@react-navigation/native';
import {
  TouchableHighlight,
  TouchableOpacity,
} from 'react-native-gesture-handler';
import Modal from 'react-native-modal';
import ListItem from './ListItem';
import {commit_list} from './Styles';
const CommitsList = () => {
  useFocusEffect(
    React.useCallback(() => {
      StatusBar.setBarStyle('light-content');
      Platform.OS === 'android' && StatusBar.setBackgroundColor('#4F68C4');
    }, []),
  );
  const route = useRoute<any>();
  const [commits, setCommits] = useState<{title: string; data: []}[]>([
    {title: '', data: []},
  ]);
  const [loading, setLoading] = useState<boolean>(true);
  const octokit = require('@octokit/rest')();

  const param = route.params;
  const width = Dimensions.get('screen').width;
  useEffect(() => {
    octokit.repos
      .getCommits({
        owner: route.params.owner,
        repo: route.params.repo,
      })
      .then(({data, headers, status}: any) => {
        // handle data
        let test: {title: string}[] = [];
        let sectionList = [];
        for (let i = 0; i < data.length; i++) {
          if (i !== 0) {
            if (
              data[i - 1].commit.author.date.split('T')[0] !==
              data[i].commit.author.date.split('T')[0]
            ) {
              test.push({title: data[i].commit.author.date.split('T')[0]});
            }
          } else {
            test.push({title: data[i].commit.author.date.split('T')[0]});
          }
        }
        if (test.length > 0) {
          for (let i = 0; i < test.length; i++) {
            console.log(
              data
                .filter(
                  (x: any) =>
                    test[i].title === x.commit.author.date.split('T')[0],
                )[0]
                .commit.message.split('\n\n'),
              'ggggggggggg',
            );
            sectionList.push({
              title: test[i].title,
              data: data.filter(
                (x: any) =>
                  test[i].title === x.commit.author.date.split('T')[0],
              ),
            });
          }
        }

        console.log(sectionList, 'test test qqqqqqqqq');
        setCommits(sectionList);
        setLoading(false);
      });
  }, []);

  return (
    <View style={{backgroundColor: '#4F68C4'}}>
      {loading ? (
        <View
          style={{
            alignItems: 'center',
            justifyContent: 'center',
            height: '100%',
            width: '100%',
          }}>
          <LottieView
            style={{marginTop: 3, width: 0.15 * width, height: 0.15 * width}}
            source={require('../lottie/loading__.json')}
            autoPlay
            loop={true}
          />
        </View>
      ) : (
        <SectionList
          sections={commits}
          keyExtractor={(item, index) => item + index.toString()}
          stickySectionHeadersEnabled={true}
          renderItem={(item: any) => (
            <ListItem
              message={item.item.commit.message}
              name={item.item.commit.author.name}
              email={item.item.commit.author.email}
              avatar_url={
                item &&
                item.item &&
                item.item.committer &&
                item.item.committer.avatar_url &&
                item.item.committer.avatar_url
              }
              userImage={
                item.item &&
                item.item.author &&
                item.item.author.avatar_url &&
                item.item.author.avatar_url
              }
            />
          )}
          renderSectionHeader={({section: {title}}) => (
            <Text style={commit_list.title}>{title}</Text>
          )}
        />
      )}
    </View>
  );
};

export default CommitsList;
