<template>
    <v-row justify="space-around">
        <v-col 
            cols="12" 
            sm="8"
            md="4"

            

            >
            <v-card flat class="text-center">
                    <div  class="mt-10">
                        
                        <v-icon color="amber" size="75">mdi-lightning-bolt</v-icon>
                        <div class="text-h4 text-blue my-4">Boilerplate</div>
                    </div>
                    
                    <v-text-field
                        id="email"
                        color="primary"
                        label="Email"
                        variant="outlined"
                        density="compact"

                        v-model="email"
                    ></v-text-field>
                    <v-text-field
                        label="Password"
                        color="blue"
                        id="password"
                        type="password"
                        variant="outlined"
                        density="compact"
                        v-model="password"
                    ></v-text-field>
                    <v-btn id="login" rounded flat @click="login" color="blue" :loading="loading">Login</v-btn>

                </v-card>

        </v-col>
    </v-row>




</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import { auth } from '../plugins/firebase'
import { signInWithEmailAndPassword} from "firebase/auth";

let router = useRouter()
let email = ref(null)
let password = ref(null)

let loading = ref(false)

const login = async () => {
    loading = true
    console.log(email)

    try {
        await signInWithEmailAndPassword(auth, email.value, password.value);
        router.push({name: 'HomeView'})
        // Successful login
    } catch (error) {
        // Invalid username or password
        console.error(error);
        // Handle the error here, e.g. show an error message to the user
    } finally {
        loading = false;
    }
}



onMounted(() => {
    document.getElementById("email").focus()
    var input = document.getElementById("password");
    // Execute a function when the user releases a key on the keyboard
    input.addEventListener("keyup", function(event) {
        // Number 13 is the "Enter" key on the keyboard
        if (event.keyCode === 13) {
            // Cancel the default action, if needed
            event.preventDefault();
            // Trigger the button element with a click
            document.getElementById("login").click();
        }
    });
})
</script>
