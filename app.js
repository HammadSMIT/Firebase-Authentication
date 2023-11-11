 import { initializeApp } from "https://www.gstatic.com/firebasejs/10.6.0/firebase-app.js";
 import { getAuth , createUserWithEmailAndPassword , signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.6.0/firebase-auth.js";

 const firebaseConfig = {
   apiKey: "AIzaSyBR9wc81pZ7-Sa_fVcRQKE-VCMbAh4Z3Wo",
   authDomain: "smitb10-8d5cb.firebaseapp.com",
   projectId: "smitb10-8d5cb",
   storageBucket: "smitb10-8d5cb.appspot.com",
   messagingSenderId: "282733667161",
   appId: "1:282733667161:web:6646aeef6f51da1be7e248",
   measurementId: "G-T4HJE3VGH3"
 };

 const app = initializeApp(firebaseConfig);
 const auth = getAuth(app);
//  let btn = document.querySelector("#SU-btn")
//  btn.addEventListener("click", ()=>{
        

//     let getEmail = document.querySelector("#Semail")
//     let getPass = document.querySelector("#Spass")  
 
     
//     createUserWithEmailAndPassword(auth , getEmail.value , getPass.value)
//     .then((userCredential) => {
//       const user = userCredential.user;
//       console.log(user)
//     })
//     .catch((error) => {
//       const errorCode = error.code;
//       const errorMessage = error.message;
//       console.log("error code >>>> " ,  errorCode)
//       console.log("error message >>>> " ,  errorMessage)  
  
  
//   });
//  })

 let btn = document.querySelector("#SI-btn")
 btn.addEventListener("click", ()=>{

    let email = document.querySelector("#Lemail")
    let password = document.querySelector("#Lpass")

        

signInWithEmailAndPassword(auth, email.value , password.value )
  .then((userCredential) => {
    const user = userCredential.user;
    console.log(user.email)
    
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.log(error)
  });

})