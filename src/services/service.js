import db from "./config.js";
import {
  collection,
  query,
  where,
  getDocs,
  addDoc,
  doc,
  updateDoc,
  getDoc,
} from "firebase/firestore";

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
      });
    });

    return messages;
  } catch (error) {
    throw error;
  }
}

export async function reserveBook(memberId, reservedBooks) {
  try {
    const memberDocRef = doc(db, "member", memberId);

    await updateDoc(memberDocRef, {
      reservedBooks: reservedBooks,
    });

    return true;
  } catch (error) {
    console.error("ERROR: ", error);
    return false;
  }
}

export async function fetchReservedBooks(memberId) {
  try {
    const memberDocRef = doc(db, "member", memberId);
    const memberDoc = await getDoc(memberDocRef);

    if (memberDoc.exists()) {
      const data = memberDoc.data();
      return data.reservedBooks || {};
    } else {
      console.error("No such document!");
      return {};
    }
  } catch (error) {
    console.error("ERROR: ", error);
    return {};
  }
}

export async function getReservedBooksInfo(reservedBooksObj) {
  try {
    const reservedBooksInfo = {};

    for (const [categoryId, bookIds] of Object.entries(reservedBooksObj)) {
      reservedBooksInfo[categoryId] = [];

      for (const bookId of bookIds) {
        const bookDocRef = doc(db, `categories/${categoryId}/books`, bookId);
        const bookDoc = await getDoc(bookDocRef);

        if (bookDoc.exists()) {
          reservedBooksInfo[categoryId].push({ id: bookId, ...bookDoc.data() });
        } else {
          console.error(`No such document for bookId: ${bookId}`);
        }
      }
    }

    return reservedBooksInfo;
  } catch (error) {
    console.error("ERROR: ", error);
    throw error;
  }
}

export async function fetchCategories() {
  try {
    const categoriesRef = collection(db, "categories");
    const querySnapshot = await getDocs(categoriesRef);

    const categories = {};
    querySnapshot.forEach((doc) => {
      const data = doc.data();
      categories[doc.id] = data.categoryName;
    });

    return categories;
  } catch (error) {
    console.error("ERROR: ", error);
    throw error;
  }
}
export async function addBook(categoryId, bookInfo) {
  try {
    const booksRef = collection(db, `categories/${categoryId}/books`);
    await addDoc(booksRef, {
      bookAuthor: bookInfo.bookAuthor,
      bookImg: bookInfo.bookImg,
      bookName: bookInfo.bookName,
      bookSum: bookInfo.bookSum,
    });

    return true;
  } catch (error) {
    console.error("ERROR: ", error);
    throw error;
  }
}

export async function addCategory(categoryName, categoryImg) {
  try {
    const categoriesRef = collection(db, "categories");
    const newCategory = {
      categoryName: categoryName,
      categoryImg: categoryImg,
    };
    await addDoc(categoriesRef, newCategory);
    return true;
  } catch (error) {
    console.error("ERROR: ", error);
    throw error;
  }
}