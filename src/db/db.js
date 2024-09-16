import { enablePromise,openDatabase} from "react-native-sqlite-storage"

// Enable promise for SQLite
enablePromise(true)

export const connectToDatabase = async () => {
  return openDatabase(
    { name: "serviceTraiteurDB.db", location: "default" },
    () => {},
    (error) => {
      console.error(error)
      throw Error("Could not connect to database")
    }
  )
}

export const createTables = async (db: SQLiteDatabase) => {
  const ingredientsQuery = `
    CREATE TABLE IF NOT EXISTS Ingredients (
        id INTEGER DEFAULT 1,
        nameIngredients TEXT,
        descriptionIngredients TEXT,
        uniteIngredients TEXT,
        prixUnitaireIngredients TEXT,
        PRIMARY KEY(id)
    )
  `
  const clientsQuery = `
   CREATE TABLE IF NOT EXISTS Clients (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      firstName TEXT,
      name TEXT,
      phoneNumber TEXT
   )
  `
  try {
    await db.executeSql(ingredientsQuery)
    await db.executeSql(clientsQuery)
  } catch (error) {
    console.error(error)
    throw Error(`Failed to create tables`)
  }
}


export const getTableNames = async (db: SQLiteDatabase): Promise<string[]> => {
  try {
    const tableNames: string[] = []
    const results = await db.executeSql(
      "SELECT name FROM sqlite_master WHERE type='table' AND name NOT LIKE 'sqlite_%'"
    )
    results?.forEach((result) => {
      for (let index = 0; index < result.rows.length; index++) {
        tableNames.push(result.rows.item(index).name)
      }
    })
    return tableNames
  } catch (error) {
    console.error(error)
    throw Error("Failed to get table names from database")
  }
}

export const removeTable = async (db: SQLiteDatabase, tableName: Table) => {
  const query = `DROP TABLE IF EXISTS ${tableName}`
  try {
    await db.executeSql(query)
  } catch (error) {
    console.error(error)
    throw Error(`Failed to drop table ${tableName}`)
  }
}
