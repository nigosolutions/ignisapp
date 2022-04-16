import { Box, Text, HStack, VStack } from "native-base";
import { Button, Icon, ListItem } from "@rneui/themed";
import { StyleSheet } from "react-native";
import Calendar from "react-native-big-calendar";

const events = [
  {
    title: "Asset Tagging",
    start: "2022-04-15T08:05:49.292Z",
    end: "2022-04-15T14:08:49.292Z",
  },
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
        <Box padding={3} rounded={10} bgColor={"white"} flex={1}>
          <Calendar events={events} height={600} />
        </Box>
      </VStack>
    </Box>
  );
}

export default DashboardScreen;
