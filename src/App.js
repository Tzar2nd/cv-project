import './App.css';
import React from 'react';
import Biography from './components/Biography'
import TextBox from './components/sub-components/TextBox'
import PhoneNumber from './components/sub-components/PhoneNumber'
import Photo from './components/sub-components/Photo'
import PreviewButton from './components/PreviewButton'

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      previewMode: false,
      photoURL: '',
      biographyLeft: [
        { placeholder: 'First Name',
          type: TextBox,
          value: '',
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
      ],
      biographyRight: [
          { placeholder: 'Address Line 1',
            type: TextBox,
            value: '',
          },
          { placeholder: 'Address Line 2',
            type: TextBox,
            value: '',
          },
          { placeholder: 'E-mail',
            type: TextBox,
            value: '',
          },
          { placeholder: 'LinkedIn',
            type: TextBox,
            value: '',
          },
      ]
    }

  };

  togglePreviewMode = (e) => {
    this.setState({
      previewMode: e.target.checked
    })
  }

  render() {
    const { previewMode, photoURL, biographyLeft, biographyRight } = this.state;

    return (
      <div className="App">
        <h1>Curriculum Vitae App</h1>
        <PreviewButton 
          togglePreviewMode={this.togglePreviewMode}
        />
        <div className='biography-container'>
          <Photo 
            previewMode={previewMode}
            photoURL={photoURL}
          />
          <Biography
            previewMode={previewMode}
            biography={biographyLeft}
          />
          <Biography
            previewMode={previewMode}
            biography={biographyRight}
          />

        <div className='work-experience-container'>


        </div>
        </div>
      </div>
    );
  }
}

export default App;
