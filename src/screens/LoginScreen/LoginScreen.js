import React, { useState, useEffect } from "react";
import { View, Text, Alert, ScrollView } from "react-native";
import { styles } from "./styles";
import { HStack, Switch } from "native-base";
import { useDispatch, useSelector } from "react-redux";
import { updateUserInformation, updateUserType } from "../../redux/UserSlice";
import FormControlArea from "../../components/formControl/FormControlArea";
import PrimaryButton from "../../components/buttons/PrimaryButton";
import { fetchUsers, loginControl } from "../../services/service";
import COLORS from "../../theme/colors";

export default function LoginScreen({ navigation }) {
  const dispatch = useDispatch();
  const userInfo = useSelector((state) => state.user.userInfo);
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const fetchedUsers = await fetchUsers(userInfo.userType);
      setUsers(fetchedUsers);
    };
    fetchData();
  }, [userInfo.userType]);

  const handleSwitchChange = () => {
    const newUserType = userInfo.userType === "member" ? "admin" : "member";
    setUserName("");
    setPassword("");
    dispatch(updateUserType(newUserType));
  };

  const handleLogin = async () => {
    const isValid = await loginControl(userInfo.userType, userName, password);
    const user = users.find((user) => {
      if (userInfo.userType === "member") {
        return (
          user.memberUserName === userName && user.memberPassword === password
        );
      } else if (userInfo.userType === "admin") {
        return (
          user.adminUserName === userName && user.adminPassword === password
        );
      }
      return false;
    });

    if (isValid && user) {
      dispatch(
        updateUserInformation({
          userName: userName,
          userPassword: password,
          userId: user.id,
        })
      );
      navigation.navigate("HomeScreen");
    } else {
      Alert.alert("Login Failed", "Invalid username or password");
    }
  };

  return (
    <ScrollView
      style={{
        flex: 1,
        backgroundColor: COLORS.primaryBlue,
      }}
    >
      <View style={{ flex: 1, justifyContent: "center", marginTop: "12%" }}>
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
        <View
          style={{
            backgroundColor: COLORS.primaryBlue1,
            borderRadius: 10,
            marginHorizontal: "10%",
            paddingBottom: 60,
            marginTop: "5%",
          }}
        >
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
      </View>
    </ScrollView>
  );
}
