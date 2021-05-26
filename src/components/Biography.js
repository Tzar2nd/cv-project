import '../App.css'
import TextBox from './sub-components/TextBox'
import Photo from './sub-components/Photo'


const Biography = (props) => {
    
    let {
        previewMode, 
        photoURL,
        biography,
    } = props; 

    return (
    <div className = 'input-box'>
        <Photo 
            previewMode={previewMode}
            photoURL={photoURL}
        />
        <div className = 'bio-left'>
            {biography.map(item => {
            const InputType = item.type;

            return (
                <InputType
                    key={`${Math.floor((Math.random() * 1000))}-min`}
                    placeholder={item.placeholder}
                    value={item.value}
                />
            )
            })}
        </div>
    </div>
    )
}

export default Biography; 