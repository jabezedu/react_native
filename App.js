import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, SafeAreaView } from 'react-native';

export default function App() {
  
  console.log("Did some changes ! ")
  
  const handlePress = () => {
    console.log("This text has been clicked ! ")
  }
  
  return (
    <SafeAreaView style={styles.container}>
      <Text numberOfLines={1} onPress={()=> console.log("Text Clicked ")}>
        Hello World This is a test from Jabez - A readlly really long text and I wanna make it some more long
      </Text>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "dodgerblue",
  },
});
 