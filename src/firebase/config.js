import { getApps, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
// import { getAnalytics } from "firebase/analytics";
// import { getPerformance } from "firebase/performance";

const firebaseConfig = {
  apiKey: "AIzaSyAVKPKL_Ljc5PyN-KCMo2_fQNOp1yg2fKY",
  authDomain: "sniphive.firebaseapp.com",
  projectId: "sniphive",
  storageBucket: "sniphive.appspot.com",
  messagingSenderId: "198836770420",
  appId: "1:198836770420:web:7cf4255415f56eb54a2321",
  measurementId: "G-9SKQ2PWQ22",
};

// export const initFirebase = () => {
//   if (!getApps().length) {
//     const app = initializeApp(firebaseConfig);

//     const auth = getAuth(app);

//     if (typeof window !== undefined) {
//       if ("measurementId" in firebaseConfig) {
//         const analytics = getAnalytics(app);
//         const preformance = getPerformance(app);
//       }
//     }

//     console.log("Initialized firebase");
//   } else {
//     console.log("Already Initializes firebase");
//   }
// };

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);

// Initialize Cloud Firestore and get a reference to the service
export const db = getFirestore(app);
