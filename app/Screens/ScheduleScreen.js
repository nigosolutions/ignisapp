import { Box } from "native-base";
import React from "react";
import Calendar from "react-native-big-calendar";

const events = [
  {
    title: "Asset Tagging",
    start: "2022-04-15T08:05:49.292Z",
    end: "2022-04-15T14:08:49.292Z",
  },
];



function ScheduleScreen(props) {
  return (
    <Box padding={5} flex={1} bgColor={"white"}>
      <Calendar  events={events} height={100} mode="month" />
    </Box>
  );
}

export default ScheduleScreen;
