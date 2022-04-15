import { Box, Text, Center, HStack, VStack } from "native-base";

import { Button, Icon, ListItem } from "@rneui/themed";
import { StyleSheet } from "react-native";
import WeekView from "react-native-week-view";

const myEvents = [
  {
    id: 1,
    description: "Event",
    startDate: new Date(2021, 3, 15, 12, 0),
    endDate: new Date(2021, 3, 15, 12, 30),
    color: "blue",
    // ... more properties if needed,
  },
  // More events...
];

var styles = StyleSheet.create({
  listContainer: {
    backgroundColor: "white",
    borderRadius: 10,
  },
});

function DashboardScreen(props) {
  return (
    <Box flex={1}>
      <VStack flex={1} mx={5} my={5} space={5}>
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
                <ListItem.Subtitle style={{ color: "grey" }}>
                  Pending
                </ListItem.Subtitle>
              </VStack>
            </ListItem>

            <ListItem containerStyle={styles.listContainer} flex={"1"}>
              <Icon
                reverse
                name="progress-clock"
                type="material-community"
                color="rgba(47, 73, 209, 0.2)"
                reverseColor="rgba(47, 73, 209,1)'"
              />
              <VStack space={1}>
                <ListItem.Title>100</ListItem.Title>
                <ListItem.Subtitle style={{ color: "grey" }}>
                  In Progress
                </ListItem.Subtitle>
              </VStack>
            </ListItem>

            <ListItem containerStyle={styles.listContainer} flex={"1"}>
              <Icon
                reverse
                name="done-all"
                type="material"
                color="rgba(75, 222, 151, 0.2)"
                reverseColor="rgba(75, 222, 151, 1)'"
              />
              <VStack space={1}>
                <ListItem.Title>100</ListItem.Title>
                <ListItem.Subtitle style={{ color: "grey" }}>
                  Completed
                </ListItem.Subtitle>
              </VStack>
            </ListItem>

            <Box alignItems={"center"} justifyContent={"center"} flex={3 / 4}>
              <Button
                title="Work Orders"
                buttonStyle={{
                  borderRadius: 30,
                }}
              />
            </Box>
          </HStack>
        </VStack>
        <Box rounded={5} bgColor={"white"} flex={1}>
          <WeekView
            headerStyle={{
              backgroundColor: "lightgrey",
            
              color: "#fff",
              borderColor: "#fff",
              borderRadius:1
            }}
            events={myEvents}
            selectedDate={new Date(2021, 3, 15)}
            numberOfDays={7}
          />
        </Box>
      </VStack>
    </Box>
  );
}

export default DashboardScreen;
