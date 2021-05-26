import "../../App.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhoneAlt } from '@fortawesome/free-solid-svg-icons';

const PhoneNumber = (props) => {
    let {
        placeholder,
        value,
    } = props;

    return (
        <div>
            <FontAwesomeIcon icon={faPhoneAlt} style={{
                margin: '0 0 0 -24px',
            }} />
            <input style={{ 
                fontFamily: 'Arial',
                fontSize: '24',
                margin: '0.2rem 0 0.2rem 8px',
                padding: '.25rem',
            }}
            size='25'
            placeholder={placeholder}
            defaultValue={value}
            />
        </div>
    )
}

export default PhoneNumber;