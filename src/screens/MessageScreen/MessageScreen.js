import { ImageBackground, ScrollView, Text, View } from "react-native";
import { useSelector } from "react-redux";
import { styles } from "./styles";
import MessageCard from "../../components/cards/MessageCard";
import { useEffect } from "react";
import { getMessages, sendMessage } from "../../services/service";

export default function MessageScreen() {
  const senderId = useSelector((state) => state.message.messageSenderId);
  const receiverId = useSelector((state) => state.message.messageReceiverId);
  const receiverUserName = useSelector(
    (state) => state.message.messageReceiverUserName
  );

  useEffect(() => {
    try {
      async function sendMes() {
        await sendMessage("1", "2", "3");
      }
      async function getMes() {
        const mess = await getMessages("1", "2");
        console.log(mess);
      }
    } catch (error) {
      throw error;
    }
    // sendMes();
    getMes();
  }, []);

  return (
    <ImageBackground
      style={styles.root}
      source={require("../../assets/background/books.png")}
    >
      <View style={styles.titleContainer}>
        <Text style={styles.title}>{receiverUserName.toUpperCase()}</Text>
      </View>
      <ScrollView>
        <MessageCard />
        <MessageCard
          messageOwner={"sender"}
          messageContext={"context"}
          date={"date"}
          name={"name" + ":"}
        />
      </ScrollView>
    </ImageBackground>
  );
}
