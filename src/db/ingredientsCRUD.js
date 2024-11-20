import db from 'db/databas';

export const addIngredients = (ingredient) => {
  db.transaction(tx => {
    tx.executeSql(
      'INSERT INTO Ingredients (nameIngredients, descriptionIngredients, uniteIngredients, prixUnitaireIngredients) VALUES (?, ?, ?, ?)',
      [ingredient.nameIngredients, ingredient.descriptionIngredients, ingredient.uniteIngredients, ingredient.prixUnitaireIngredients]
    );
  });
};



export const getIngredients = (callback) => {
  db.transaction(tx => {
    tx.executeSql(
      'SELECT * FROM Ingredients',
      [],
      (tx, results) => {
        const ingredients = [];
        for (let i = 0; i < results.rows.length; i++) {
          ingredients.push(results.rows.item(i));
        }
        callback(ingredients);
      }
    );
  });
};
