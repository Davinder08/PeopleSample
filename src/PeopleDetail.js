import React from 'react';
import {Text, View} from 'react-native';
import {peopleDetailStyles as styles} from './styles';

export default React.memo(({route}) => {
  const details = route.params.item || null;

  if (!details) {
    return (
      <View style={styles.noDataContainer}>
        <Text
          style={styles.noDataText}
          children={'Something went wrong, Please try again!'}
        />
      </View>
    );
  }

  return <View style={styles.container}></View>;
});
