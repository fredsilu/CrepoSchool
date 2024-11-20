import db from 'db/databas';

export const addClients = (client) => {
  db.transaction(tx => {
    tx.executeSql(
      'INSERT INTO Clients (firstName, name, phoneNumber) VALUES (?, ?, ?)',
      [client.firstName, client.name, client.phoneNumber]
    );
  });
};

export const getClients = (callback) => {
  db.transaction(tx => {
    tx.executeSql(
      'SELECT * FROM Clients',
      [],
      (tx, results) => {
        const clients = [];
        for (let i = 0; i < results.rows.length; i++) {
          clients.push(results.rows.item(i));
        }
        callback(clients);
      }
    );
  });
};
