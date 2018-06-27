import React from "react";
import { Link } from "react-router-dom";

const ListItem = props => {
  const { profile_pic, name, email, id, deleteItem } = props;
  console.log(props);
  return (
    <div className="cards">
      <div className="card-body boxed">
        <div className="float_right">
          <button type="button" className="btn btn-link colorccc">
            Edit
          </button>
          <button type="button" className="btn btn-link colorccc">
            Delete
          </button>
        </div>
        <div className="content">
          <div className="inline-img">
            <img src={profile_pic} className="rounded-img" />
          </div>
          &nbsp;&nbsp;&nbsp;
          <div className="inline-text">
            <span>{name}</span>
            <br />
            <span>{email}</span>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ListItem;
