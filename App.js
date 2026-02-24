import { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  Pressable,
} from 'react-native';
import { ContextProvider, useContextData } from './components/Context';

const Item = ({ data, onPress }) => {
  return (
    <Pressable onPress={() => onPress(data)}>
      <View style={styles.item}>
        <Text style={styles.itemTitle}>{data.title}</Text>
        <Text>{data.description}</Text>
      </View>
    </Pressable>
  );
};

const ListScreen = ({ onPress }) => {
  const data = useContextData();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Test List</Text>
      <FlatList
        data={data}
        renderItem={({ item }) => <Item data={item} onPress={onPress} />}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

const Header = ({ item }) => {

  return (
    <View style={styles.header}>
      {!item ? 
        <Text style={styles.headerTitle}>Select an item</Text> : (
          <>
            <Text style={styles.headerTitle}>{item.title}</Text>
            <Text style={styles.headerDescription}>{item.description}</Text>
          </>
      )}
    </View>
  );
};

export default function App() {
  const [selectedItem, setSelectedItem] = useState(null);

  const handleItemPress = (item) => {
    setSelectedItem(item);
  };

  return (
    <ContextProvider>
      <View style={{ flex: 1 }}>
        <Header item={selectedItem} />
        <ListScreen onPress={handleItemPress} />
      </View>
    </ContextProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    //alignItems: 'flex-start',
    padding: 10,
    paddingTop: 20,
  },
  item: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
    width: '100%',
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  itemTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  header: {
    paddingTop: 60,
    paddingHorizontal: 10,
    paddingBottom: 20,
    backgroundColor: '#f2f2f2',
  },
  headerTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'center'
  },
  headerDescription: {
    fontSize: 16,
    marginTop: 4,
    textAlign: 'center'
  },
});
