import '../App.css'
import InputBox from './sub-components/InputBox'
import styled from 'styled-components';

const BiographyContainer = styled.div`
display: flex;
flex-direction: column;
margin: ${props => props.margin };
`;

const Biography = (props) => {
    let {
        previewMode, 
        biography,
        margin,
        selection,
        setUpdate,
    } = props; 

    return (
        <BiographyContainer
            margin={margin}  
        >
            {biography.map(item => {

            if (selection.includes(item.id)) {
                return (
                    <InputBox
                        id={item.id}
                        key={item.id}
                        FAicon={item.icon}
                        value={item.value}
                        size={item.size}
                        previewMode={previewMode}
                        previewStyle={item.previewStyle}
                        setUpdate={setUpdate}
                    />
                )
            } return '';
            })  
        }
        </BiographyContainer>
    )
}

export default Biography; 