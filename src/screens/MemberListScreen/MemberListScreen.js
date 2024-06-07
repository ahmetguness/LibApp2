import React, { useEffect, useState } from "react";
import { ImageBackground, View, FlatList } from "react-native";
import { styles } from "./styles";
import { fetchUsers, fetchReservedBooks } from "../../services/service";
import MemberListCard from "../../components/cards/MemberListCard";
import { Heading } from "native-base";
import { useDispatch, useSelector } from "react-redux";
import {
  updateMessageReceiverInfo,
  updateMessageReceiverUserName,
  updateReceiverId,
  updateSenderId,
} from "../../redux/MessageSlice";

export default function MemberListScreen({ navigation }) {
  const [members, setMembers] = useState([]);
  const dispatcher = useDispatch();
  const userId = useSelector((state) => state.user.userInfo.userId);
  const userType = useSelector((state) => state.user.userInfo.userType);

  const listType = userType === "member" ? "admin" : "member";

  useEffect(() => {
    async function getMembers() {
      try {
        const memberList = await fetchUsers(listType);
        setMembers(memberList);
      } catch (error) {
        console.error(error);
      }
    }

    getMembers();
  }, [listType]);

  

  const renderMember = ({ item }) => (
    <MemberListCard
      memberName={
        listType === "admin" ? item.adminUserName : item.memberUserName
      }
      onPressDel={() => console.log("del")}
      onPressMessage={() => {
        navigation.navigate("MessageScreen");
        dispatcher(updateSenderId(userId));
        dispatcher(updateReceiverId(item.id));
        dispatcher(
          updateMessageReceiverUserName(
            listType === "admin" ? item.adminUserName : item.memberUserName
          )
        );
      }}
    />
  );

  return (
    <ImageBackground
      style={styles.root}
      source={require("../../assets/background/books.png")}
    >
      <View style={styles.headingContainer}>
        <Heading>Member List</Heading>
      </View>
      <FlatList
        data={members}
        renderItem={renderMember}
        keyExtractor={(item) => item.id}
      />
    </ImageBackground>
  );
}
