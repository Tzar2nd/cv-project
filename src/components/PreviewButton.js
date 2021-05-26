import '../App.css'

const PreviewButton = (props) => {

    return (
        <div className='preview'>
            <div>Preview</div>
            <label
                className='switch'
                defaultValue='Edit Mode' 
            >
                <input 
                    type='checkbox'
                    className = 'preview-slider'
                    onChange={(e) => props.togglePreviewMode(e)}
                    />
                <span className='slider round'></span>
            </label>
        </div>
    )
}

export default PreviewButton; 