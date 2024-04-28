<template>
  <v-app-bar color="blue" :elevation="1" rounded class="text-left" density="compact">
    <v-app-bar-nav-icon>
      <v-icon>mdi-lightning-bolt</v-icon>
    </v-app-bar-nav-icon>
    <v-app-bar-title>
      Panva
    </v-app-bar-title>
    <v-toolbar-title class=""></v-toolbar-title>
    <template v-slot:append >
      <v-divider class="px-2" vertical thickness="3px"></v-divider>


      <v-btn color="primary" @click="logout" icon="mdi-logout"></v-btn>
    </template>
  </v-app-bar>
</template>

<script setup>
// Import ref and useRouter from 'vue'
import { ref } from 'vue';
import { useRouter } from 'vue-router';  
const router = useRouter();  // Initialize the router
const signedIn = ref(false);

import { onAuthStateChanged, signOut } from 'firebase/auth';  // Import onAuthStateChanged and signOut from 'firebase/auth'
import { auth } from '../plugins/firebase';  // Import auth from '../firebase'


onAuthStateChanged(auth, (user) => {
  signedIn.value = !!user;
});

const goToHome = () => {
  router.push({ name: 'Home' });  // Use router.push() to navigate
};

const logout = async () => {
  try {
    await signOut(auth);
    router.push({ name: 'LoginView' });  // Navigate after signing out
  } catch (error) {
    console.error(error);
  }
};
</script>

