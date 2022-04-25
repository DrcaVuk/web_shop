import React, {useState} from "react";
import { useParams } from "react-router-dom";
import Description from "../../../shared/components/UI/Description/Description";
import Title from "../../../shared/components/UI/Title/Title";
import LoadingSpinner from "../../../shared/components/UI/LoadingSpinner/LoadingSpinner";

const Product = props => {
    const [isLoading , setIsLoading ] = useState(true);
    let { id } = useParams();
    return(
        <div className="container-fluid">
            <div className="container">
                {!isLoading && <LoadingSpinner />}
                {isLoading && 
                <div className="row">
                    <div className="col-50">
                        <img src={props.image} alt={props.alt} />
                    </div>
                    <div className="col-50">
                        <Title>{props.title}</Title>
                        <Description>{props.description}</Description>
                    </div>
                </div>}
            </div>
        </div>
    )
}

export default Product;