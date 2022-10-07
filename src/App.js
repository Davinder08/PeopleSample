import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import {SafeAreaView, StatusBar} from 'react-native';
import People from './People';
import PeopleDetail from './PeopleDetail';
import {appStyles as styles} from './styles';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <SafeAreaView style={styles.safeAreView}>
      <StatusBar barStyle={'dark-content'} />
      <NavigationContainer>
        <Stack.Navigator initialRouteName="People">
          <Stack.Screen
            name="People"
            component={People}
            options={{
              title: 'People',
              headerStyle: {
                backgroundColor: '#f4511e',
              },
              headerTintColor: '#fff',
              headerTitleStyle: {
                fontWeight: 'bold',
              },
            }}
          />
          <Stack.Screen
            name="PeopleDetail"
            component={PeopleDetail}
            options={{
              title: 'People Detail',
              headerStyle: {
                backgroundColor: '#f4511e',
              },
              headerTintColor: '#fff',
              headerTitleStyle: {
                fontWeight: 'bold',
              },
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaView>
  );
};

export default App;
