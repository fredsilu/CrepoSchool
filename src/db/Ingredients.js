export const addIngredients = async (db: SQLiteDatabase, ingredient: Ingredients) => {
  const insertQuery = `
   INSERT INTO Ingredients (nameIngredients, descriptionIngredients, uniteIngredients,prixUnitaireIngredients)
   VALUES (?, ?, ?,?)
 `
  const values = [
    ingredient.nameIngredients,
    ingredient.descriptionIngredients,
    ingredient.uniteIngredients,
    ingredient.prixUnitaireIngredients,
  ]
  try {
    return db.executeSql(insertQuery, values)
  } catch (error) {
    console.error(error)
    throw Error("Failed to add client")
  }
}
