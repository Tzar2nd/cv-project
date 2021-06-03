import './App.css';
import React from 'react';
import uniqid from 'uniqid';
import Biography from './components/Biography'
import Education from './components/Education'
import Work from './components/Work'
import PreviewButton from './components/PreviewButton'

import { library } from '@fortawesome/fontawesome-svg-core'
import { faPhoneAlt, faEnvelope, faAddressBook, faTimes } from '@fortawesome/free-solid-svg-icons/';
import Input from './components/sub-components/Input';

library.add(faPhoneAlt, faEnvelope, faAddressBook, faTimes);

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      previewMode: false,
      photoURL: '',
      biography: 
      {
        id: uniqid(),
        firstName: 
        { 
          placeholder: 'First Name',
          previewStyle: 'font-size: 28px;',
          value: '',
        },
        lastName:
        { 
          placeholder: 'Last Name',
          previewStyle: 'font-size: 28px;',
          value: '',
        },
        phoneNumber:
        { 
          placeholder: 'Phone Number',
          previewStyle: `
            font-size: 12px;
            padding: 8px 0;
          `,
          icon: 'phone-alt',
          value: '',
        },
        job:
        { 
          placeholder: 'Job',
          previewStyle: `
            font-size: 24px;
            padding: 8px 0;
          `,
          value: '',
        },
        addressLineOne:
        { 
          placeholder: 'Address Line 1',
          previewStyle: `
            font-size: 16px;
            padding: .5rem 0 0 0;
          `,
          value: '',
        },
        addressLineTwo:
        { 
          placeholder: 'Address Line 2',
          previewStyle: `
            font-size: 16px;
            padding: 0 0 0 0;
          `,
          value: '',
        },
        email:
        { 
          placeholder: 'E-mail',
          icon: 'envelope',
          previewStyle: `
            font-size: 16px;
            padding: .5rem 0;
          `,
          value: '',
        },
        linkedIn:
        { 
          placeholder: 'LinkedIn',
          value: '',
        },
        description:
        {
          placeholder: 'Describe yourself and your skills',
          previewStyle: `
          font-size: 14px;
          padding: .5rem 0;
          `,
          value: ''
        }

      },

      education: [
        {
          id: uniqid(),
          certificate: '',
          location: '',
          subject: '',
          from: '',
          to: '',
        }
      ],

      work: [
        {
          id: uniqid(),
          position: '',
          company: '',
          city: '',
          from: '',
          to: '',
        }
      ],

      sampleBiographyData: {
        firstName: 'Benjamin',
        lastName: 'Smith',
        phoneNumber: '+44 123456789',
        job: 'Web Developer', 
        addressLineOne: 'Via Giovanni Segantini',
        addressLineTwo: 'Milano',
        email: 'ben_g_smith@msn.com',
        linkedIn: 'https://www.linkedin.com/in/ben-smith-0b579729/',
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, " +
        "sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. " +
        "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi" +
        "ut aliquip ex ea commodo consequat. Duis aute irure dolor in " +
        "reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla " +
        "pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa " +
        "qui officia deserunt mollit anim id est laborum."
      }
    }
  };

  togglePreviewMode = (e) => {
    this.setState({
      previewMode: e.target.checked
    })
  }

  toggleSampleData = (e) => {
    let biography = this.state.biography;
    let education = this.state.education;
    let work = this.state.work;
    let sampleBiographyData = this.state.sampleBiographyData; 
    let checked = e.target.checked;

    // Biography
    if (checked) {
      Object.entries(biography).forEach(item => {
        if (item[0] !== 'id') {
          biography[item[0]].value = sampleBiographyData[item[0]];
        }
      })
    } 
    else {
      Object.entries(biography).forEach(item => {
        if (item[0] !== 'id') {
          biography[item[0]].value = '';
        }
      })
    }

    // Education
    if (checked) {
      education[0].certificate = '2:1 Computing'
      education[0].location = 'Leeds Met University'
      education[0].subject = 'Computing'
      education[0].from = '01-09-2001'
      education[0].to = '31-07-2004'
    } else {
      education[0].certificate = ''
      education[0].location = ''
      education[0].subject = ''
      education[0].from = ''
      education[0].to = ''
    }

    // Work Experience
    if (checked) {
        work[0].position = 'Web Developer'
        work[0].company = 'Top Zap Limited'
        work[0].city = 'Milan'
        work[0].from = '2019'
        work[0].to = '2021'
    } else {
        work[0].company = ''
        work[0].city = ''
        work[0].from = ''
        work[0].to = ''
    }

    this.setState({
      biography: biography,
      education: education,
      work: work,
    })
  }

  onChangeBiography = (e, id) => {
    const newValue = e.target.value;
    const objectName = e.target.name;

    // Replace previous state with new state: biography->[objectName]->[value] 
    this.setState({
      biography: {
        ...this.state.biography,
        [objectName]: {
          ...this.state.biography[objectName],
          value: newValue
        }
      }
    })
  }

  setChangeEducation = (e, id) => {
    const value = e.target.value;
    const name = e.target.name;     // get the field name to update the correct one in the object
    const education = this.state.education; 

    education.forEach(item => {
      if(item.id === id) {
        item[name] = value;  // update the correct field
      }
    })

    this.setState({
      education: education, 
    })
  }

  setChangeWork = (e, id) => {
    const value = e.target.value;
    const name = e.target.name;     
    const work = this.state.work; 

    work.forEach(item => {
      if(item.id === id) {
        item[name] = value;  
      }
    })

    this.setState({
      work: work, 
    })
  }

  onAddWork = (e) => {
    e.preventDefault();    // prevents refresh of page on button click 

    this.setState(prevState => ({
        work: [...prevState.work, 
        {
          id: uniqid(),
          position: '',
          company: '',
          city: '',
          from: '',
          to: '',
        }
      ]
    })
    );
  }

  onAddEducation = (e) => {
    e.preventDefault();    // prevents refresh of page on button click 

    this.setState(prevState => ({
        education: [...prevState.education, 
        {
          id: uniqid(),
          certificate: '',
          location: '',
          subject: '',
          from: '',
          to: '',
        }
      ]
    })
    );
  }

  onDeleteEducation = (id) => {
    const filteredEducation = this.state.education.filter(
      educationBlock => educationBlock.id !== id)

    this.setState({
      education: filteredEducation,
    })
  }

  onDeleteWork = (id) => {
    const filteredWork = this.state.work.filter(
      workBlock => workBlock.id !== id)

    this.setState({
      work: filteredWork,
    })
  }

  render() {
    const { previewMode, photoURL, biography, education, work } = this.state;

    return (
      <div className="App">

        <h1>Curriculum Vitae App</h1>
        <div style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <PreviewButton togglePreviewMode={this.togglePreviewMode} />
          <div>
          <label>Sample data</label>
          <input
            type='checkbox' 
            onChange = {(e) => this.toggleSampleData(e)}
            />
          </div>
        </div>

        <div style={{
          background: '#fff'
        }}>

        <Biography
            id={biography.id}
            previewMode={previewMode}
            biography={biography}
            onChange={this.onChangeBiography}
            photoURL={photoURL} 
        />

          <div style={{
            display: 'flex',
            justifyContent: 'center'
          }}>
            <Input
              name='description'
              type='textarea'
              placeholder='Enter a description about yourself (max 100 chars)'
              previewMode={previewMode}
              biography={biography}
              previewStyle={biography.description.previewStyle}
              value={biography.description.value}
              onChange={(e) => this.onChangeBiography(e, biography.description.id)}
            />
            </div>
          <div className='heading-container'>
            <h2>Education</h2>
          </div>
          <Education
            previewMode={previewMode}
            education={education}
            onChange={this.setChangeEducation}
            onAdd={this.onAddEducation}
            onDelete={this.onDeleteEducation}
          />
          <div style={{paddingBottom: '1rem'}}>
            <h2>Work Experience</h2>
          <Work
            previewMode={previewMode}
            work={work}
            onChange={this.setChangeWork}
            onAdd={this.onAddWork}
            onDelete={this.onDeleteWork}
          />
          </div>

        </div>
      </div>
    );
  }
}

export default App;
