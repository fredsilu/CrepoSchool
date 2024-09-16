
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Image, StyleSheet, Button, Text, View } from 'react-native'

import HomeScreen from 'components/Homescreen'

import Ingredients from 'components/Ingredients'
import Plats from 'components/Plats'
import Commandes from 'components/Commandes'
import Traiteurs from 'components/Traiteurs'

import { createTables, connectToDatabase } from 'db/db';

/*
const loadData = useCallback(async () => {
  try {
    const db = await connectToDatabase()
    await createTables(db)
  } catch (error) {
    console.error(error)
  }
}, [])

useEffect(() => {
  loadData()
}, [loadData])

*/

const Stack = createNativeStackNavigator();

export default function Svctraiteur() {
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
