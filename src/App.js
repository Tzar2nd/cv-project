import './App.css';
import React from 'react';
import uniqid from 'uniqid';
import Biography from './components/Biography'
import Education from './components/Education'
import InputBox from './components/sub-components/InputBox'
import Photo from './components/sub-components/Photo'
import PreviewButton from './components/PreviewButton'

import { library } from '@fortawesome/fontawesome-svg-core'
import { faPhoneAlt, faEnvelope, faAddressBook } from '@fortawesome/free-solid-svg-icons/';

library.add(faPhoneAlt, faEnvelope, faAddressBook);

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      previewMode: false,
      photoURL: '',
      biography: [
        { id: uniqid(),
          placeholder: 'First Name',
          type: InputBox,
          previewStyle: 'font-size: 28px;',
          value: '',
        },
        { id: uniqid(),
          placeholder: 'Last Name',
          type: InputBox,
          previewStyle: 'font-size: 28px;',
          value: '',
        },
        { id: uniqid(),
          placeholder: 'Phone Number',
          type: InputBox,
          previewStyle: `
            font-size: 12px;
            padding: 8px 0;
          `,
          icon: 'phone-alt',
          value: '',
        },
        { id: uniqid(),
          placeholder: 'Job',
          type: InputBox,
          previewStyle: `
            font-size: 24px;
            padding: 8px 0;
          `,
          value: '',
        },
        { id: uniqid(),
          placeholder: 'Address Line 1',
          type: InputBox,
          previewStyle: `
            font-size: 16px;
            padding: .5rem 0 0 0;
          `,
          value: '',
        },
        { id: uniqid(),
          placeholder: 'Address Line 2',
          type: InputBox,
          previewStyle: `
            font-size: 16px;
            padding: 0 0 0 0;
          `,
          value: '',
        },
        { id: uniqid(),
          placeholder: 'E-mail',
          type: InputBox,
          icon: 'envelope',
          previewStyle: `
            font-size: 16px;
            padding: .5rem 0;
          `,
          value: '',
        },
        { id: uniqid(),
          placeholder: 'LinkedIn',
          type: InputBox,
          value: '',
          size: '25',
        }
        ],

      educationItem: {
          id: uniqid(),
          placeholder: '',
          value: '',
      },
      education: [],

      sampleData: [
        { placeholder: 'First Name', value: 'Benjamin'},
        { placeholder: 'Last Name', value: 'Smith'},
        { placeholder: 'Phone Number', value: '+44 123456789'},
        { placeholder: 'Job', value: 'Web Developer'}, 
        { placeholder: 'Address Line 1', value: 'Via Giovanni Segantini'},
        { placeholder: 'Address Line 2', value: 'Milano'},
        { placeholder: 'E-mail', value: 'ben_g_smith@msn.com'},
        { placeholder: 'LinkedIn', value: 'https://www.linkedin.com/in/ben-smith-0b579729/'},
      ],
      }
  };

  onCreateExperienceBlock = (e) => {
    e.preventDefault();    // prevents refresh of page on button click 

    this.setState(prevState => ({
      education: [...prevState.education, 
      {
        id: uniqid(),
        placeholder: 'Certificate',
        value: '',
      },
      {
        id: uniqid(),
        placeholder: 'Location',
        value: '',
      },
      {
        id: uniqid(),
        placeholder: 'From',
        value: '',
      },
      {
        id: uniqid(),
        placeholder: 'To',
        value: '',
      },
    ]
    })
    );
  }


  togglePreviewMode = (e) => {
    this.setState({
      previewMode: e.target.checked
    })
  }

  toggleSampleData = (e) => {
    let biography = this.state.biography;
    let sampleData = this.state.sampleData; 

    biography.forEach(item => {
      sampleData.forEach(sample => {
          if (sample.placeholder === item.placeholder) {
          if (e.target.checked) { 
            this.setUpdate(item.id, sample.value)
          } else { 
            this.setUpdate(item.id, '')
          }
        }
      })
    })
  }

  setUpdate = (itemid, value) => {
    const biography = this.state.biography; 
    const education = this.state.education;

    biography.forEach(item => {
      if(item.id === itemid) {
        item.value = value; 
      }
    })

    education.forEach(item => {
      if(item.id === itemid) {
        item.value = value; 
      }
    })

    this.setState({
      biography: biography,
      education: education,
    });
  }

  render() {
    const { previewMode, photoURL, biography, education } = this.state;

    return (
      <div className="App">
        <h1>Curriculum Vitae App</h1>
        <div style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <PreviewButton 
          togglePreviewMode={this.togglePreviewMode}
        />
          <div>
          <label>Sample data</label>
          <input
            type='checkbox' 
            onChange = {(e) => this.toggleSampleData(e)}
            />
          </div>
        </div>
        <div className='cv-content-container'>
          <Photo 
            previewMode={previewMode}
            photoURL={photoURL}
          />
          <Biography
            previewMode={previewMode}
            biography={biography}
            setUpdate={this.setUpdate}
            margin={'0 0 0 1.5rem'}
            selection={['First Name', 'Last Name', 'Phone Number', 'Job']}
          />
          <Biography
            previewMode={previewMode}
            biography={biography}
            setUpdate={this.setUpdate}
            margin={'0 0 0 auto'}
            selection={['Address Line 1', 'Address Line 2', 'E-mail', 'LinkedIn']}
          />
        </div>
        <div className='hr-container'>
          <hr></hr>
        </div>
        <div className='heading-container'>
          <h2>Education</h2>
        </div>
        <Education
          previewMode={previewMode}
          education={education}
          setUpdate={this.setUpdate}
        />
        <div className='heading-container'>
        <button
          onClick={(e) => this.onCreateExperienceBlock(e)}
        >Add Education</button>
        </div>
      </div>
    );
  }
}

export default App;
