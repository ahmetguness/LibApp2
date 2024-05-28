import { ImageBackground, View } from "react-native";
import { styles } from "./styles";
import { useEffect, useState } from "react";
import { fetchUsers } from "../../services/service";
import MemberListCard from "../../components/cards/MemberListCard";
import { Heading } from "native-base";

export default function MemberListScreen() {
  const [members, setMembers] = useState([]);

  useEffect(() => {
    try {
      async function getMembers() {
        const memberList = await fetchUsers("member");
        setMembers(memberList);
      }
    } catch (error) {
      throw error;
    }
    getMembers();
  }, []);
  console.log(members);

  return (
    <ImageBackground
      style={styles.root}
      source={require("../../assets/background/books.png")}
    >
      <View style={styles.headingContainer}>
        <Heading>Member List</Heading>
      </View>
      <MemberListCard memberName={"Ahmet"} />
    </ImageBackground>
  );
}
