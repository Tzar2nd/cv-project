import "../../App.css"
import styled from 'styled-components';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Input = styled.input`
    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
    margin: .24rem;
    padding: .2rem;
    outline: 1px solid gray;
    border: none;
    width: auto;
    ${props => (props.previewMode) && `
        outline: none; 
        margin: 0rem;
        padding: .1rem;
        color: black !important;
        ${props.previewStyle}
        `}
    `
;

const InputBox = (props) => {
    let {
        id,
        value,
        FAicon,
        previewMode,
        previewStyle,
        setUpdate,
        size,
    } = props;

    return (
        <div style={{ 
            display: 'flex',
            alignItems: 'center',
        }}>
            {(FAicon) &&
            <div>
                <FontAwesomeIcon icon={FAicon} style={{
                    margin: '0 0 0 -22px',
                    color: '#333',
                }}/>
                </div>
            }
            <div>
                {console.log(value)}
            <Input
                size={size !== '' ? size : '25'}
                placeholder={id}
                previewMode={previewMode}
                disabled={previewMode}
                previewStyle={previewStyle}
                value={value}
                onChange={(e) => { setUpdate(id, e.target.value)}}
                >
            </Input>
            </div>
        </div>
    )
}

export default InputBox;