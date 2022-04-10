import { SearchBarIOS } from '@rneui/base/dist/SearchBar/SearchBar-ios';
import { Icon, ListItem, SearchBar } from '@rneui/themed';
import { Box, Button, HStack, Pressable, ScrollView, Text, View, VStack } from 'native-base';
import React from 'react';
import { useWindowDimensions, StyleSheet} from 'react-native';
import { TabView, TabBar, SceneMap } from 'react-native-tab-view';

var styles = StyleSheet.create({
    title: { 
      color: 'black', 
      fontWeight: 'bold' 
    },
    subtext: { 
      color: 'grey', 
      fontWeight: 'bold' 
    },
    subtitleView: {
      flexDirection: 'row',
      paddingLeft: 0,
      paddingTop: 5
    },
    ratingImage: {
      height: 19.21,
      width: 100
    },
    ratingText: {
      paddingLeft: 10,
      color: 'grey'
    },
    listContainer: {
        backgroundColor: '#e5e5e5',
        borderRadius: 10
    }
  });


function WOScreen(props) {
    const [status, setStatus] = React.useState(0) 
    const [selectedWo, setselectedWo] = React.useState({})
    const [wo,setWO] = React.useState([])
    React.useEffect(() => {
        setWO([{name:'Asset tagging',id:1, details:'Details of Asset tagging'},{name:'ITM Annual',id:2, details:'Details of hello2'},{name:'Corrective Maintenance',id:3},{name:'hello2',id:2},{name:'hello2',id:2},{name:'hello2',id:2},{name:'hello2',id:2},{name:'hello2',id:2},{name:'hello2',id:2},{name:'hello2',id:2}])
    },[])
    
    //Tab
    const FirstRoute = () => (
  <Box>
    <SearchBarIOS
    placeholder='Enter Search Text'/>

    <ScrollView>
                    <VStack space={3} padding={3}>
                    {
                        wo.map(item => 
                    <ListItem containerStyle={styles.listContainer} onPress={()=>{setselectedWo(item)}}>
                      <VStack alignItems={'center'}>
                      <Icon
                      size={40}
                        name='pending'
                        type='material'
                        color='grey'
                        />
                        <Text fontSize={10}>Pending</Text>
                      </VStack>
                        <ListItem.Content>
                            <ListItem.Title style={styles.title}>{item.name}</ListItem.Title>
                            <ListItem.Subtitle style={styles.subtitleView}>{'WO: '}{item.id}</ListItem.Subtitle>

                        </ListItem.Content>
                        <Text>10 Jan</Text>

                    </ListItem>
                        )
                        }
                    </VStack>
                    
                </ScrollView> 
</Box>
        
                     
    );
    const SecondRoute = () => (
    <View style={{ flex: 1, backgroundColor: 'darkgrey'}} >
        <Text>Tab2</Text>
    </View>
    );
    
    const layout = useWindowDimensions();
 
    const [index, setIndex] = React.useState(0);
    const [routes] = React.useState([
    { key: 'first', title: 'Pending' },
    { key: 'second', title: 'Completed' }
    ]);
 
    const renderScene = SceneMap({
    first: FirstRoute,
    second: SecondRoute
    });
    
    const renderTabBar = props => (
        <TabBar
            {...props}
            activeColor={'gray'}
            inactiveColor={'black'}
            style={{backgroundColor:'#fafbfc'}}
        />
    );
    //Tab End

    return (
      <Box padding={3} bgColor={'#E5E5E5'} flex={1}>
          <Box padding={2} rounded={15} bgColor={'white'} flex={1}>
          <HStack flex={1}>
            <Box bgColor={'white'} flex={1} borderRightWidth={1} borderColor={'#e5e5e5'}>
              <VStack flex={1} >
               <TabView
                navigationState={{ index, routes }}
                renderScene={renderScene}
                renderTabBar={renderTabBar}
                onIndexChange={setIndex}
                initialLayout={{ width: layout.width }}
                />
              </VStack>
            </Box>
            <Box bgColor={'white'} flex={2}>
              <VStack space={2} padding={2} flex={1}>
                  <VStack borderBottomWidth={1} borderColor={'#e5e5e5'}>
                    <Text style={styles.title}>{selectedWo.name}</Text>
                    <Text style={styles.subtext}>{selectedWo.id}</Text>
                  </VStack>
                  <ScrollView>
                    <Text>{selectedWo.details}</Text>      
                  </ScrollView>
                  <Box>
                    <Button>Continue</Button>
                  </Box>
              </VStack>
            </Box>
          </HStack>
          </Box>
      </Box>
    );
}

export default WOScreen;