import db from "./config.js";
import { collection, query, where, getDocs } from "firebase/firestore";

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
