import React from 'react';
import Input from './sub-components/Input'
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const WorkGrid = styled.div`
display: grid;
margin: auto;
background: white;
justify-content: center;
grid-template-columns: auto auto auto;
`

const WorkBlock = ({ id, item, previewMode, onChange, onDelete }) => {
    return (
        <>
        <hr></hr>
        <div style={{ 
            display: 'flex',
            justifyContent: 'center'
        }}>
        <WorkGrid>
            <Input 
                type='text'
                name='position'
                placeholder='Position'
                value={item.position}
                previewMode={previewMode}
                previewStyle=''
                onChange={(e) => onChange(e, id)}
            />
            <Input 
                type='text'
                name='company'
                placeholder='Company'
                value={item.company}
                previewMode={previewMode}
                previewStyle=''
                onChange={(e) => onChange(e, id)}
            />
            <Input 
                type='text'
                name='city'
                placeholder='City'
                value={item.city}
                previewMode={previewMode}
                previewStyle=''
                onChange={(e) => onChange(e, id)}
            />
            <div></div>
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
        </WorkGrid>
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

export default WorkBlock; 

