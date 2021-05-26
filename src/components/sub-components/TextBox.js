import "../../App.css"

const TextBox = (props) => {
    let {
        key,
        placeholder,
        value,
        previewMode,
    } = props;

    return (
        <div>
            <input style={previewMode ? {
                fontFamily: 'Arial',
                fontSize: '24',
                margin: '0.2rem',
                padding: '.25rem',
            } : 
            {   fontFamily: 'Arial',
                fontSize: '24',
                margin: '0.2rem',
                padding: '.25rem',
                border: 'none'
            }}

            size='25'
            placeholder={placeholder}
            defaultValue={value}
            onChange={(e) => { props.setUpdate(e.target.value, key)}}
            >
            </input>
        </div>
    )
}

export default TextBox;