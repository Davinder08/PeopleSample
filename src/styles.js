import {StyleSheet} from 'react-native';

export const appStyles = StyleSheet.create({
  safeAreView: {
    flex: 1,
  },
});

export const peopleStyles = StyleSheet.create({
  safeAreView: {
    flex: 1,
  },
  textHeader: {
    fontSize: 20,
    fontWeight: '700',
    textAlign: 'center',
    padding: 10,
  },
  flatList: {
    borderWidth: 1,
    borderBottomWidth: 0,
    borderColor: 'gray',
    margin: 3,
  },
  itemContainer: {
    borderBottomWidth: 1,
    borderColor: 'gray',
  },
  nameText: {
    fontSize: 20,
    fontWeight: '200',
    padding: 10,
  },
});

export const peopleDetailStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'green',
  },
  noDataContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  noDataText: {
    fontSize: 18,
    fontWeight: '900',
  },
});
