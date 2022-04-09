import { Badge } from '@rneui/base';
import { ListItem } from '@rneui/themed';
import { Box, Button, HStack, Pressable, ScrollView, Text, View, VStack } from 'native-base';
import React from 'react';
import { useWindowDimensions, StyleSheet} from 'react-native';
import { TabView, TabBar, SceneMap } from 'react-native-tab-view';

var styles = StyleSheet.create({
    title: { 
      color: 'white', 
      fontWeight: 'bold' 
    },
    subtitleView: {
      flexDirection: 'row',
      paddingLeft: 10,
      paddingTop: 5
    },
    ratingImage: {
      height: 19.21,
      width: 100
    },
    ratingText: {
      paddingLeft: 10,
      color: 'grey'
    }
  });


function WOScreen(props) {
    const [status, setStatus] = React.useState(0) 
    const [wo,setWO] = React.useState([])
    React.useEffect(() => {
        setWO([{name:'hello1',id:5},{name:'hello2',id:2},{name:'hello2',id:2},{name:'hello2',id:2},{name:'hello2',id:2},{name:'hello2',id:2},{name:'hello2',id:2},{name:'hello2',id:2},{name:'hello2',id:2},{name:'hello2',id:2}])
    },[])
    
    //Tab
    const FirstRoute = () => (
        <ScrollView>
                    <VStack>
                    {
                        wo.map(item => 
                    <ListItem>
                         <Badge
                            value={3}
                            textStyle={{ color: 'orange' }}
                            containerStyle={{ marginTop: -20 }}
                        />
                        <ListItem.Content>
                            <ListItem.Title style={styles.title}>{item.name}</ListItem.Title>
                            <ListItem.Subtitle style={styles.subtitleView}>{item.id}</ListItem.Subtitle>

                        </ListItem.Content>

                    </ListItem>
                        )
                        }
                    </VStack>
                    
                </ScrollView> 
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
      <Box padding={10} bgColor={'white'} flex={1}>
          <HStack flex={1}>
              <Box bgColor={'amber.100'} flex={1}>
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
              <VStack>
               <Text>Hello</Text>
              </VStack>
              </Box>
          </HStack>
      </Box>
    );
}

export default WOScreen;