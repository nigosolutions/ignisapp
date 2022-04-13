import { Box, Text, Center, HStack, VStack, Button } from "native-base";

import { Icon, ListItem } from "@rneui/themed";
import { StyleSheet } from "react-native";

var styles = StyleSheet.create({
  listContainer: {
    backgroundColor: "white",
    borderRadius: 10,
  },
});

function DashboardScreen(props) {
  return (
    <Box flex={1}>
      <VStack mx={5} my={5} space={5}>
        <Text>Welcome Gokul!</Text>
        <VStack rounded={20} padding={3} bgColor={"#fafbfc"} space={5}>
          <Text>Overview</Text>
          <HStack justifyContent={"center"} space={3}>
            <ListItem containerStyle={styles.listContainer} flex={"1"}>
              <Icon
                reverse
                name="pending-actions"
                type="material"
                color="rgba(255, 182, 72, 0.2)"
                reverseColor="rgba(255, 182, 72,1)'"
              />
              <VStack space={1}>
                <ListItem.Title>100</ListItem.Title>
                <ListItem.Subtitle>Pending</ListItem.Subtitle>
              </VStack>
            </ListItem>

            <ListItem containerStyle={styles.listContainer} flex={"1"}>
              <Icon
                reverse
                name="pending-actions"
                type="material"
                color="rgba(255, 182, 72, 0.2)"
                reverseColor="rgba(255, 182, 72,1)'"
              />
              <VStack space={1}>
                <ListItem.Title>100</ListItem.Title>
                <ListItem.Subtitle>In Progress</ListItem.Subtitle>
              </VStack>
            </ListItem>

            <ListItem containerStyle={styles.listContainer} flex={"1"}>
              <Icon
                reverse
                name="pending-actions"
                type="material"
                color="rgba(255, 182, 72, 0.2)"
                reverseColor="rgba(255, 182, 72,1)'"
              />
              <VStack space={1}>
                <ListItem.Title>100</ListItem.Title>
                <ListItem.Subtitle>Completed</ListItem.Subtitle>
              </VStack>
            </ListItem>

            <Box alignItems={"center"} justifyContent={"center"} flex={3 / 4}>
              <Button width={"3/4"}>Work Orders</Button>
            </Box>
          </HStack>
        </VStack>
      </VStack>
    </Box>
  );
}

export default DashboardScreen;
