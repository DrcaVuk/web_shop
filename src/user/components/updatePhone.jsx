import React from "react";

import Title from "../../shared/components/UI/Title/Title";
import Button from "../../shared/components/UI/Button/Button";

const UpdatePhone = props => {
    return (
        <div className="modal">
            <Title>Update phone</Title>
            <form>
                <div className="form-control">
                    <label htmlFor="phone">Phone:</label>
                    <input type="tel" name="phoene" />
                </div>
                <div className="form-group">
                    <Button type="submit">Save</Button>
                    <Button type="button" onClick={props.cancel}>Cancel</Button>
                </div>
            </form>
        </div>
    )
}

export default UpdatePhone;