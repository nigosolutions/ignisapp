import { ListItem } from "@rneui/themed";
import { Box, HStack, Text, VStack } from "native-base";
import React from "react";

function AssetTaggingScreen(props) {
  const [dev, setDev] = React.useState([]);
  React.useEffect(() => {
    setDev([
      {
        name: "Device ",
        id: 'AT3224',
        details: "Details of Asset tagging",
        date: "10 Jan",
        building: { name: "Building 1", location: {address:"XYZ street", coords:[25.2854,51.5310]}},
        status: 'pending'
      },
      {
        name: "Device ",
        id: 'AT3224',
        details: "Details of Asset tagging",
        date: "10 Jan",
        building: { name: "Building 1", location: {address:"XYZ street", coords:[25.2854,51.5310]}},
        status: 'pending'
      },
      {
        name: "Device ",
        id: 'AT3224',
        details: "Details of Asset tagging",
        date: "10 Jan",
        building: { name: "Building 1", location: {address:"XYZ street", coords:[25.2854,51.5310]}},
        status: 'pending'
      },
      {
        name: "Device ",
        id: 'AT3224',
        details: "Details of Asset tagging",
        date: "10 Jan",
        building: { name: "Building 1", location: {address:"XYZ street", coords:[25.2854,51.5310]}},
        status: 'pending'
      },
      {
        name: "Device ",
        id: 'AT3224',
        details: "Details of Asset tagging",
        date: "10 Jan",
        building: { name: "Building 1", location: {address:"XYZ street", coords:[25.2854,51.5310]}},
        status: 'pending'
      },
      {
        name: "Device ",
        id: 'AT3224',
        details: "Details of Asset tagging",
        date: "10 Jan",
        building: { name: "Building 1", location: {address:"XYZ street", coords:[25.2854,51.5310]}},
        status: 'pending'
      },
      {
        name: "Device ",
        id: 'AT3224',
        details: "Details of Asset tagging",
        date: "10 Jan",
        building: { name: "Building 1", location: {address:"XYZ street", coords:[25.2854,51.5310]}},
        status: 'pending'
      },
      {
        name: "Device ",
        id: 'AT3224',
        details: "Details of Asset tagging",
        date: "10 Jan",
        building: { name: "Building 1", location: {address:"XYZ street", coords:[25.2854,51.5310]}},
        status: 'pending'
      },
      {
        name: "Device ",
        id: 'AT3224',
        details: "Details of Asset tagging",
        date: "10 Jan",
        building: { name: "Building 1", location: {address:"XYZ street", coords:[25.2854,51.5310]}},
        status: 'pending'
      },
      {
        name: "Device ",
        id: 'AT3224',
        details: "Details of Asset tagging",
        date: "10 Jan",
        building: { name: "Building 1", location: {address:"XYZ street", coords:[25.2854,51.5310]}},
        status: 'pending'
      },
      {
        name: "Device ",
        id: 'AT3224',
        details: "Details of Asset tagging",
        date: "10 Jan",
        building: { name: "Building 1", location: {address:"XYZ street", coords:[25.2854,51.5310]}},
        status: 'pending'
      },
      {
        name: "Device ",
        id: 'AT3224',
        details: "Details of Asset tagging",
        date: "10 Jan",
        building: { name: "Building 1", location: {address:"XYZ street", coords:[25.2854,51.5310]}},
        status: 'pending'
      }
    ]);
  }, []);
  return (
    <Box flex={1} padding={5}>
      <VStack space={3} flex={1}>
        <Box rounded={10} flex={1} bgColor={"white"}>
          <VStack>
            <HStack></HStack>
          </VStack>
        </Box>
        <Box flex={3}>
            <VStack space={3}>
            <Text>Assets</Text>
            <Box space={3} flexDirection={'row'} flexWrap={'wrap'} padding={5}>
            {dev.map((item) => (
                <ListItem padding={10}>
                    <ListItem.Title>{item.name}</ListItem.Title>
                </ListItem>
            ))}
            </Box>
            </VStack>

        </Box>
      </VStack>
    </Box>
  );
}

export default AssetTaggingScreen;
