import React from 'react';
import { Button, SafeAreaView } from 'react-native';
// import Router from './Router';
import { NavigationContainer, StackActions } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import { HomeScreen, MyListsScreen, ProfileScreen, LoginScreen, RegisterScreen, AdvancedSearchScreen, ForgotPasswordScreen, ListDetailScreen, CollectionScreen } from './screens';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';


const Stack = createStackNavigator();

const Tab = createMaterialTopTabNavigator();

const margin = { marginTop: 33 }
const MainTabStack = props => {
  return (
    <Tab.Navigator style={margin}>
      <Tab.Screen name="Home" component={HomeScreen} options={{ title: "Busca" }} />
      <Tab.Screen name="Profile" component={ProfileScreen} options={{ title: "Perfil" }} />
      <Tab.Screen name="My Lists" component={MyListsScreen} options={{ title: "Listas" }} />
      <Tab.Screen name="Collection" component={CollectionScreen} options={{ title: "Coleção" }} />
    </Tab.Navigator>

  )
}
const LoginStack = createStackNavigator();

const AuthStack = props => {
  return (
    <LoginStack.Navigator
      initialRouteName="Login"
    >
      <LoginStack.Screen
        name="Login"
        component={LoginScreen}
        options={{ headerShown: false }}
      />
      <LoginStack.Screen
        name="Register"
        component={RegisterScreen}
        options={{ title: "Registrar Conta" }}
      />
      <LoginStack.Screen
        name="Forgot Password"
        component={ForgotPasswordScreen}
        options={{ title: "Esqueci minha senha" }}
      />
    </LoginStack.Navigator>
  )
}

const Router = props => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Auth Stack"
      // screenOptions={{
      //   safeHeader
      // }}
      >
        <Stack.Screen
          name="Main Tab Stack"
          component={MainTabStack}
          options={{ headerShown: false }}

        />
        <Stack.Screen
          name="Auth Stack"
          component={AuthStack}
          options={{ headerShown: false }}

        />

        <Stack.Screen
          name="Advanced Search"
          component={AdvancedSearchScreen}
          options={{ title: "Busca Avançada" }}
        />

        <Stack.Screen 
        name="List Detail" 
        component={ListDetailScreen} 
        options={{title: "Lista"}}
        />

      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default Router;