import '../App.css'
import TextBox from './sub-components/TextBox'

const Biography = (props) => {
    
    let {
        previewMode, 
        biography,
    } = props; 

    return (
        <div className = 'biography'>
            {biography.map(item => {
            const InputType = item.type;
            return (
                <InputType
                    key={`${Math.floor((Math.random() * 1000))}-min`}
                    placeholder={item.placeholder}
                    value={item.value}
                    previewMode={previewMode}
                />
            )
            })}
        </div>
    )
}

export default Biography; 