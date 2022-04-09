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
    Icon,
    Button
  } from "native-base";


  import { MaterialCommunityIcons } from "@expo/vector-icons";

function DashboardScreen(props) {
    return (
 <Box flex={1}>
     <VStack mx={5} my={5} space={5}>
         <Text>Welcome Gokul!</Text>
         <VStack rounded={20} padding={3} bgColor={'#fafbfc'} space={5}>
             <Text>Overview</Text>
             <HStack height={160} justifyContent={'center'} space={3}>
                <Box rounded={15} bgColor={'#fff'} flex={1} >
                    <HStack mx={5} my={7} space={10} alignItems={'center'} >
                        <Icon 
                        size="10"
                        as={<MaterialCommunityIcons name="pending" />} />
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

         </VStack>
     </VStack>
     </Box>    

    )
  }

  export default DashboardScreen;