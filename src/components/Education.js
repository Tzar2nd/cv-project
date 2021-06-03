import '../App.css'
import styled from 'styled-components'
import EducationBlock from './EducationBlock'

const EducationContainer = styled.div`
`

const Education = ({previewMode, education, onChange, onAdd, onDelete}) => {

    const educationItems = education.map((item) => (
        <EducationBlock 
            id={item.id}
            key={item.id}
            item={item}
            previewMode={previewMode}
            onChange={onChange}
            onDelete={onDelete}
        />
    ))

    return (
        <div className='cv-education'>
            <EducationContainer>
                {educationItems}
            </EducationContainer>
            {!previewMode && 
            <button text='Add' onClick={(e) => onAdd(e)}>Add Education</button>}
        </div>
    )
}

export default Education;