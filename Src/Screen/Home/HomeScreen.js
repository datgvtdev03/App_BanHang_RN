import React from "react";
import { View, Text, Image, StyleSheet, TextInput} from "react-native";

export default function HomeScreen(navigation) {
  return (
    <View style={[styles.container, {flexDirection: 'column',}]}>

    <View style={{flex: 1, backgroundColor: 'red', borderWidth: 2, borderColor: 'red', width: '100%', flexDirection: 'row', alignItems: 'center'}}>

    <Image source={require('../../../assets/icon.png')} style={{width: 30, height: 30}}/>
    <Text style={{fontSize: 15, fontWeight: 'bold', color: 'white', marginTop: 5, marginLeft: 5}}>Tech Store</Text>
    </View>

    <View style={{flex: 10, backgroundColor: 'darkorange', width: "100%"}}>
      <View style={{backgroundColor: "#ffffff", width: '90%', height: 47, alignSelf: 'center', marginTop: 11, borderRadius: 10,marginLeft: 16,  flexDirection: 'row', alignItems: 'center'}}>
          <Image 
          style={{width: 20, height:20, marginLeft: 16}}
          source={require('../../../assets/search.png')}/>
          <TextInput
          placeholder='Tìm kiếm sản phẩm'
          placeholderTextColor='#808080'
          onChangeText={() => {}}
          />
      </View>
    </View>

    <View style={{flex: 1, backgroundColor: 'green', width: "100%"}}>
      
    </View>

    <View style={{flex: 1, backgroundColor: 'yellow', width: "100%"}} />
  </View>
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});