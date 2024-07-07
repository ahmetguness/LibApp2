import {
  ImageBackground,
  ScrollView,
  Text,
  View,
  TextInput,
  Button,
} from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { styles } from "./styles";
import MessageCard from "../../components/cards/MessageCard";
import { useEffect, useState } from "react";
import { getMessages, sendMessage } from "../../services/service";
import { addMessage, setMessages } from "../../redux/MessageSlice";

export default function MessageScreen() {
  const dispatch = useDispatch();
  const senderId = useSelector((state) => state.message.messageSenderId);
  const receiverId = useSelector((state) => state.message.messageReceiverId);
  const receiverUserName = useSelector(
    (state) => state.message.messageReceiverUserName
  );
  const messages = useSelector((state) => state.message.messages);

  const [newMessage, setNewMessage] = useState("");

  useEffect(() => {
    async function fetchMessages() {
      try {
        const fetchedMessages = await getMessages(senderId, receiverId);
        console.log("Fetched messages:", fetchedMessages); // Log fetched messages for debugging

        // Ensure each message has a valid date
        const formattedMessages = fetchedMessages.map((msg) => ({
          ...msg,
          date: msg.date ? new Date(msg.date).toISOString() : new Date().toISOString(), // Convert date to ISO string if necessary
        }));
        dispatch(setMessages(formattedMessages));
      } catch (error) {
        console.error("Error fetching messages:", error);
      }
    }

    fetchMessages();
  }, [dispatch, senderId, receiverId]);

  const handleSendMessage = async () => {
    try {
      const messageDate = new Date().toISOString();
      await sendMessage(senderId, receiverId, newMessage);
      dispatch(
        addMessage({
          id: new Date().getTime(), // Ensure unique id for new message
          senderId,
          receiverId,
          messageContext: newMessage,
          date: messageDate,
        })
      );
      setNewMessage("");
    } catch (error) {
      console.error("Error sending message:", error);
    }
  };

  return (
    <ImageBackground
      style={styles.root}
      source={require("../../assets/background/books.png")}
    >
      <View style={styles.titleContainer}>
        <Text style={styles.title}>{receiverUserName.toUpperCase()}</Text>
      </View>
      <ScrollView>
        {messages.map((message) => (
          <MessageCard
            key={message.id}
            messageOwner={message.senderId === senderId ? "sender" : "receiver"}
            messageContext={message.messageContext}
            date={new Date(message.date).toDateString()}
            name={message.senderId === senderId ? "You" : receiverUserName}
          />
        ))}
      </ScrollView>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          value={newMessage}
          onChangeText={setNewMessage}
          placeholder="Type a message"
        />
        <Button title="Send" onPress={handleSendMessage} />
      </View>
    </ImageBackground>
  );
}
