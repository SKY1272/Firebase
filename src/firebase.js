
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
const firebaseConfig = {
  apiKey: "AIzaSyBfOlYCKAh4XCczGdRMqNVn3mZoWTIasRY",
  authDomain: "expensetracker-6b7be.firebaseapp.com",
  projectId: "expensetracker-6b7be",
  storageBucket: "expensetracker-6b7be.appspot.com",
  messagingSenderId: "521828206856",
  appId: "1:521828206856:web:2e555e73e439f4c44c04bd"
};


const app = initializeApp(firebaseConfig);
const auth=getAuth()
export {app,auth}