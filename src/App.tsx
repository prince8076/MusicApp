import { SafeAreaView, StatusBar, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const App = () => {
  return (
      <SafeAreaView>
        <StatusBar/>
            <View>
              <Text>App</Text>
            </View>
      </SafeAreaView>
    
  )
}



const styles = StyleSheet.create({
  container:{
    flex: 1
  }
});

export default App
