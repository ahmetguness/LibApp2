import db from "./config.js";
import {
  collection,
  query,
  where,
  getDocs,
  getDoc,
  arrayUnion,
  doc,
  updateDoc,
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

export async function addMemberFavorites(memberId, userFavs) {
  try {
    const memberRef = doc(db, "member", memberId);

    const favoritesArray = [];
    for (const categoryId in userFavs) {
      if (userFavs.hasOwnProperty(categoryId)) {
        const bookId = userFavs[categoryId];
        favoritesArray.push(`${categoryId}:${bookId}`);
      }
    }

    await updateDoc(memberRef, {
      memberFavorites: arrayUnion(...favoritesArray),
    });

    console.log("Favorites updated successfully");
  } catch (error) {
    console.error("ERROR: ", error);
  }
}
