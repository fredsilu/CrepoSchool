
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Image, StyleSheet, Button, Text, View } from 'react-native'
import React, { useCallback, useEffect } from 'react';
import { initializeDatabase } from 'db/databas';

import HomeScreen from 'components/Homescreen'

import Ingredients from 'components/Ingredients'
import Plats from 'components/Plats'
import Commandes from 'components/Commandes'
import Traiteurs from 'components/Traiteurs'




const Stack = createNativeStackNavigator();

export default function Svctraiteur() {

    useEffect(() => {
      initializeDatabase();
    }, []);


  return (
    <NavigationContainer>
    <Stack.Navigator>
    <Stack.Screen
    name="SERVICE TRAITEUR"
    component={HomeScreen}
    />
    <Stack.Screen
    name="Ingredients"
    component={Ingredients}
    />
    <Stack.Screen
    name="Plats"
    component={Plats}
    />
    <Stack.Screen
    name="Commandes"
    component={Commandes}
    />
    <Stack.Screen
    name="Traiteurs"
    component={Traiteurs}
    />
    </Stack.Navigator>
    </NavigationContainer>
  );
}
