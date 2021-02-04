import {useState} from "react";
import Avatar from "react-avatar-edit";


const UserPictureForm = () => {
    const [preview, setPreview] = useState(null);

    const onClose = () => {
        setPreview(null);
    }
    const onCrop = (pictureView) => {
        setPreview(pictureView);
    }
    const onBeforeFileLoad = (element) => {
        if(element.target.files[0].size > 2000000){
            element.target.value = '';
        }
    }
    return (
        <div>
            <Avatar
                width={300}
                height={200}
                onCrop={onCrop}
                onClose={onClose}
                onBeforeFileLoad={onBeforeFileLoad}
                label="+"
                src={null}
            />
            {preview && (
                <>
                    <a href={preview} download="Avatar"><img src={preview} alt="Preview"/></a>
                </>
            )}
        </div>
    );
}

export default UserPictureForm;

