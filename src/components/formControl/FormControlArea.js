import React from "react";
import {
  Box,
  FormControl,
  Input,
  Stack,
  WarningOutlineIcon,
} from "native-base";

export default function FormControlArea({
  formName,
  formType,
  value,
  onChange,
}) {
  return (
    <Box alignItems="center">
      <Box w="100%" maxWidth="300px">
        <FormControl isRequired>
          <Stack mx="4">
            <FormControl.Label
              _text={{
                fontSize: "lg",
                color: "black",
                fontWeight: "bold",
              }}
            >
              {formName}
            </FormControl.Label>
            <Input
              type={formType}
              value={value}
              onChangeText={onChange}
              placeholder={formName}
            />
            <FormControl.HelperText>
              Must be at least 3 characters.
            </FormControl.HelperText>
            <FormControl.ErrorMessage
              leftIcon={<WarningOutlineIcon size="xs" />}
            >
              At least 6 characters are required.
            </FormControl.ErrorMessage>
          </Stack>
        </FormControl>
      </Box>
    </Box>
  );
}
