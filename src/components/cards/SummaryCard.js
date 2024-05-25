import { Badge, Box, Flex, HStack, Pressable, Spacer, Text } from "native-base";

export default function SummaryCard({
  bookName,
  bookAuthor,
  bookSum,
  onPress,
}) {
  return (
    <Box alignItems="center">
      <Pressable
        onPress={onPress}
        rounded="8"
        overflow="hidden"
        borderWidth="1"
        borderColor="coolGray.300"
        maxW="96"
        shadow="3"
        bg="coolGray.100"
        p="5"
      >
        <Box>
          <HStack alignItems="center">
            <Badge
              colorScheme="darkBlue"
              _text={{
                color: "white",
              }}
              variant="solid"
              rounded="4"
            >
              Summary
            </Badge>
            <Spacer />
            <Text fontSize={10} color="coolGray.800">
              {bookAuthor}
            </Text>
          </HStack>
          <Text color="coolGray.800" mt="3" fontWeight="medium" fontSize="xl">
            {bookName}
          </Text>
          <Text mt="2" fontSize="sm" color="coolGray.700">
            {bookSum}
          </Text>
          <Flex>
            <Text mt="2" fontSize={12} fontWeight="medium" color="darkBlue.600">
              Reserve for more!!
            </Text>
          </Flex>
        </Box>
      </Pressable>
    </Box>
  );
}
