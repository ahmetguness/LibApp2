import { Box, Divider, Heading, Icon, Input, VStack } from "native-base";
import { Ionicons, MaterialIcons } from "@expo/vector-icons";
import { View } from "react-native";

export default function SearchBar({ searchBarTitle, searchBarPlaceHolder }) {
  return (
    <View style={{ alignItems: "center" }}>
      <VStack
        my="4"
        space={5}
        w="90%"
        divider={
          <Box px="2">
            <Divider />
          </Box>
        }
      >
        <VStack w="100%" space={5} alignSelf="center">
          <View style={{ alignItems: "center" }}>
            <Heading color="white" fontSize="4xl">
              {searchBarTitle}
            </Heading>
          </View>
          <Input
            placeholder={searchBarPlaceHolder}
            width="100%"
            borderRadius="4"
            py="3"
            px="1"
            fontSize="16"
            borderWidth="2.5"
            InputLeftElement={
              <Icon
                m="2"
                ml="3"
                size="6"
                color="gray.400"
                as={<MaterialIcons name="search" />}
              />
            }
            InputRightElement={null}
          />
        </VStack>
      </VStack>
    </View>
  );
}
