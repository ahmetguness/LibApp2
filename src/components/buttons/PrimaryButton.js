import { Box, Button } from "native-base";

export default function PrimaryButton({ btnName, onPress, style }) {
  return (
    <Box alignItems="center" style={style}>
      <Button onPress={onPress}>{btnName}</Button>
    </Box>
  );
}
