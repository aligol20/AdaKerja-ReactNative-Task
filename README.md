# AdaKerja-ReactNative-Task
A React Native Project with **Typescript** for login to a GitHub account and see the list of commits for every repository.

## Cross Platform
Currently available for Android and iOS

### Features

1. Login Screen for enter the username
2. password screen for enter the githhub password
3. Input screen for typing the repository name
4. Commits screen for see the commits of every repository includes:
 - commiter avatar
 - commit name
 - commit message
 - commit date
5. logOut button in every screen:
 - login screen is available when you are not signed in and you are not allowed to access it with back button
 
### Gifs
Android             |  iOS
:-------------------------:|:-------------------------:
<img src="https://github.com/aligol20/AdaKerja-ReactNative-Task/blob/master/android-app.gif" width="300">  |  <img src="https://github.com/aligol20/AdaKerja-ReactNative-Task/blob/master/ios-app.gif" width="300">

## Setup instructions

#### 1. Install dependencies
- `git clone https://github.com/aligol20/AdaKerja-ReactNative-Task.git`
- `cd AdaKerja-RactNative-Task`
- `npm install`
- `npm start`


#### 2. Running The App:
 ##### iOS:
 - `cd ios`
 - `pod install`
 - `cd ..`
 - Run `npx react-native run-ios` in the project root. It will perform some compilation and then launch the app in the iOS simulator.
 ##### Android:
 Open Android Studio, launch the AVD Manager, and start an virtual device. Then `run react-native run-android`. 

### Dependencies:
* [React Navigation](http://reactnavigation.org)
* [react-native-linear-gradient](https://github.com/react-native-community/react-native-linear-gradient)
* [react-native-restart](https://github.com/avishayil/react-native-restart)
* [lottie-react-native](https://github.com/react-native-community/lottie-react-native)
* [react-native-github-api](https://github.com/brunolemos/react-native-github-api)

### TODO
* Commit details can be better in ui and it's contents
* for better performance in complex projects it's better to use [react-native-navigation](https://github.com/wix/react-native-navigation) instead.
* Following repo option can be added.
* Get's new commit notification for following repository can be added

### Thanks To
[Parham alizadeh](prhmma@gmail.com)



