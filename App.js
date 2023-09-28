import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import Task from './components/List';

export default function App() {
  const handleButtonClick = () => {
    console.log('Button clicked!');
  };

  return (
    <View style={styles.container}>
      <View style={styles.tasksWrapper}>
        <Text style={styles.Title}>Alarms</Text>
        <View style={styles.taskContainer}>
          <Task text={'6:30 AM'} />
          <Task text={'7:30 AM'} />
          <Task text={'8:30 AM'} />
          <Task text={'9:30 AM'} />
        </View>
        <View style={styles.items}></View>
      </View>
      <TouchableOpacity style={styles.addButton} onPress={handleButtonClick}>
        <Text style={styles.ButtonText}>+</Text>
      </TouchableOpacity>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#176B87',
    justifyContent: 'space-between',
  },
  tasksWrapper: {
    paddingTop: 80,
    paddingHorizontal: 20,
  },
  Title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 20,
    color: 'white',
    textAlign: 'center'
  },
  taskContainer: {
    marginBottom: 20,
    borderWidth: 2,
    borderColor: '#64CCC5',
    padding: 10,
    borderRadius: 10,
    backgroundColor: '#64CCC5'
  },
  items: {
    flex: 1,
  },
  addButton: {
    backgroundColor: '#64CCC5',
    width: 50,
    height: 50,
    borderRadius: 25,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    bottom: 20,
    left: '50%',
    marginLeft: -25,
  },
  ButtonText: {
    fontSize: 28,
    fontWeight: 'bold',
    color: 'white',
    textAlign: 'center',
    lineHeight: 50,
  }
});

