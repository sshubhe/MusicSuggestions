import React, { Component } from 'react';
import Header from './js/components/headerComponent/header.js';
import Footer from './js/components/footerComponent/footer.js';
import EmailForm from './js/components/emailFormComponent/emailForm.js'
import BackGround from './js/components/backgroundComponent/background.js'
import ReactPlayer from 'react-player';

class App extends Component {

  state = {
    date: new Date()
  }

  render() {
    return (
      <div className="App">
        <h1 className="standard-font">Welcome to Musico! </h1>
        <Header />
        <ReactPlayer class= "videoCover" url='https://www.facebook.com/jagmohan.shrimal/videos/1113429088798579/' playing />
        <EmailForm />
        <BackGround />
        <Footer />
      </div>
    );
  }
}

export default App;
