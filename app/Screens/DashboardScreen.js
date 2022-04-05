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
    VStack
  } from "native-base";

function DashboardScreen(props) {
    return (
 <Box flex={1}>
     <VStack mx={5} my={5} space={5}>
         <Text>Welcome Gokul!</Text>
         <HStack s>
             <Box bgColor={'amber.100'} h={100} width={200} >
                 <Text>
                     Hello
                 </Text>
             </Box>
         </HStack>
     </VStack>
     </Box>    

    )
  }

  export default DashboardScreen;