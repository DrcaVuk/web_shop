import React, { useState, useEffect} from "react";
import { useParams, useNavigate } from "react-router-dom";
import LoadingSpinner from "../../shared/components/UI/LoadingSpinner/LoadingSpinner";
import { useHttpClient } from "../../shared/hooks/http-hook";

import PostForm from "../components/PostForm/PostForm";

const UpdatePost = () => {
    const { isLoading, error, sendRequest, clearError } = useHttpClient();
    const [ post , setPost ] = useState();
    let { pid } = useParams();
    let navigate = useNavigate();

    useEffect(() => {
        const fetchPost = async () => {
            let responseData;
            try {
             responseData = await sendRequest(`/blog/${pid}`, "GET");
            setPost(responseData.data.post);
            console.log(responseData)
            } catch (err) {
                console.log(err)
            }
        }
        fetchPost();
    },[])

    const handlerUpdate = async (values) => {
        values.post_id = pid;
        const formData = new FormData();
        formData.append("post_id", values.post_id);
        formData.append("title", values.title);
        formData.append("description",values.description);
        formData.append("image", values.image);
        await sendRequest("/blog", "PUT", formData);
        navigate("/blog")

    } 
    
    return(
        <div className="container-fluid">
            <div className="container">
                {isLoading && post && <LoadingSpinner error={error} onClear={clearError}/>}
                {!isLoading && post && <PostForm handlerPost={handlerUpdate} title={post.title} description={post.description}
                />}
            </div>
        </div>
    )
}

export default UpdatePost;