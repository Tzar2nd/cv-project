import '../App.css'
import styled from 'styled-components'
import InputBox from './sub-components/InputBox'

const EducationContainer = styled.div`
    display: grid;
    background: white;
    width: 100%;
`

const Education = (props) => {
    let {
        previewMode, 
        education,
        setUpdate,
    } = props; 

    return (
        <EducationContainer>
            {education.map(item => {
                 return (
                <InputBox
                    id={item.id}
                    key={item.id}
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
    )
}

export default Education;