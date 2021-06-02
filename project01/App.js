import 'react-native-gesture-handler';
import React, {Component} from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import {ApolloClient, InMemoryCache, ApolloProvider,HttpLink} from '@apollo/client';

import Screen1 from './App/components/screen1/index';
import Screen2 from './App/components/screen2/index';
import Screen3 from './App/components/screen3/index';
import Screen4 from './App/components/screen4/index';
import EditScreen from './App/components/EditScreen/index';

const client = new ApolloClient({
 
  cache: new InMemoryCache(),
   link: new HttpLink({ uri: 'http://192.168.43.64:4000/graphql', fetch })
});
const cache = new InMemoryCache({
  typePolicies: {
    Query: {
      fields: {
        project: {
          merge: true,
        },
      },
    },
  },
});

const Stack = createStackNavigator();

function App() {
  return (
    <ApolloProvider client={client}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Screen1">
          <Stack.Screen name="screen1" component={Screen1} options={{ headerShown: false }}/>
          <Stack.Screen name="screen3" component={Screen3} options={{ headerShown: false }}/>
          <Stack.Screen name="screen2" component={Screen2} options={{ headerShown: false }}/>
          <Stack.Screen name="screen4" component={Screen4} options={{ headerShown: false }}/>
          <Stack.Screen name="editscreen" component={EditScreen} options={{ headerShown: false }}/>
        </Stack.Navigator>
      </NavigationContainer>
    </ApolloProvider>
    
  );
}

export default App;


