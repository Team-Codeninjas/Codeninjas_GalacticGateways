import { View,StyleSheet } from 'react-native'
import React from 'react'
import TicketPage from './screens/ticketDownload/TicketPage'

export default function App() {
  return(
    <View style={styles.container}>
      <TicketPage/>
    </View>
  )
}


const styles = StyleSheet.create({
  container:{
    flex:1,
  }
})