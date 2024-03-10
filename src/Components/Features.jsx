import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import {
    widthToDP as wp,
    heightToDP as hp,
    widthToFonts as wf,
    heightToFonts as hf,
  } from "react-native-responsive-screens";
  
//   ()
const Features = () => {
  return (
    // TODO: space-x-4
    <View style={{height: hp(60) }} className="space-x-4">
        {/*  */}
      <Text style={{fontSize: wp(6.5) }} className="font-semibold text-gray-700" >Features</Text>

      {/* Wrap everything in View */}
        <View className=" p-4  rounded-xl   bg-emerald-500 mb-5  ">
        {/* for image */}
        <View className="flex-row items-center space-x-1 mb-2 " >
            <Image source={require("../../assets/Images/DALL-E.png")}
            style={{height: hp(5) , width: wp(10)   }}
            />
            <Text className="  mx-2 font-semibold   text-white" style={{fontSize: wp(4.8)}}>Genrate Images</Text>
        </View>
        <Text className="  text-white font-medium" style={{fontSize: wp(4) }} >
        ChatGPT is an AI-powered language model developed by OpenAI, capable of generating human-like text based on context and past conversations.</Text>
      </View>

      {/*         ChatGPT is an AI-powered language model developed by OpenAI, capable of generating human-like text based on context and past conversations.</Text>
 */}
      <View className=" p-4  rounded-xl  bg-gray-800 mb-5  ">
        {/* for image */}
        <View className="flex-row items-center space-x-1 mb-2 " >
            <Image source={require("../../assets/Images/DALL-E.png")}
            style={{height: hp(5) , width: wp(10)   }}
            />
            <Text className="  mx-2 font-semibold   text-white" style={{fontSize: wp(4.8)}}>Genrate Images</Text>
        </View>
        <Text className="  text-white font-medium" style={{fontSize: wp(4) }} >
        DALL·E 2 is an AI system that can create realistic images and art from a description in natural language.</Text>
      </View>

      <View className=" p-4  rounded-xl   bg-blue-500 mb-5  ">
        {/* for image */}
        <View className="flex-row items-center space-x-1 mb-2 " >
            <Image source={require("../../assets/Images/SmartAI.png")}
            style={{height: hp(5) , width: wp(14),   borderColor:'white'  }}
            />
            <Text className="  font-semibold   text-white" style={{fontSize: wp(4.8)}}> Smart AI</Text>
        </View>
         <Text className="  text-white font-medium" style={{fontSize: wp(4) }} >
         A powerful voice assistant with the abilites of ChatGPT and Dall-E, providing you the best of both worlds.
         </Text>
      </View>
     
      
      
    </View >
  )
}

export default Features

const styles = StyleSheet.create({})