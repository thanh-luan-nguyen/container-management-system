// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app"
import { collection, doc, getDoc, getDocs, getFirestore, onSnapshot, query, where } from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

export const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_APP_ID,
  measurementId: process.env.NEXT_PUBLIC_MEASUREMENT_ID,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig)
const db = getFirestore(app)
// const analytics = getAnalytics(app);

export class CloudFirestore {
  static getAllContainersRealTimeSnapshot = (useStateCallback) => {
    const containerRef = collection(db, 'containers')
    return onSnapshot(containerRef, docs => {
      const containers = []
      docs.forEach(doc => containers.push({...doc.data(), id: doc.id}))
      useStateCallback(containers)
    })
  }

  static getOneContainerSnapshot = (id, useStateCallback) => {
    const containerRef = doc(db, 'containers', id)
    return getDoc(containerRef).then(docSnap => {
      useStateCallback(docSnap.data())
    })
  }
}