
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"

const firebaseConfig = {
    apiKey: "AIzaSyChWbUSZRa4pfLP5u5pcP-mdAHJhHp7c7Y",
    authDomain: "listed-6c73f.firebaseapp.com",
    projectId: "listed-6c73f",
 
};
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);