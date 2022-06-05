import React, {useState} from "react";
import { useHttpClient } from "../../../shared/hooks/http-hook";
import { useNavigate } from "react-router-dom";

import Title from "../../../shared/components/UI/Title/Title";
import LoadingSpinner from "../../../shared/components/UI/LoadingSpinner/LoadingSpinner";
import PostForm from "../../components/PostForm/PostForm";

const NewPost = props => {
    const [ images, setImages ] = useState([])
    let navigate = useNavigate();
    const { isLoading, error, sendRequest, clearError } = useHttpClient();

    const handlerAddImage = (values) => {
        setImages(values);
    } 

    const handlerCreatPost = async(values) => {
        const formData = new FormData();
        for (let value in images) {
            formData.append("files", images[value]);
        }
        formData.append("title", values.title);
        formData.append("description", values.description);
        try {
            await sendRequest('/blog', 'POST', formData);
            navigate("/blog");
        } catch (err) {
            console.log(err);
        }
    }

    return(
        <div className="container-fluid">
            <div className="container">
               <Title>New Post</Title>
                {isLoading && <LoadingSpinner error={error} onClear={clearError}/>}
                {!isLoading && <PostForm handlerPost={handlerCreatPost} images={images} setImages={handlerAddImage} /> }
            </div>
        </div>
    )
}

export default NewPost;