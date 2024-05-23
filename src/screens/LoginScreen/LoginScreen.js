import React from "react";
import { ImageBackground, View, Text } from "react-native";
import { styles } from "./styles";
import { HStack, Switch } from "native-base";
import { useDispatch, useSelector } from "react-redux";
import { updateUserType } from "../../redux/UserSlice";
import FormControlArea from "../../components/formControl/FormControlArea";
import PrimaryButton from "../../components/buttons/PrimaryButton";

export default function LoginScreen({ navigation }) {
  const dispatch = useDispatch();
  const userInfo = useSelector((state) => state.user.userInfo);

  const handleSwitchChange = () => {
    const newUserType = userInfo.userType === "member" ? "admin" : "member";
    dispatch(updateUserType(newUserType));
  };

  const backgroundImg =
    userInfo.userType === "member"
      ? require("../../assets/background/member.png")
      : require("../../assets/background/admin.png");

  return (
    <ImageBackground style={styles.root} source={backgroundImg}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>{userInfo.userType.toUpperCase()}</Text>
      </View>
      <View style={styles.switchContainer}>
        <HStack alignItems="center" space={4}>
          <Text style={styles.switchText}>Member</Text>
          <Switch
            size="lg"
            isChecked={userInfo.userType === "admin"}
            onToggle={handleSwitchChange}
          />
          <Text style={styles.switchText}>Admin</Text>
        </HStack>
      </View>
      <View>
        <View style={styles.loginFormContainer}>
          <FormControlArea formName={"UserName"} formType={"text"} />
          <FormControlArea formName={"Password"} formType={"password"} />
        </View>
        <PrimaryButton
          btnName={"Log In"}
          style={styles.primaryButton}
          onPress={() => navigation.navigate("HomeScreen")}
        />
      </View>
    </ImageBackground>
  );
}
