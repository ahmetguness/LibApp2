import { ImageBackground, ScrollView, Text, View } from "react-native";
import { useSelector } from "react-redux";
import { styles } from "./styles";
import MessageCard from "../../components/cards/MessageCard";

export default function MessageScreen() {
  const senderId = useSelector((state) => state.message.messageSenderId);
  const receiverId = useSelector((state) => state.message.messageReceiverId);
  const receiverUserName = useSelector(
    (state) => state.message.messageReceiverUserName
  );

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
          name={"name"+":"}
        />
      </ScrollView>
    </ImageBackground>
  );
}
