import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';
import Task from './components/List';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.tasksWrapper}>
        <Text style={styles.Title}>Alarm</Text>
          <Task text={'6:30 AM'}/>
          <Task text={'7:30 AM'}/>
          <Task text={'8:30 AM'}/>
          <Task text={'9:30 AM'}/>
        <Button style={styles}>Hello</Button>
        <View style={styles.items}>  
        </View>
        <StatusBar style="auto" />
        
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
  },
  tasksWrapper:{
    paddingTop: 80,
    paddingHorizontal: 20,
  },
  Title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 20,
    color: 'white'
  },
  items: {
    marginTop: 30,
  },
  addButton: {
    backgroundColor: '#3498db',
    width: 50,
    height: 50,
    borderRadius: 25,
  }
});
