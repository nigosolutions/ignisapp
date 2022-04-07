import { Center, NativeBaseProvider, Box, VStack, HStack, Icon, Button} from 'native-base';
import * as React from 'react';
import { View, useWindowDimensions, Text} from 'react-native';
import { TabView, TabBar, SceneMap } from 'react-native-tab-view';
import { MaterialCommunityIcons } from "@expo/vector-icons";
 
const FirstRoute = () => (
//   <View style={{ flex: 1, backgroundColor: 'grey'}}>
//   	<Text>Tab One</Text>
//   </View>
<HStack height={160} justifyContent={'center'} space={3} padding={3}>
<Box rounded={15} bgColor={'#fff'} flex={1} >
    <HStack mx={5} my={7} space={10} alignItems={'center'} >
        <Icon 
        size="10"
        as={<MaterialCommunityIcons name="file" />} />
        <Text>Hello</Text>
    </HStack>
</Box>
<Box  alignItems={'center'} justifyContent={'center'} rounded={15} bgColor={'#fff'} flex={1} >
    <HStack alignItems={'center'} space={10} >
        <Icon 
        size="10"
        as={<MaterialCommunityIcons name="file" />} />
        <Text>Hello</Text>
    </HStack>
</Box>
<Box rounded={15} bgColor={'#fff'} flex={1}>
    <HStack mx={5} my={7} space={10} alignItems={'center'} >
        <Icon 
        size="10"
        as={<MaterialCommunityIcons name="file" />} />
        <Text>Hello</Text>
    </HStack>
</Box>
<Box alignItems={'center'} justifyContent={'center'} flex={3/4}>
    <Button width={'3/4'} >Work Orders</Button>
</Box>
</HStack>
);
const SecondRoute = () => (
    <HStack height={160} justifyContent={'center'} space={3} padding={3}>
    <Box rounded={15} bgColor={'#fff'} flex={1} >
        <HStack mx={5} my={7} space={10} alignItems={'center'} >
            <Icon 
            size="10"
            as={<MaterialCommunityIcons name="file" />} />
            <Text>Hello</Text>
        </HStack>
    </Box>
    <Box  alignItems={'center'} justifyContent={'center'} rounded={15} bgColor={'#fff'} flex={1} >
        <HStack alignItems={'center'} space={10} >
            <Icon 
            size="10"
            as={<MaterialCommunityIcons name="file" />} />
            <Text>Hello</Text>
        </HStack>
    </Box>
    <Box rounded={15} bgColor={'#fff'} flex={1}>
        <HStack mx={5} my={7} space={10} alignItems={'center'} >
            <Icon 
            size="10"
            as={<MaterialCommunityIcons name="file" />} />
            <Text>Hello</Text>
        </HStack>
    </Box>
    <Box alignItems={'center'} justifyContent={'center'} flex={3/4}>
        <Button width={'3/4'} >Work Orders</Button>
    </Box>
    </HStack>
);
const ThirdRoute = () => (
    <View style={{ flex: 1, backgroundColor: 'darkgrey'}} >
        <Text>Tab Three</Text>
    </View>
);
const FourthRoute = () => (
    <View style={{ flex: 1, backgroundColor: 'darkgrey'}} >
        <Text>Tab Four</Text>
    </View>
);
 
export default function TabViewExample() {
  const layout = useWindowDimensions();
 
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
  { key: 'first', title: 'Week' },
  { key: 'second', title: 'Month' },
  { key: 'third', title: 'Quarter' },
  { key: 'fourth', title: 'Year' },
  ]);
 
  const renderScene = SceneMap({
  first: FirstRoute,
  second: SecondRoute,
  third: ThirdRoute,
  fourth: FourthRoute
  });
 
  const renderTabBar = props => (
  	<TabBar
     	 {...props}
      	activeColor={'gray'}
      	inactiveColor={'black'}
          style={{marginTop:25,backgroundColor:'#fafbfc'}}
  	/>
  );
 
  return (
      
    <Box flex={1}>
        <VStack mx={5} my={5} space={5} flex={1}>
            <Text>Hello World!</Text>
            <VStack rounded={20} padding={3} bgColor={'#fafbfc'} space={0} flex={1}>
                <Text>Overview</Text>
                <HStack flex={1}>
                    <TabView
            navigationState={{ index, routes }}
            renderScene={renderScene}
            renderTabBar={renderTabBar}
            onIndexChange={setIndex}
            initialLayout={{ width: layout.width }}
        />
                </HStack>
            </VStack>
        </VStack>
    </Box>
      
  );
}
