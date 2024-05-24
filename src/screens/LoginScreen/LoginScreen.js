import React, { useState } from "react";
import { ImageBackground, View, Text, Alert } from "react-native";
import { styles } from "./styles";
import { HStack, Switch } from "native-base";
import { useDispatch, useSelector } from "react-redux";
import { updateUserInformation, updateUserType } from "../../redux/UserSlice";
import FormControlArea from "../../components/formControl/FormControlArea";
import PrimaryButton from "../../components/buttons/PrimaryButton";
import { loginControl } from "../../services/service";

export default function LoginScreen({ navigation }) {
  const dispatch = useDispatch();
  const userInfo = useSelector((state) => state.user.userInfo);
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");

  const handleSwitchChange = () => {
    const newUserType = userInfo.userType === "member" ? "admin" : "member";
    setUserName("");
    setPassword("");
    dispatch(updateUserType(newUserType));
  };

  const handleLogin = async () => {
    isValid = true;
    // const isValid = await loginControl(userInfo.userType, userName, password);
    if (isValid) {
      dispatch(
        updateUserInformation({ userName: userName, userPassword: password })
      );
      navigation.navigate("HomeScreen");
    } else {
      Alert.alert("Login Failed", "Invalid username or password");
    }
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
          <FormControlArea
            formName={"UserName"}
            formType={"text"}
            value={userName}
            onChange={setUserName}
          />
          <FormControlArea
            formName={"Password"}
            formType={"password"}
            value={password}
            onChange={setPassword}
          />
        </View>
        <PrimaryButton
          btnName={"Log In"}
          style={styles.primaryButton}
          onPress={handleLogin}
        />
      </View>
    </ImageBackground>
  );
}
