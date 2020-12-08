import firebase from 'firebase/app'

const configOptions = {
    apiKey: "AIzaSyBnO2n1WdEXJegoEesD1C6MSyk9u6ufxec",
    authDomain: "brunchguppy.firebaseapp.com",
    databaseURL: "https://brunchguppy.firebaseio.com",
    projectId: "brunchguppy",
    storageBucket: "brunchguppy.appspot.com",
    messagingSenderId: "212701320607",
    appId: "1:212701320607:web:8ba1415b06a9a9c885d9aa",
    measurementId: "G-NMWKFVL55P"
}

export default firebase.initializeApp(configOptions)