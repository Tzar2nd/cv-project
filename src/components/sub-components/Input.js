import "../../App.css"
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const InputBox = styled.input`
    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
    margin: .24rem;
    padding: .2rem;
    outline: 1px solid gray;
    border: none;
    width: auto;
    ${props => (props.previewMode) && `
        outline: none; 
        margin: 0rem;
        padding: 0rem;
        color: black !important;
        ${props.previewStyle}
        `}`;

const InputTextArea = styled.textarea`
    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
    resize: none;
    display: block;
    width: 700px;
    height: 72px;
    margin: .2rem auto;
    padding: .2rem;
    outline: 1px solid gray;
    border: none;
    ${props => (props.previewMode) && `
        outline: none; 
        margin: 0rem;
        padding: 0rem;
        color: black !important;
        ${props.previewStyle}
        `}`;

const Input = ({name, type, placeholder, value, FAicon, previewMode, previewStyle, 
                onChange, size}) => {

    return (
        <div style={{ 
            display: 'flex',
            alignItems: 'center',
        }}>
            {(FAicon && !previewMode) &&
                <div>
                    <FontAwesomeIcon icon={FAicon} style={{
                        margin: '0 0 0 -23px',
                        color: '#333',
                    }}/>
                </div>
            }
            <div>
                {(type === 'text') &&
                    <InputBox
                    size={size !== '' ? size : '25'}
                    placeholder={placeholder}
                    name={name}
                    previewMode={previewMode}
                    disabled={previewMode}
                    previewStyle={previewStyle}
                    onChange={onChange}
                    value={value}
                />}

                {(type === 'textarea') &&
                    <InputTextArea
                    placeholder={placeholder}
                    name={name}
                    previewMode={previewMode}
                    disabled={previewMode}
                    previewStyle={previewStyle}
                    onChange={onChange}
                    value={value}
                />}
            </div>
        </div>
    )
}

export default Input;