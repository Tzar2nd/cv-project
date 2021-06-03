import '../App.css'
import Input from './sub-components/Input'
import Photo from './sub-components/Photo'
import styled from 'styled-components';


const BiographyContainer = styled.div`
display: flex;
background: #fff;
padding: 16px 48px;
`

const Biography = ({id, previewMode, biography, onChange, photoURL}) => {
    return (
        <BiographyContainer
            key={id}
        >
            <Photo 
            previewMode={previewMode}
            photoURL={photoURL}
            />
            <div style={{
                display: 'flex',
                flexDirection: 'column',
                marginLeft: '16px'
                }}>
                <Input
                    type='text'
                    name='firstName'
                    previewMode={previewMode}
                    previewStyle={biography.firstName.previewStyle}
                    placeholder={biography.firstName.placeholder}
                    value={biography.firstName.value}
                    onChange={(e) => onChange(e, biography.firstName.id)}
                />
                <Input
                    type='text'
                    name='lastName'
                    previewMode={previewMode}
                    previewStyle={biography.lastName.previewStyle}
                    placeholder={biography.lastName.placeholder}
                    value={biography.lastName.value}
                    onChange={(e) => onChange(e, biography.lastName.id)}
                />
                <Input
                    type='text'
                    name='phoneNumber'
                    previewMode={previewMode}
                    previewStyle={biography.phoneNumber.previewStyle}
                    placeholder={biography.phoneNumber.placeholder}
                    FAicon={biography.phoneNumber.icon}
                    value={biography.phoneNumber.value}
                    onChange={(e) => onChange(e, biography.phoneNumber.id)}
                />
                <Input
                    type='text'
                    name='job'
                    previewMode={previewMode}
                    previewStyle={biography.job.previewStyle}
                    placeholder={biography.job.placeholder}
                    value={biography.job.value}
                    onChange={(e) => onChange(e, biography.job.id)}
                />
                </div>
            <div style={{
                display: 'flex',
                flexDirection: 'column',
                marginLeft: 'auto'
            }}>
            <Input
                    type='text'
                    name='addressLineOne'
                    previewMode={previewMode}
                    previewStyle={biography.addressLineOne.previewStyle}
                    placeholder={biography.addressLineOne.placeholder}
                    value={biography.addressLineOne.value}
                    onChange={(e) => onChange(e, biography.addressLineOne.id)}
                />
            <Input
                    type='text'
                    name='addressLineTwo'
                    previewMode={previewMode}
                    previewStyle={biography.addressLineTwo.previewStyle}
                    placeholder={biography.addressLineTwo.placeholder}
                    value={biography.addressLineTwo.value}
                    onChange={(e) => onChange(e, biography.addressLineTwo.id)}
            />

            <Input
                    type='text'
                    name='email'
                    previewMode={previewMode}
                    previewStyle={biography.email.previewStyle}
                    FAicon={biography.email.icon}
                    placeholder={biography.email.placeholder}
                    value={biography.email.value}
                    onChange={(e) => onChange(e, biography.email.id)}
            />

            <Input
                    type='text'
                    name='linkedIn'
                    previewMode={previewMode}
                    previewStyle={biography.linkedIn.previewStyle}
                    placeholder={biography.linkedIn.placeholder}
                    value={biography.linkedIn.value}
                    onChange={(e) => onChange(e, biography.linkedIn.id)}
            />

            </div>
        </BiographyContainer>
    )
}

export default Biography; 