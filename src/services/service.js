import db from "./config.js";
import { collection, query, where, getDocs, addDoc } from "firebase/firestore";

export async function loginControl(userType, userName, password) {
  try {
    const loginRef = collection(db, userType);
    const q = query(
      loginRef,
      where(`${userType}UserName`, "==", userName),
      where(`${userType}Password`, "==", password)
    );

    const querySnapshot = await getDocs(q);

    if (!querySnapshot.empty) {
      return true;
    } else {
      return false;
    }
  } catch (error) {
    console.error("ERROR: ", error);
    return false;
  }
}

export async function listCategories() {
  try {
    const categoriesRef = collection(db, "categories");
    const querySnapshot = await getDocs(categoriesRef);

    const categories = [];
    querySnapshot.forEach((doc) => {
      categories.push({ id: doc.id, ...doc.data() });
    });

    return categories;
  } catch (error) {
    console.error("ERROR: ", error);
    return [];
  }
}

export async function listBooksByCategory(categoryId) {
  try {
    const booksRef = collection(db, `categories/${categoryId}/books`);
    const querySnapshot = await getDocs(booksRef);

    const books = [];
    querySnapshot.forEach((doc) => {
      books.push({ id: doc.id, ...doc.data() });
    });

    return books;
  } catch (error) {
    console.error("ERROR: ", error);
    return [];
  }
}

export async function fetchUsers(userType) {
  try {
    const userRef = collection(db, userType);
    const querySnapshot = await getDocs(userRef);

    const users = [];
    querySnapshot.forEach((doc) => {
      users.push({ id: doc.id, ...doc.data() });
    });
    return users;
  } catch (error) {
    console.log("ERROR: ", error);
    return [];
  }
}

export async function sendMessage(senderId, receiverId, messageContext) {
  try {
    const messagesRef = collection(db, "messages");
    const message = {
      senderId,
      receiverId,
      messageContext,
      date: new Date().toISOString(),
    };
    await addDoc(messagesRef, message);
  } catch (error) {
    throw error;
  }
}

export async function getMessages(senderId, receiverId) {
  try {
    const messagesRef = collection(db, "messages");
    const q = query(
      messagesRef,
      where("senderId", "==", senderId),
      where("receiverId", "==", receiverId)
    );

    const querySnapshot = await getDocs(q);

    const messages = [];
    querySnapshot.forEach((doc) => {
      const data = doc.data();
      messages.push({
        id: doc.id,
        ...data,
        date: data.date ? data.date.toDate().toISOString() : null,
      });
    });

    return messages;
  } catch (error) {
    throw error;
  }
}
