import React, {useState} from 'react';
import {StyleSheet, SafeAreaView, ScrollView, Text} from 'react-native';
import SearchBar from 'react-native-search-bar';

const items = [
  'Gökhan Yıldız',
  'Baran Karaboğa',
  'Yunus Güneş',
  'Bilal Çetin',
  'Talha Kayabalı',
];

const Search = () => {
  const [search, setSearch] = useState('');
  const search2 = React.createRef();

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.inset}>
        <SearchBar
          text={search}
          ref={search2}
          onChange={e => console.log(e.nativeEvent)}
          onChangeText={setSearch}
          onSearchButtonPress={() => search2.current.blur()}
        />

        {items
          .filter(a => a.toLowerCase().indexOf(search.toLowerCase()) !== -1)
          .map(a => (
            <Text
              style={styles.listItem}
              key={a}
              onPress={() => navigation.navigate('ProfileScreen')}>
              {a}
            </Text>
          ))}
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#F5FCFF',
  },
  inset: {
    flex: 1,
  },
  header: {
    textAlign: 'center',
    margin: 15,
    fontSize: 18,
    fontWeight: 'bold',
  },
  listItem: {
    paddingHorizontal: 15,
    paddingVertical: 12,
    fontSize: 18,
    backgroundColor: '#fff',
  },
});

export default Search;
