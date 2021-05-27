import './App.css';
import React from 'react';
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
        { id: 'First Name',
          type: InputBox,
          previewStyle: 'font-size: 28px;',
          value: '',
        },
        { id: 'Last Name',
          type: InputBox,
          previewStyle: 'font-size: 28px;',
          value: '',
        },
        { id: 'Phone Number',
          type: InputBox,
          previewStyle: `
          font-size: 12px;
          padding: 8px 0;
          `,
          icon: 'phone-alt',
          value: '',
        },
        { id: 'Job',
          type: InputBox,
          previewStyle: `
          font-size: 24px;
          padding: 8px 0;
          `,
          value: '',
        },
        { id: 'Address Line 1',
          type: InputBox,
          previewStyle: `
          font-size: 16px;
          padding: .5rem 0 0 0;
          `,
          value: '',
        },
        { id: 'Address Line 2',
          type: InputBox,
          previewStyle: `
          font-size: 16px;
          padding: 0 0 0 0;
          `,
          value: '',
        },
        { id: 'E-mail',
          type: InputBox,
          icon: 'envelope',
          previewStyle: `
          font-size: 16px;
          padding: .5rem 0;
          `,
          value: '',
        },
        { id: 'LinkedIn',
          type: InputBox,
          value: '',
          size: '25',
        }
        ],

      education: [
          {
            id: 'University or School',
            type: InputBox,
            value: '',
          },
          {
            id: 'Location',
            type: InputBox,
            value: '',
          },
        ],

      sampleData: [
        { id: 'First Name', value: 'Benjamin'},
        { id: 'Last Name', value: 'Smith'},
        { id: 'Phone Number', value: '+44 123456789'},
        { id: 'Job', value: 'Web Developer'}, 
        { id: 'Address Line 1', value: 'Via Giovanni Segantini'},
        { id: 'Address Line 2', value: 'Milano'},
        { id: 'E-mail', value: 'ben_g_smith@msn.com'},
        { id: 'LinkedIn', value: 'https://www.linkedin.com/in/ben-smith-0b579729/'},
      ],
      }
  };

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
          if (sample.id === item.id) {
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
    console.log('updating');

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
        <div className='biography-container'>
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

        <Education
          previewMode={previewMode}
          education={education}
          setUpdate={this.setUpdate}
        >

        </Education>
      </div>
    );
  }
}

export default App;
