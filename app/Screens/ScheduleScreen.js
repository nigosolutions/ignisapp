import MapView from "react-native-maps";
import { Box, Button, Text } from "native-base";
import React from "react";




function ScheduleScreen(props) {
  return (
    <Box flex={1}>
      <Box flex={1} justifyContent={'center'} alignItems={'center'}>
        <Button>Refersh</Button>
      </Box>
      <MapView
        flex={1}
        initialRegion={{
          latitude: 37.78825,
          longitude: -122.4324,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
      />
    </Box>
  );
}

export default ScheduleScreen;
