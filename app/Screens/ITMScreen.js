import { Box, Button, HStack, VStack, Text, ScrollView, Select, CheckIcon } from 'native-base';
import { FAB, ListItem, SearchBar, Icon } from "@rneui/themed";
import React from 'react';
import { StyleSheet } from 'react-native';
import { SearchBarIOS } from '@rneui/base/dist/SearchBar/SearchBar-ios';
// import AudioRecorderPlayer, { 
//   AVEncoderAudioQualityIOSType,
//   AVEncodingOption, 
//   AudioEncoderAndroidType,
//   AudioSet,
//   AudioSourceAndroidType, 
//  } from 'react-native-audio-recorder-player';
import { Audio } from 'expo-av';
import { TouchableOpacity } from 'react-native-gesture-handler';

function ITMScreen(props) {
    const [dev, setDev] = React.useState([
        {
          name: "Device 1",
          id: "AT3223",
          details: "Details of Asset tagging",
          date: "10 Jan",
          location: {
            Floor: 10,
            Room: 2
          },
          building: {
            name: "Building 1",
            location: { address: "XYZ street", coords: [25.2854, 51.531] },
          },
          status: "completed",
        },
        {
          name: "Device 2",
          id: "AT3224",
          details: "Details of Asset tagging",
          date: "10 Jan",
          location: {
            Floor: 10,
            Room: 3
          },
          building: {
            name: "Building 1",
            location: { address: "XYZ street", coords: [25.2854, 51.531] },
          },
          status: "completed",
        },
        {
            name: "Device 3",
            id: "AT3225",
            details: "Details of Asset tagging",
            date: "10 Jan",
            location: {
              Floor: 10,
              Room: 3
            },
            building: {
              name: "Building 1",
              location: { address: "XYZ street", coords: [25.2854, 51.531] },
            },
            status: "pending",
          },
          {
            name: "Device 3",
            id: "AT3225",
            details: "Details of Asset tagging",
            date: "10 Jan",
            location: {
              Floor: 10,
              Room: 3
            },
            building: {
              name: "Building 1",
              location: { address: "XYZ street", coords: [25.2854, 51.531] },
            },
            status: "pending",
          },
      ]);
    const [service, setService] = React.useState("");
    const [loc, setLoc] = React.useState([
      {
        Floor:1,
        Rooms:[1,2,3,4,5]
      },
      {
        Floor:2,
        Rooms:[1,2,3,4]
      },
      {
        Floor:3,
        Rooms:[1,2,3,4,5,6]
      },
    ]);


    // //Audio Recorder
    // const [isLoggingIn,setIsLoggingIn] = React.useState(false);
    // const [recordSecs,setRecordSecs] = React.useState(0);
    // const [recordTime,setRecordTime] = React.useState('00:00:00');
    // const [currentPositionSec,setCurrentPositionSec] = React.useState(0);
    // const [currentDurationSec,setCurrentDurationSec] = React.useState(0);
    // const [playTime,setPlayTime] = React.useState('00:00:00');
    // const [duration,setDuration] = React.useState('00:00:00');

    // const audioRecorderPlayer = new AudioRecorderPlayer();

    // const onStartRecord = async () => {
    
    //   const path = 'hello.m4a';
    //   const audioSet = {
    //     AudioEncoderAndroid: AudioEncoderAndroidType.AAC,
    //     AudioSourceAndroid: AudioSourceAndroidType.MIC,
    //     AVEncoderAudioQualityKeyIOS: AVEncoderAudioQualityIOSType.high,
    //     AVNumberOfChannelsKeyIOS: 2,
    //     AVFormatIDKeyIOS: AVEncodingOption.aac,
    //   };
    //   console.log('audioSet', audioSet);
    //   const uri = await audioRecorderPlayer.startRecorder(path, audioSet);
    //   audioRecorderPlayer.addRecordBackListener((e) => {
    //     setRecordSecs(e.current_position),
    //     setRecordTime(audioRecorderPlayer.mmssss(
    //           Math.floor(e.current_position),
    //         ),)
    //     // this.setState({
    //     //   recordSecs: e.current_position,
    //     //   recordTime: this.audioRecorderPlayer.mmssss(
    //     //     Math.floor(e.current_position),
    //     //   ),
    //     // });
    //   });
    //   console.log(`uri: ${uri}`);
    // };

    //Audio recorder 2
    const [recording, setRecording] = React.useState();
    const [audioPath, setAudioPath] = React.useState();

    async function startRecording() {
      try {
        console.log('Requesting permissions..');
        await Audio.requestPermissionsAsync();
        await Audio.setAudioModeAsync({
          allowsRecordingIOS: true,
          playsInSilentModeIOS: true,
        }); 
        console.log('Starting recording..');
        const { recording } = await Audio.Recording.createAsync(
           Audio.RECORDING_OPTIONS_PRESET_HIGH_QUALITY
        );
        setRecording(recording);
        console.log('Recording started');
      } catch (err) {
        console.error('Failed to start recording', err);
      }
    };
  
    async function stopRecording() {
      console.log('Stopping recording..');
      setRecording(undefined);
      await recording.stopAndUnloadAsync();
      const uri = recording.getURI(); 
      setAudioPath(uri);
      console.log('Recording stopped and stored at', uri);
    };

    //Playing audio
    const [sound, setSound] = React.useState();

    async function playSound() {

      try{
        console.log('Loading Sound');
        const { sound } = await Audio.Sound.createAsync(
          // require('./assets/Hello.mp3')
          {uri:audioPath}
        );
        setSound(sound);
    
        console.log('Playing Sound');
        await sound.playAsync(); 
        // await sound.unloadAsync();
      } catch (error) {
        // An error occurred!
        console.error('Failed to start playing', err);
      }
      };
      
      
  
    React.useEffect(() => {
      return sound
        ? () => {
            console.log('Unloading Sound');
            sound.unloadAsync(); }
        : undefined;
    }, [sound]);
  

    return (
        <Box flex={1}>
            <VStack flex={1} mx={5} my={5} space={5}>
                <HStack rounded={20} padding={5} bgColor={"white"} space={5}>
                    <VStack flex={2} space={2}>
                        <Text style={styles.title}>Work Order</Text>
                        <Text style={styles.desc_title}>Type</Text>
                        <Text style={styles.desc_title}>Building</Text>
                    </VStack>
                    <VStack flex={1} space={3} justifyContent='center' alignItems='center'>
                        <Text>Progress</Text>
                        <FAB color='#4e5d78' bgColor='#4e5d78' title='Make a Request'/>
                    </VStack>
                    <VStack flex={1} space={3} justifyContent='center' alignItems='center'>
                        <FAB color="#377DFF" title='Start'/>
                        <FAB color="#377DFF" title='Submit'/>
                    </VStack>
                </HStack>
                <VStack rounded={20} padding={3} bgColor={"white"} space={5}>
                  <HStack>
                    <HStack borderBottomWidth={1} borderColor={"#e5e5e5"} padding={0} space={10} flex={1}>
                        {/* <Box justifyContent={'center'}>
                        <Text style={styles.subtext}>Pending</Text>
                        </Box> */}
                        <Box w="3/4" maxW="200">
                          <Select selectedValue={service} minWidth="200" accessibilityLabel="Status" placeholder="Status" _selectedItem={{
                          bg: "teal.600",
                          endIcon: <CheckIcon size="5" />
                        }} mt={1} onValueChange={itemValue => setService(itemValue)}>
                            <Select.Item label="Pending" value="pending" />
                            <Select.Item label="Completed" value="completed" />
                            <Select.Item label="Waiting" value="waiting" />
                            <Select.Item label="In Progress" value="progress" />
                          </Select>
                        </Box>
                        <Box flex={1}>
                          <SearchBar
                            placeholder="Enter Search Text"
                            round
                            containerStyle={{ backgroundColor: "white" }}
                            inputContainerStyle={{ backgroundColor: "#e5e5e5" }}
                            lightTheme
                          />
                        </Box>
                    </HStack>
                    <HStack borderBottomWidth={1} borderColor={"#e5e5e5"} padding={0} space={10} flex={1} justifyContent='flex-end'>
                        {/* <Box justifyContent={'center'}>
                        <Text style={styles.subtext}>Pending</Text>
                        </Box> */}
                        <Box w="3/4" maxW="200">
                          <Select selectedValue={service} minWidth="200" accessibilityLabel="Floor" placeholder="Status" _selectedItem={{
                          bg: "teal.600",
                          endIcon: <CheckIcon size="5" />
                        }} mt={1} onValueChange={itemValue => setService(itemValue)}>
                            <Select.Item label="Floor 1" value="pending" />
                            <Select.Item label="Floor 2" value="completed" />
                          </Select>
                        </Box>
                        <Box w="3/4" maxW="200">
                          <Select selectedValue={service} minWidth="200" accessibilityLabel="Room" placeholder="Status" _selectedItem={{
                          bg: "teal.600",
                          endIcon: <CheckIcon size="5" />
                        }} mt={1} onValueChange={itemValue => setService(itemValue)}>
                            <Select.Item label="Room 1" value="pending" />
                            <Select.Item label="Room 2" value="completed" />
                          </Select>
                        </Box>
                    </HStack>
                  </HStack>
                    <Box>
                        <ScrollView>
                        <Box
                            space={3}
                            flexDirection={"row"}
                            flexWrap={"wrap"}
                            justifyContent={"space-between"}
                        >
                            {dev.map((item) => (
                                <ListItem
                                // backgroundColor={"#e5e5e5"}
                                margin={5}
                                // width={150}
                                containerStyle={styles.listContainer}
                                >
                                <VStack space={1} flex={1} alignItems='center'>
                                    <ListItem.Title style={styles.title}>
                                    {item.name}
                                    </ListItem.Title>
                                    <ListItem.Subtitle style={styles.subtext}>
                                    Room: {item.location.Room}
                                    </ListItem.Subtitle>
                                    <ListItem.Subtitle style={styles.subtext}>
                                    Floor: {item.location.Floor}
                                    </ListItem.Subtitle>
                                </VStack>
                                </ListItem>
                            ))}
                        </Box>
                        </ScrollView>
                    </Box>
                    <HStack space={5}>
                      <Button onPress={recording ? stopRecording : startRecording}>
                        {recording ? 'Stop Recording' : 'Start Recording'}
                      </Button>
                      { audioPath ?  (
                        <HStack space={3}>
                          <Button onPress={playSound}>Play</Button>
                          <Button onPress={()=>setAudioPath(undefined)}>Clear</Button>
                        </HStack>
                        ):(undefined)}
                      {/* <Button onPress={() => onStartRecord()}>Record</Button> */}
                      {/* <Button>Stop</Button> */}
                      {/* <Text>{recordTime}</Text> */}
                    </HStack>
                    <VStack>
                      <TouchableOpacity onPress={recording ? stopRecording : startRecording}>
                        {recording ? (
                          <Icon size={40} name="stop" type="material-community" color="grey" />
                        ):(
                          <Icon size={40} name="microphone" type="material-community" color="grey" />
                        )}
                      </TouchableOpacity>
                      { audioPath ?  (
                      <HStack justifyContent={'center'}>
                        <TouchableOpacity onPress={playSound}>
                          <Icon size={40} name="play" type="material-community" color="grey" />
                        </TouchableOpacity>
                        <TouchableOpacity onPress={()=>setAudioPath(undefined)}>
                          <Icon size={40} name="close" type="material-community" color="grey" />
                        </TouchableOpacity>
                      </HStack>
                      ):(undefined)}
                    </VStack>
                    
                </VStack>
            </VStack>
        </Box>
    );
}

var styles = StyleSheet.create({
    title: {
        color: "#4e5d78",
        fontWeight: "bold",
        fontSize: 20
      },
      desc_title: {
        color: "#4e5d78",
        fontWeight: "bold",
        fontSize: 15,
      },
      subtext: {
        color: "#99879D",
        fontWeight: "normal",
        fontSize: 15
      },
      listContainer: {
        backgroundColor: "#fafbfc",
        borderRadius: 10,
        width: 150
      },
}
)

export default ITMScreen;