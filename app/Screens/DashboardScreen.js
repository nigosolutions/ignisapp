  import { 
    Box, 
    Heading, 
    AspectRatio, 
    Image, 
    Text, 
    Center, 
    HStack,
    Stack, 
    NativeBaseProvider, 
    VStack,
    Icon
  } from "native-base";

  import { MaterialCommunityIcons } from "@expo/vector-icons";

function DashboardScreen(props) {
    return (
 <Box flex={1}>
     <VStack mx={5} my={5} space={5}>
         <Text>Welcome Gokul!</Text>
         <HStack s>
             <Box bgColor={'amber.100'} h={100} width={200} >
                 <HStack mx={5} my={7} space={10} alignItems={'center'} >
                     <Icon 
                    size="10"
                    as={<MaterialCommunityIcons name="file" />} />
                    <Text>Hello</Text>
                 </HStack>
             </Box>
         </HStack>
     </VStack>
     </Box>    

    )
  }

  export default DashboardScreen;