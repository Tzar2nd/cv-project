import "../../App.css"

const TextBox = (props) => {
    let {
        placeholder,
        value,
    } = props;

    return (
        <div>
            <input style={{ 
                fontFamily: 'Arial',
                fontSize: '24',
                margin: '0.2rem',
                padding: '.25rem',
            }}
            size='25'
            placeholder={placeholder}
            defaultValue={value}
            >
            </input>
        </div>
    )
}

export default TextBox;