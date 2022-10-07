import React, {useEffect, useState} from 'react';
import {
  FlatList,
  Text,
  TouchableOpacity,
  LayoutAnimation,
  Platform,
  UIManager,
  View,
} from 'react-native';
import {peopleStyles as styles} from './styles';
const API_PEOPLE = 'https://swapi.dev/api/people';

export default React.memo(({}) => {
  const [people, updatePeople] = useState([]);
  const [selectedIndex, updateSelectedIndex] = useState([-1]);

  useEffect(() => {
    if (Platform.OS === 'android')
      UIManager.setLayoutAnimationEnabledExperimental(true);

    fetch(API_PEOPLE)
      .then(res => res.json())
      .then(response => {
        console.log(response);
        updatePeople(response.results);
      })
      .catch(e => console.error(e));
    return () => {
      // clean up function call
    };
  }, []);

  const toggleExpand = index => {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
    const _selectedIndex = [...selectedIndex];
    const _index = _selectedIndex.findIndex(i => i === index);

    if (_index != -1) _selectedIndex.splice(_index, 1);
    else _selectedIndex.push(index);

    updateSelectedIndex(_selectedIndex);
  };

  const _renderFilmsListItem = ({item, index}) => (
    <Text style={styles.nameText} children={item} />
  );

  const _renderOtherDetail = films => (
    <FlatList
      data={films}
      extraDate={films}
      keyExtractor={(item, index) => index.toString()}
      renderItem={_renderFilmsListItem}
    />
  );

  const _renderListItem = ({item, index}) => {
    const itemSelected = selectedIndex.some(i => i === index);
    return (
      <View style={styles.itemContainer}>
        <Text style={styles.nameText} children={'Name: ' + item.name} />
        <Text
          style={styles.nameText}
          children={'Height: ' + item.height + '   -  Mass: ' + item.mass}
        />
        <Text
          style={styles.nameText}
          children={
            'Hair Color: ' +
            item.hair_color +
            '   -  Eye Color: ' +
            item.eye_color
          }
        />
        <Text style={styles.nameText} children={'DOB: ' + item.birth_year} />
        <Text style={styles.nameText} children={'Gender: ' + item.gender} />
        <TouchableOpacity
          onPress={() => toggleExpand(index)}
          activeOpacity={0.8}>
          <Text style={styles.nameText} children={'Films'} />
        </TouchableOpacity>
        {itemSelected && _renderOtherDetail(item?.films)}
      </View>
    );
  };

  return (
    <FlatList
      style={styles.flatList}
      data={people}
      extraDate={people}
      keyExtractor={(item, index) => index.toString()}
      renderItem={_renderListItem}
    />
  );
});
