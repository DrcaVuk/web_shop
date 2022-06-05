import React, { useState, useEffect} from "react";
import { useParams, useNavigate } from "react-router-dom";
import LoadingSpinner from "../../../shared/components/UI/LoadingSpinner/LoadingSpinner";
import { useHttpClient } from "../../../shared/hooks/http-hook";

import PostForm from "../../components/PostForm/PostForm";

const UpdatePost = () => {
    const [ images, setImages ] = useState([])
    const { isLoading, error, sendRequest, clearError } = useHttpClient();
    const [ post , setPost ] = useState();
    let { pid } = useParams();
    let navigate = useNavigate();

    useEffect(() => {
        const fetchPost = async () => {
            let responseData;
            try {
             responseData = await sendRequest(`/blog/${pid}`, "GET");
            setPost(responseData.data.existingPost);
            } catch (err) {
                console.log(err)
            }
        }
        fetchPost();
    },[sendRequest]);

    const handlerImageDelite = async (values) => {
        values.post_id = post._id;
        try {
            await sendRequest("/blog/image", "PUT", values);

        }catch(err){
            console.log(err.message)
        }

        let newImages = [];
        images.map((image) => {
            if(image !== values.image_name) {
                newImages.push(image);
            }
            setImages(newImages);
        });
        console.log("newImages", newImages);
    }

    const handlerUpdate = async (values) => {
        values.post_id = pid;
        const formData = new FormData();
        for (let value in images) {
            formData.append("files", images[value]);
        }
        formData.append("post_id", values.post_id);
        formData.append("title", values.title);
        formData.append("description",values.description);
        try {
        await sendRequest("/blog", "PUT", formData);
        navigate("/blog");
        } catch(err) {
            console.log(err);
        }

    } 
    
    return(
        <div className="container-fluid">
            <div className="container">
                {isLoading && post && <LoadingSpinner/>}
                {!isLoading && post && <PostForm imagesSer={post.image} images={images} setImages={setImages} handlerPost={handlerUpdate} handlerImageDelite={handlerImageDelite} title={post.title} description={post.description}
                />}
            </div>
        </div>
    )
}

export default UpdatePost;