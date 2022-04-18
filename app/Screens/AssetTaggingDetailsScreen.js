import React from 'react';
import {Box, HStack, VStack, Text, ScrollView, Input, Button} from 'native-base'
import { StyleSheet } from "react-native";
import { ListItem } from "@rneui/themed";

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
                        <Box style={styles.card} justifyContent={'center'} w="100%">
                            <Text>Image</Text>
                        </Box>
                    </Box>
                </HStack>
                <Box alignItems={'center'}>
                    <Button.Group space={2}>
                      <Button colorScheme="info">Save</Button>
                      <Button colorScheme="danger">Cancel</Button>
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
      height: 350,
    }
  });

export default AssetTaggingDetailsScreen;