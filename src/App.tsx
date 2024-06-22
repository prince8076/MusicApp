import { SafeAreaView, StatusBar, StyleSheet, Text, View } from 'react-native'
import React, {useState, useEffect} from 'react'
import {setupPlayer} from "../musicPlayerServices"

function App(): JSX.Element {
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
