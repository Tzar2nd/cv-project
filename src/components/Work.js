import '../App.css'
import styled from 'styled-components'
import WorkBlock from './WorkBlock'

const WorkContainer = styled.div`
`

const Work = ({previewMode, work, onChange, onAdd, onDelete}) => {

    const workItems = work.map((item) => (
        <WorkBlock 
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
            <WorkContainer>
                {workItems}
            </WorkContainer>
            {!previewMode && 
                <button text='Add' onClick={(e) => onAdd(e)}>Add Work Experience</button>
            }
        </div>
    )
}

export default Work;