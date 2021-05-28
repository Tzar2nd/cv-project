import '../App.css'
import styled from 'styled-components'
import InputBox from './sub-components/InputBox'

const EducationContainer = styled.div`
    display: grid;
    margin: auto;
    background: white;
    grid-template-columns: auto auto;
`

const Education = (props) => {
    let {
        previewMode, 
        education,
        setUpdate,
    } = props; 

    return (
        <div className='cv-content-container'>
        <EducationContainer>
            {education.map(item => {
                 return (
                <InputBox
                    id={item.id}
                    key={item.id}
                    placeholder={item.placeholder}
                    FAicon={item.icon}
                    value={item.value}
                    previewMode={previewMode}
                    previewStyle={item.previewStyle}
                    setUpdate={setUpdate}
                /> 
            )
        })
    }
        </EducationContainer>
    </div>
    )
}

export default Education;