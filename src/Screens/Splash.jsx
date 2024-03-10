import { StyleSheet, Text, View , Image, TouchableOpacity} from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import {
    widthToDP as wp,
    heightToDP as hp,
    widthToFonts as wf,
    heightToFonts as hf,
  } from "react-native-responsive-screens";
  
const Splash = ({navigation}) => {
  return (
    <SafeAreaView className="flex-1  p-5  items-center justify-center ">
        {/*  style={{fontSize: wp(10)}} I'm not able to use this it's giving error */}
      <Text className=" text-4xl  font-bold mt-3" >MyMate </Text>
      <Text className=" text-gray-700  mt-2 text-2xl">Talk with your Mate </Text>
      <Image  source={require("../../assets/Images/Test.png") } 
     style={styles.image}/>
      <TouchableOpacity onPress={()=> navigation.navigate("Home") } className="w-80 h-16  bg-green-600 mt-6 p-4 items-center rounded-2xl	">
        <Text className="text-white text-2xl"> Start Talking </Text>
      </TouchableOpacity>
 
    </SafeAreaView>
  )
}

export default Splash

const styles = StyleSheet.create({
    image:{
        height: hp(75),
        width: wp(75),

    }
})