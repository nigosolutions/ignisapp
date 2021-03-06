import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AssetTaggingDetailsScreen from "./AssetTaggingDetailsScreen";
import AssetTaggingScreen from './AssetTaggingScreen';
import AssetTaggingPhotoScreen from './AssetTaggingPhotoScreen';
import WOScreen from './WOScreen';

const ATNav = createNativeStackNavigator();

function AssetTaggingNav(props) {
    return (
    <NavigationContainer independent={true}>
      <ATNav.Navigator>
        <ATNav.Screen
          name="Home"
          component={WOScreen}
          options={{ title: 'Work Orders' , headerShown: false}}
        />
        <ATNav.Screen
          name="ATHome"
          component={AssetTaggingScreen}
          options={{ title: 'Asset Tagging'}}
        />
        <ATNav.Screen
          name="Photo"
          component={AssetTaggingPhotoScreen}
          options={{ title: 'Device Photo' }}
        />
        <ATNav.Screen
          name="Details"
          component={AssetTaggingDetailsScreen}
          options={{ title: 'Device Details' }}
        />
        
      </ATNav.Navigator>
    </NavigationContainer>
    );
}

export default AssetTaggingNav;