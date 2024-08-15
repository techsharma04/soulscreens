import {
    CREATE_USERS_REQUEST,
    CREATE_USERS_SUCCESS,
    CREATE_USERS_FAILURE,
  } from '../action/CreateUsersAction';
  
  const initialState = {
    loading: false,
    users: '',
    error: '',
  };
  
  const CreateUsersReducer = (state = initialState, action) => {
    switch (action.type) {
      case CREATE_USERS_REQUEST:
        return {
          ...state,
          loading: true,
        };
      case CREATE_USERS_SUCCESS:
        return {
          loading: false,
          users: action.payload,
          error: '',
        }; 
      case CREATE_USERS_FAILURE:
        return {
          loading: false,
          users: '',
          error: action.payload,
        };
      default:
        return state;
    }
  };
  
  export default CreateUsersReducer;
  