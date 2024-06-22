import { ActivityIndicator, SafeAreaView, StatusBar, StyleSheet, Text, View } from 'react-native'
import React, {useState, useEffect} from 'react'
import {addTrack, setupPlayer} from "../musicPlayerServices"

function App(): JSX.Element {
  const [isPlayerReady, setIsPlayerReady] =useState(false);

async function setup(){
    let isSetup = await setupPlayer()
    if (isSetup){
      await addTrack()
    }
    setIsPlayerReady(isSetup)
}
  useEffect(() => {
    setup()
  }, [])
  if (!isPlayerReady){
    return (
      <SafeAreaView>
        <ActivityIndicator/>
      </SafeAreaView>
    )
  }
  return (
      <SafeAreaView>
        <StatusBar/>
            <View>
              <Text>App hello</Text>
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
