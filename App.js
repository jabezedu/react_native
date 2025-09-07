import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, SafeAreaView , Image, TouchableOpacity} from 'react-native';

export default function App() {
  
  console.log("Did some changes ! ")
//
  
  const handlePress = () => {
    console.log("This text has been clicked ! ")
  }
  
  return (
    <SafeAreaView style={styles.container}>
      <Text>
        Hello World This is a test from Jabez - A readlly really long text and I wanna make it some more long
      </Text>

      <TouchableOpacity onPress={() => console.log("Image Tapped ")}>
        <Image 
          blurRadius={10}
          fadeDuration={1000}
          source={{
          width : 200, height : 200,
          uri : "https://picsum.dev/300/200"}}>
        </Image>
      </TouchableOpacity >
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "dodgerblue",
    justifyContent : "center",
    alignItems : "center"
  },
});
 