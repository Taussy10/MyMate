import { StyleSheet, Image, Text, View, ScrollView, FlatList, TouchableOpacity } from 'react-native'
import React,{useState} from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { FontAwesome } from '@expo/vector-icons';
import {
    widthToDP as wp,
    heightToDP as hp,
    widthToFonts as wf,
    heightToFonts as hf,
  } from "react-native-responsive-screens";
import Features from '../Components/Features';
import { dummyMessages } from '../Constants/Index';
import * as Speech from 'expo-speech';

console.log(dummyMessages);
  const Home = () => {
    const [messages, setMessages] = useState(dummyMessages)
    const [recording, setRecording] = useState(false)
    // const [say, setSay] = useState(false)


    let thingToSay;
    const speak = () => {
        thingToSay = "I see, you're using Tailwind CSS with the help of NativeWind in React Native. In that case, you can apply Tailwind CSS classes directly to your components. However, it's essential to ensure that your project is set up correctly to use Tailwind CSS with NativeWind. ";
        Speech.speak(thingToSay);
      };


// console.log(speak());


    const record = () =>{
      setRecording(true)
    }


    const clear = () =>{
        setMessages([]) 
    }
    
    const stop = () =>{
     setRecording(false)
    }

  return (
    <SafeAreaView className="flex-1  p-6   ">

        {/* TODO: Always wrap any image into view */}
        {/*TODO: Justify content is for horizontal and allign-itmes/items-center is for vertical
         */}
        <View className="bg-green-400   items-center ">
            <Image source={require("../../assets/Images/Test.png")} style={styles.image}  />

            {/* <Text>Hello</Text> */}
        </View>

        {/* Show feature or functionality */}
        {
            messages.length >0
            ? 
            (
                <View className="space-y-2 flex-1  ">
                    <Text style={{fontSize: wp(9) }} className=" text-gray-700     text-center font-semibold ml-1 ">Assistant</Text>
                    
                    <View style={{height: hp(8)}}
                    className=" flex-1 bg-neutral-300 rounded-3xl p-4"
                    >
                  <ScrollView
                  bounces={false}
                  showsVerticalScrollIndicator={false}
                  className=" space-y-4"

                  >
               {/* <FlatList 
               data={messages}
               renderItem={({item}) =>
            (
                <View>
                      <Text>{item.content}</Text>
                    <Text>{item.content}</Text>
                </View>
            )
            }
               /> */}
               {
                messages.map((messages, index) => {
                    // return(
                    //     <View>
                    //         <Text>{messages.content}</Text>
                    //     </View>
                    // )
           if (messages.role === 'assistant') {
            if (messages.content.includes("https")) {
                // It's an image
                return (
          <View key={index} className=" flex-row justify-center p-4 flex rounded-2xl bg-emerald-200
          rounded-tl-none   ">
    <Image 
    source={{uri: messages.content}}
    style={{width: wp(80), height: wp(50),}} className="rounded-2xl" resizeMode='contain'
    />
          </View>

) 
            }else{
                // It's a text response
                return(
                <View key={index} className="flex-row  justify-start" 
                
                >
                    <View  style={{width:wp(70) }}    className=" bg-emerald-200 rounded-xl p-2 rounded-tl-none ">
                    <Text>{messages.content }</Text>

                    </View>
                </View>) 
            }
            
           } else {
            // It's user
            return(
                <View key={index} className="flex-row justify-end" 
                
                >
                    <View  style={{width:wp(70) }}    className="bg-white rounded-xl p-2 rounded-tr-none ">
                    <Text>{messages.content }</Text>

                    </View>
                </View>
            ) 
           }

                }) 
               }
            </ScrollView>
                    </View>
                </View>
            ) 
            :
            (
                <View>
                    <Features/>
                </View>
                
            )
        }



      {/* For Recording clear and stop buttons */}
      <View className=" p-3  bg-gray-500 items-center justify-between flex-row"> 

      {
        recording  ?
        (
            
      <TouchableOpacity onPress={() => {stop() , Speech.stop()  }}
    //   due to justify in vertical and items center is in horizontal
      className=" rounded-xl bg-red-600 h-12   w-20 justify-center  items-center"
      >
       <Text className="text-xl text-white font-bold">Stop</Text>
      </TouchableOpacity>
      ) :
      (
                 <View>
{/* so that stop is not on then it something should be there otherwise 
it flex will be disrupt and items won't allign properly */}
                </View>       
                ) 
       
}
     

   {  
//    onPress={() => {record , speak()  }}
// onPress={() => {record(); speak(); }}
    !recording ?
    // onPress={() => {record , speak  }} Instaed of calling function you refrence then it won't work cause in first render it will remove callback then when you click it will call the funtion
     
   <TouchableOpacity onPress={() => {record() , speak()  }}
    //   due to justify in vertical and items center is in horizontal
      className="   rounded-[50px]   bg-green-700 h-16 p-2   w-16 justify-center  items-center"
      >
        <FontAwesome name="microphone" size={24} color="white" />

       {/* <Text className="text-xl text-white font-bold">Clear</Text> */}
      </TouchableOpacity>
      :
      <Image source={require("../../assets/GIF/Mic.gif")  }  style={{ width: wp(20), 
        height: hp(10), borderRadius:40}} />
}


      {
        // () 
        // what does it mean
        messages.length>0 && (
            <TouchableOpacity onPress={clear}
            //   due to justify in vertical and items center is in horizontal
              className=" rounded-xl    bg-black h-12   w-20 justify-center  items-center"
              >
               <Text className="text-xl text-white font-bold">Clear</Text>
              </TouchableOpacity>
        )  
   
      
      }


      </View>
      
      
    </SafeAreaView>
  )
}

export default Home

const styles = StyleSheet.create({
    image:{
        width: wp(20),
        height: hp(15),
    }
})