/* eslint-disable react/react-in-jsx-scope */
import React from 'react';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

import Icon from 'react-native-vector-icons/FontAwesome';

import Main from './pages/Main';

const StackRoute = createStackNavigator({
  Main: {
    screen: Main,
    navigationOptions: ({navigation}) => {
      return {
        headerTitle: 'Instagram',
        headerLeft: (
          <Icon
            onPress={() => {}}
            style={{marginLeft: 30}}
            name="camera"
            size={22}
            color={'#000'}
          />
        ),
        headerRight: (
          <Icon
            onPress={() => {}}
            style={{marginRight: 30}}
            name="paper-plane-o"
            size={22}
            color={'#000'}
          />
        ),
        headerTitleStyle: {
          fontFamily: 'Lobster-Regular',
          color: '#000',
          fontSize: 24,
        },
        headerStyle: {
          backgroundColor: '#FFF',
        },
      };
    },
  },
});

export default createAppContainer(StackRoute);
