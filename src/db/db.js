import SQLite from 'react-native-sqlite-storage';
import RNFS from 'react-native-fs';
import { DATABASE_NAME, SQL_FILE_PATH } from 'db/config';

const db = SQLite.openDatabase(
  { name: DATABASE_NAME, location: 'default' },
  () => console.log('Database opened'),
  error => console.log('Error: ', error)
);

const readSQLFile = async () => {
  try {
    const sqlFileContent = await RNFS.readFile(SQL_FILE_PATH, 'utf8');
    return sqlFileContent;
  } catch (error) {
    console.error('Error reading SQL file:', error);
  }
};

export const initializeDatabase = async () => {
  const sqlFileContent = await readSQLFile();
  db.transaction(tx => {
    sqlFileContent.split(';').forEach(query => {
      if (query.trim()) {
        tx.executeSql(query);
      }
    });
  });
};

export default db;
