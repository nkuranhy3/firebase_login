import React, { Component } from 'react'
import firebase from 'firebase'
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth'


firebase.initializeApp({
    apiKey: "AIzaSyDLoqcbTDMFuurtAyDgVEKZ6qwo0j0Osjk",
    authDomain: "fir-auth-tutorial-ed11f.firebaseapp.com"
  })

class Firebase extends Component {
    state={isSignedIn: false}
    uiConfig = {
        signInFlow: "redirect",
        signInOptions: [
          firebase.auth.GoogleAuthProvider.PROVIDER_ID,
          firebase.auth.FacebookAuthProvider.PROVIDER_ID,
          firebase.auth.EmailAuthProvider.PROVIDER_ID
        ],
        callbacks: {
          signInSuccess: () => false
        }
      }

  componentDidMount = () => {
    firebase.auth().onAuthStateChanged(user => {
      this.setState({ isSignedIn: !!user })
      console.log("user", user)
    })
  }

render(){
    return (
        <div>
            {this.state.isSignedIn ? (
                <span>
                    <div>Signed In!</div>
                    <button onClick={() => firebase.auth().signOut()}>Sign out!</button>
                    <h1>Welcome {firebase.auth().currentUser.displayName}</h1>
                    
                </span>
                )  :  (
                <StyledFirebaseAuth
                    uiConfig={this.uiConfig}
                    firebaseAuth={firebase.auth()}
                />
                )}
                    </div>
                )
            }
        }

export default Firebase