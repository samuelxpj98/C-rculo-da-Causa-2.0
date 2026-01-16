import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Configuração do Firebase para o projeto Vibe Teen
const firebaseConfig = {
  apiKey: "AIzaSyAXP8095JDr1Ck1xFOoF5lCREE9VxXMUJw",
  authDomain: "vibe-teen.firebaseapp.com",
  projectId: "vibe-teen",
  storageBucket: "vibe-teen.firebasestorage.app",
  messagingSenderId: "137191414500",
  appId: "1:137191414500:web:8ad24baadb6aafe6ff2af1"
};

// Inicializa o Firebase
const app = initializeApp(firebaseConfig);

// Exporta o Banco de Dados (Firestore) para ser usado no App.tsx
export const db = getFirestore(app);