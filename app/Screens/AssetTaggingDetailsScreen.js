import React from 'react';
import {Box, HStack, VStack, Text, ScrollView, Input, Button} from 'native-base'
import { StyleSheet, Image } from "react-native";
import { ListItem, Icon} from "@rneui/themed";
import * as ImagePicker from 'expo-image-picker';
import { TouchableOpacity } from 'react-native-gesture-handler';

function AssetTaggingDetailsScreen(props) {
    const [devDet, setDevDet] = React.useState([]);
    React.useEffect(() => {
        setDevDet([ 
            "Device type", "System", "Manufacturer Name", "Manufacturer Part no.", "Room No", "Floor No"
        //   {
        //     name: "Device 1",
        //     id: "AT3224",
        //     system: "System",
        //     manufacturer: "Manufacturer Name",
        //     partnum: "Manufacturer Part no.",
        //     location: { room: "Room No", floor: "Floor No"}
        //   }
        ]);
      }, []);

      // The path of the picked image
    const [pickedImagePath, setPickedImagePath] = React.useState('');

    //Upload image
    const showImagePicker = async () => {
        // Ask the user for the permission to access the media library 
        const permissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync();
    
        if (permissionResult.granted === false) {
          alert("You've refused to allow this appp to access your photos!");
          return;
        }
    
        const result = await ImagePicker.launchImageLibraryAsync();
    
        // Explore the result
        console.log(result);
    
        if (!result.cancelled) {
          setPickedImagePath(result.uri);
          console.log(result.uri);
        }
      }

      //Open Camera
      const openCamera = async () => {
        // Ask the user for the permission to access the camera
        const permissionResult = await ImagePicker.requestCameraPermissionsAsync();
    
        if (permissionResult.granted === false) {
          alert("You've refused to allow this appp to access your camera!");
          return;
        }
    
        const result = await ImagePicker.launchCameraAsync();
    
        // Explore the result
        console.log(result);
    
        if (!result.cancelled) {
          setPickedImagePath(result.uri);
          console.log(result.uri);
        }
      }

    return (
        <Box flex={1} padding={10}>
            <VStack space={10} flex={1}>
                <Text style={styles.desc_title}>Work Order #3224</Text>
                <Text style={styles.desc_title}>Asset Details</Text>
             <HStack>
                    <Box flex={1} >
                        <ScrollView contentContainerStyle={{alignItems:'center'}}>
                            {devDet.map((item) => (
                                <Input mx="3" placeholder={item} w="75%" margin={2} backgroundColor={'white'} height={50} />
                            )
                            )}
                        </ScrollView>
                    </Box>
                    <Box padding={10} flex={1} justifyContent={'center'} alignItems={'center'}>
                        {/* <Box style={styles.card} justifyContent={'center'} w="100%">
                            <Text>Image</Text>
                        </Box> */}
                        {pickedImagePath == '' ? (
                        <Box style={styles.card} padding={10} margin={10} w='100%' >
                            <TouchableOpacity onPress={showImagePicker}>
                                <VStack space={10} alignItems={'center'}>
                                    <Text style={styles.title}>Upload Image</Text>
                                    <Icon size={100} name="upload" type="material-community" color="grey" />
                                </VStack>
                            </TouchableOpacity>
                        </Box>
                        ):(
                        <Box style={styles.card} justifyContent={'center'} w="100%">
                            <Image flex={1}
                            source={{ uri: pickedImagePath }}
                            style={{width:'100%'}}
                              />
                        </Box>
                        )}
                    </Box>
                </HStack>
                <Box alignItems={'center'}>
                    <Button.Group space={2}>
                      <Button colorScheme="info">Save</Button>
                      <Button colorScheme="danger" onPress={()=>props.navigation.navigate('ATHome')}>Cancel</Button>
                    </Button.Group>               
                </Box>
            </VStack>
        </Box>
    );
}

var styles = StyleSheet.create({
    title: {
      color: "#4e5d78",
      fontWeight: "bold",
    },
    desc_title: {
      color: "#4e5d78",
      fontWeight: "bold",
      fontSize: 20,
    },
    subtext: {
      color: "#8a94a6",
      fontWeight: "bold",
    },
    listContainer: {
      backgroundColor: "#e5e5e5",
      borderRadius: 10,
    },
    selectedLC: {
      backgroundColor: "#ebf2ff",
      borderRadius: 10,
    },
    card: {
      backgroundColor: "white",
      borderRadius: 10,
      flex: 1,
      alignItems:'center',
      // height: 350,
    }
  });

export default AssetTaggingDetailsScreen;