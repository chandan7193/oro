import React, { Component } from "react";
import { connect } from "react-redux";
import _ from "lodash";
import { Link } from "react-router-dom";

import { fetchUsers, deleteUser } from "../actions/index";

import ListItem from "./ListItem";
import list from "../common/list.css";
import Header from "./Header";

class UsersIndex extends Component {
  constructor() {
    super();
    this.onDeleteClick = this.onDeleteClick.bind(this);
  }

  componentDidMount() {
    this.props.fetchUsers();
  }

  onDeleteClick(id) {
    this.props.deletePost(id);
  }

  renderUsers() {
    return _.map(this.props.users, user => {
      return (
        <div className="col-md-4 col-12" key={user.id}>
          <ListItem
            profile_pic={user.profile_pic}
            name={user.name}
            email={user.email}
            deleteItem={this.onDeleteClick}
          />
        </div>
      );
    });
  }
  render() {
    return (
      <div>
        <Header />
        <div className="container">
          <div className="row">
            {this.renderUsers()}
            <div className="col-md-4">
              <div className="cards">
                <Link to="/users/new">
                  <div className="boxed textAlignCenter padding25">
                    <i className="fa fa-plus fa-2x" aria-hidden="true" />
                    <p>Add Family Member</p>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { users: state.users };
}

export default connect(mapStateToProps, { fetchUsers, deleteUser })(UsersIndex);
