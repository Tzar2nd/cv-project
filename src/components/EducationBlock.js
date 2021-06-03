import React from 'react';
import Input from './sub-components/Input'
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const EducationGrid = styled.div`
display: grid;
margin: auto;
background: white;
justify-content: center;
grid-template-columns: auto auto;
`

const EducationBlock = ({ id, item, previewMode, onChange, onDelete }) => {
    return (
        <>
        <hr></hr>
        <div style={{ 
            display: 'flex',
            justifyContent: 'center'
        }}>
        <EducationGrid>
            <Input 
                type='text'
                name='certificate'
                placeholder='Certificate'
                value={item.certificate}
                previewMode={previewMode}
                previewStyle=''
                onChange={(e) => onChange(e, id)}
            />
            <Input 
                type='text'
                name='location'
                placeholder='Location'
                value={item.location}
                previewMode={previewMode}
                previewStyle=''
                onChange={(e) => onChange(e, id)}
            />
            <Input 
                type='text'
                name='from'
                placeholder='From'
                value={item.from}
                previewMode={previewMode}
                previewStyle=''
                onChange={(e) => onChange(e, id)}
            />
            <Input 
                type='text'
                name='to'
                placeholder='To'
                value={item.to}
                previewMode={previewMode}
                previewStyle=''
                onChange={(e) => onChange(e, id)}
            />
        </EducationGrid>
        {!previewMode && <FontAwesomeIcon 
            icon='times' 
            style={{
                margin: 'auto',
                color: '#333',
                cursor: 'pointer'
            }}
            onClick={() => onDelete(id)}
        />}
        </div>
        </>

    )
}

export default EducationBlock; 

