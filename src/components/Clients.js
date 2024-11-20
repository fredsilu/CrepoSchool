import React from 'react';
import { View, Text, FlatList } from 'react-native';
import { useState, useEffect } from 'react';
import { getClients } from 'db/clientsCRUD';


export const ClientList = () => {

  const [clients, setClients] = useState([]);

    useEffect(() => {
      getClients(setClients);
    }, []);

  return (
    <FlatList
      data={clients}
      keyExtractor={item => item.id.toString()}
      renderItem={({ item }) => (
        <View>
          <Text>{item.firstName}</Text>
          <Text>{item.name}</Text>
          <Text>{item.phoneNumber}</Text>
        </View>
      )}
    />
  );
};
