// import { auth,db,createUserWithEmailAndPassword ,doc,setDoc,updateProfile} from './firebase.config.js'


const signUpForm = document.querySelector('#signup-form');
const messageElement=document.querySelector('#success-message');
signUpForm.addEventListener('submit',async (e) => {
  e.preventDefault();
      let department=document.getElementById('dept').value;
      let doctor=document.getElementById('doctname').value;
      let name=document.getElementById('name').value;
      let email=document.getElementById('email').value;
      let date=document.getElementById('date').value;
      let time=document.getElementById('time').value;
  
     await createUserWithEmailAndPassword(auth,name,email)
      .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;


       setDoc(doc(db,"users",user.uid),{
          department,doctor,name,email,date,time
        })
        .then(()=>{
          updateProfile(user, {
            displayName: reg, photoURL: "https://cdn-icons-png.flaticon.com/512/3177/3177440.png"
          }).then(() => location.href  = "/bookhome.html")
          .catch(error => console.log("auth profile error",error))
        })
        .catch(error=>alert(error))

      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        // console.log("output error: ",errorCode,errorMessage)
        alert("Email already registered");
        signUpForm.reset();
      });
});

