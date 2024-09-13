// Navigation/Navigation.js

import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Search from 'components/Search'
import FilmDetail from 'components/FilmDetail'
import Favorites from 'components/Favorites'
import News from 'components/News'
import { Image, StyleSheet } from 'react-native'



const Stack = createNativeStackNavigator();
const SearchStackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Rechercher"
        component={Search}
      />
      <Stack.Screen
        name="FilmDetail"
        component={FilmDetail}
      />
    </Stack.Navigator>
  )
}

const Fab = createNativeStackNavigator();
const FavoritesStackNavigator = () => {
  return (
    <Fab.Navigator>
      <Fab.Screen
        name="Favories"
        component={Favorites}
      />
      <Fab.Screen
        name="FilmDetail"
        component={FilmDetail}
      />
    </Fab.Navigator>
  )
}

const Ne = createNativeStackNavigator();
const NewssStackNavigator = () => {
  return (
    <Ne.Navigator>
      <Ne.Screen
        name="News"
        component={News}
      />
      <Ne.Screen
        name="FilmDetail"
        component={FilmDetail}
      />
    </Ne.Navigator>
  )
}


const Tab = createBottomTabNavigator();
const MoviesTabNavigator = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator >
      <Tab.Screen
          name="Nouveautes"
          component={NewssStackNavigator}
          options={{
            headerShown: false,
            tabBarShowLabel: false,
            tabBarIcon: () => { // On définit le rendu de nos icônes par les images récemment ajoutés au projet
              return <Image
                source={require('img/ic_fiber_new.png')}
                style={styles.icon} /> // On applique un style pour les redimensionner comme il faut
            }
          }} />
        <Tab.Screen
          name="Recherche"
          component={SearchStackNavigator}
          options={{
            headerShown: false,
            tabBarShowLabel: false,
            tabBarIcon: () => { // On définit le rendu de nos icônes par les images récemment ajoutés au projet
              return <Image
                source={require('img/ic_search.png')}
                style={styles.icon} /> // On applique un style pour les redimensionner comme il faut
            }
          }} />
        <Tab.Screen name="Favori" component={FavoritesStackNavigator}
          options={{
            headerShown: false,
            tabBarShowLabel: false,
            tabBarIcon: () => { // On définit le rendu de nos icônes par les images récemment ajoutés au projet
              return <Image
                source={require('img/favorite_coeur_black.png')}
                style={styles.icon} /> // On applique un style pour les redimensionner comme il faut
            }
          }} />
      </Tab.Navigator>
    </NavigationContainer>

  )
}

const styles = StyleSheet.create({
  main_container: {
    flex: 1
  },
  icon: {
    width: 30,
    height: 30
  }
})

export default MoviesTabNavigator