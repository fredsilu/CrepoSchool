  a&mport React from 'react';
import { View, Text, FlatList } from 'react-native';
import { useState, useEffect } from 'react';
import { getIngredients } from 'db/ingredientsCRUD';


export const IngredientList = () => {

  const [ingredients, setIngredients] = useState([]);

    useEffect(() => {
      getIngredients(setIngredients);
    }, []);

  return (
    <FlatList
      data={ingredients}
      keyExtractor={item => item.id.toString()}
      renderItem={({ item }) => (
        <View>
          <Text>{item.nameIngredients}</Text>
          <Text>{item.descriptionIngredients}</Text>
          <Text>{item.uniteIngredients}</Text>
          <Text>{item.prixUnitaireIngredients}</Text>
        </View>
      )}
    />
  );
};
