import _ from "lodash";
import { FETCH_USERS, CREATE_USER, DELETE_USER } from "../actions/index";

export default function(state = {}, action) {
  switch (action.type) {
    case FETCH_USERS:
      return _.mapKeys(action.payload.data, "id");

    case CREATE_USER:
      const user = action.payload.data;
      const newState = { ...state };
      newState[user.id] = user;

      return { ...state, [action.payload.data.id]: action.payload.data };

    case DELETE_USER:
      return state.filter(({ id }) => id !== action.data);

    default:
      return state;
  }
}
