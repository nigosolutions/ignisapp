import { FAB, Text } from '@rneui/base';
import { Box, HStack, VStack } from 'native-base';
import * as React from 'react';
import { View, StyleSheet, Dimensions, StatusBar } from 'react-native';
import { TabView, SceneMap } from 'react-native-tab-view';

const FirstRoute = () => (
  <View style={[styles.scene, { backgroundColor: '#ff4081' }]} />
);

const SecondRoute = () => (
  <View style={[styles.scene, { backgroundColor: '#673ab7' }]} />
);

const ThirdRoute = () => (
    <View style={[styles.scene, { backgroundColor: '#673ab7' }]} />
  );

const initialLayout = { width: Dimensions.get('window').width };

const renderScene = SceneMap({
  first: FirstRoute,
  second: SecondRoute,
  third: ThirdRoute,
});

export default function ITMExeSubScreen() {
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: 'first', title: 'Inspection' },
    { key: 'second', title: 'Testing' },
    { key: 'third', title: 'Maintenance' },

  ]);

  return (
      <VStack space={5} padding={10} flex={1}>
          <HStack space={5}>
          <Box padding={5} rounded={10} bgColor={'white'} flex={3}>
              <HStack>
                  <VStack flex={2} space={2}>
                  <Text>Control Valve</Text>
                  <Text>Location:</Text>
                  <Text>Room No:</Text>
                  <Text>Floor No:</Text>
                  <Text>Room No:</Text>
                  <Text>Building No:</Text>
                  </VStack>
                  <Box bgColor={'green.100'} flex={1}>
                  </Box>
              </HStack>
          </Box>
          <VStack justifyContent={'center'} space={5} padding={5} flex={1}>
          <FAB color='#377DFF' bgColor='#377DFF'title={'Save'}/>
          <FAB color='#4e5d78' bgColor='#4e5d78'title={'Skip'}/>
          </VStack>
          </HStack>
          <Box rounded={10} bgColor={'white'} flex={3}>
    <TabView
      navigationState={{ index, routes }}
      renderScene={renderScene}
      onIndexChange={setIndex}
      initialLayout={initialLayout}
      style={styles.container}
    />
    </Box>
    </VStack>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: StatusBar.currentHeight,
  },
  scene: {
    flex: 1,
  },
});
