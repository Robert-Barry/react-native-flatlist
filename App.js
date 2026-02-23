import { StyleSheet, Text, View, FlatList } from 'react-native';
import { ContextProvider, useContextData } from './components/Context';


const Item = ({ data }) => {
  return (
    <View style={styles.item}>
      <Text style={styles.itemTitle}>{data.title}</Text>
      <Text>{data.description}</Text>
    </View>
  );
};

const ListScreen = () => {
  const data = useContextData();
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Test List</Text>
      <FlatList
        data={data}
        renderItem={({ item }) => <Item data={item} />}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
}

export default function App() {
  return (
    <ContextProvider>
      <ListScreen />
    </ContextProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItem: 'left',
    padding: 10,
    paddingTop: 60,
  },
  item: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
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
});
