import './App.css';
import React from 'react';
import Biography from './components/Biography'
import TextBox from './components/sub-components/TextBox'
import PhoneNumber from './components/sub-components/PhoneNumber'
// import the library

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      previewMode: false,
      photoURL: '',
      biography: [
        { placeholder: 'First Name',
          type: TextBox,
          value: 'Benjamin',
        },
        { placeholder: 'Last Name',
          type: TextBox,
          value: '',
        },
        { placeholder: 'Phone Number',
          type: PhoneNumber,
          value: '',
        },
        { placeholder: 'Job',
          type: TextBox,
          value: '',
        },

      ]
    }
  };

  render() {
    const { previewMode, photoURL, biography } = this.state;

    return (
      <div className="App">
        <h1>Curriculum Vitae App</h1>
        <Biography
        previewMode={previewMode}
        photoURL={photoURL}
        biography={biography}
        />
      </div>
    );
  }
}

export default App;
