import {
  GET_BADGES,
  GET_BADGE,
  BADGE_CREATED,
  BADGE_UPDATED,
  BADGE_DELETED,
  LOADING,
  ERROR,
} from '../actionTypes';

const initialState = {
  badges: [],
  badgeById: {},
  message: '',
  loading: false,
  error: null,
};

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_BADGES:
      return {
        ...state,
        badges: action.payload,
        loading: false,
      };

    case GET_BADGE:
      return {
        ...state,
        badgeById: action.payload,
        loading: false,
      };

    case BADGE_CREATED:
      return {
        ...state,
        message: action.payload,
        loading: false,
      };

    case BADGE_UPDATED:
      return {
        ...state,
        message: action.payload,
        loading: false,
      };

    case BADGE_DELETED:
      return {
        ...state,
        message: action.payload,
        loading: false,
      };

    case LOADING:
      return {
        ...state,
        loading: true,
      };

    case ERROR:
      return {
        ...state,
        error: action.payload,
        loading: false,
      };

    default:
      return state;
  }
}