/**
 * List of commits can be found here
 */
import AsyncStorage from '@react-native-community/async-storage';
import {useFocusEffect, useRoute} from '@react-navigation/native';
import LottieView from 'lottie-react-native';
import React, {useEffect, useState} from 'react';
import {
  Dimensions,
  Platform,
  SectionList,
  StatusBar,
  Text,
  View,
} from 'react-native';
import ListItem from './ListItem';
import {commit_list} from '../styles/Styles';
import octokit from '../functions/Octokit';

const CommitsList = () => {
  const [page, setPage] = useState<number>(1);
  useFocusEffect(
    React.useCallback(() => {
      StatusBar.setBarStyle('light-content');
      Platform.OS === 'android' && StatusBar.setBackgroundColor('#4F68C4');
    }, []),
  );
  const route = useRoute<any>();
  const [commits, setCommits] = useState<any[]>([{title: '', data: []}]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    AsyncStorage.getItem('userInfo').then((value) => {
      if (value) {
        const result = JSON.parse(value);
        octokit.authenticate({
          type: 'basic',
          username: result.user,
          password: result.pass,
        });
        octokit.repos
          .getCommits({
            owner: route.params.owner,
            repo: route.params.repo,
            page: page,
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
                sectionList.push({
                  title: test[i].title,
                  data: data.filter(
                    (x: any) =>
                      test[i].title === x.commit.author.date.split('T')[0],
                  ),
                });
              }
            }

            let combinedArray = [...commits, ...sectionList];
            setCommits(combinedArray);

            setLoading(false);
          });
      }
    });
  }, [page]);

  return (
    <View style={{backgroundColor: '#4F68C4'}}>
      {loading ? (
        <View style={commit_list.container_lottie}>
          <LottieView
            style={commit_list.lottie}
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
          onEndReachedThreshold={1}
          onEndReached={(value) => setPage(page + 1)}
          renderItem={(item: any) => (
            <ListItem
              key={item + (item.index * 321).toString()}
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
