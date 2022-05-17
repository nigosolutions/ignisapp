import React from 'react';
import {Box, HStack, VStack, Text} from 'native-base'
import { StyleSheet } from "react-native";
import { Icon } from "@rneui/themed";
import { TouchableOpacity } from 'react-native-gesture-handler';

function AssetTaggingPhotoScreen(props) {
    return (
        <Box flex={1} padding={10}>
            <VStack space={10} flex={1}>
                <Text style={styles.desc_title}>Work Order #3224</Text>
                <VStack flex={1}>
                    <Text style={styles.desc_title}>Add Asset Photo</Text>
                    <HStack justifyContent={'space-around'} flex={1}>
                        <Box style={styles.card} padding={10} margin={10}>
                            <TouchableOpacity onPress={()=>{console.log('Open Camera')}}>
                                <VStack space={10} alignItems={'center'}>
                                    <Text style={styles.title}>Open Camera</Text>
                                    <Icon size={200} name="camera" type="material-community" color="grey" />
                                </VStack>
                            </TouchableOpacity>
                        </Box>
                        <Box style={styles.card} padding={10} margin={10}>
                            <TouchableOpacity onPress={()=>props.navigation.navigate('Details')}>
                                <VStack space={10} alignItems={'center'}>
                                    <Text style={styles.title}>Upload Image</Text>
                                    <Icon size={200} name="upload" type="material-community" color="grey" />
                                </VStack>
                            </TouchableOpacity>
                        </Box>
                    </HStack>
                </VStack>
                
            </VStack>
        </Box>
    );
}

var styles = StyleSheet.create({
    title: {
      color: "black",
      fontWeight:'500',
      fontSize: 20
    },
    desc_title: {
      color: "#4e5d78",
      fontWeight: "bold",
      fontSize: 20,
    },
    subtext: {
      color: "#99879D",
      fontWeight: "normal",
    },
    card: {
      backgroundColor: "white",
      borderRadius: 10,
      flex: 1,
      alignItems:'center',
      height: 350,
    }
  });

export default AssetTaggingPhotoScreen;