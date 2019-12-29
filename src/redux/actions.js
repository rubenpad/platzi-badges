import {
  GET_BADGES,
  GET_BADGE,
  BADGE_CREATED,
  BADGE_UPDATED,
  BADGE_DELETED,
  ERROR,
  LOADING,
} from './actionTypes';

const baseUrl = 'http://localhost:3000/badges';

export function getBadges() {
  return async (dispatch) => {
    dispatch({ type: LOADING });

    try {
      const response = await fetch(baseUrl, {
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
      });
      const data = await response.json();
      dispatch({ type: GET_BADGES, payload: data });
    } catch (error) {
      dispatch({ type: ERROR, payload: error });
    }
  };
}

export function getBadge(badgeId) {
  return async (dispatch) => {
    dispatch({ type: LOADING });

    try {
      const response = await fetch(`${baseUrl}/${badgeId}`, {
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
      });
      const data = await response.json();
      dispatch({ type: GET_BADGE, payload: data });
    } catch (error) {
      dispatch({ type: ERROR, payload: error });
    }
  };
}

export function createBadge(badge) {
  return async (dispatch) => {
    dispatch({ type: LOADING });

    try {
      fetch(`${baseUrl}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify(badge),
      });
      dispatch({ type: BADGE_CREATED, payload: 'Badge created successfully' });
    } catch (error) {
      dispatch({ type: ERROR, payload: error });
    }
  };
}

export function updateBadge(badgeId, updates) {
  return async (dispatch) => {
    dispatch({ type: LOADING });

    try {
      fetch(`${baseUrl}/${badgeId}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify(updates),
      });
      dispatch({ type: BADGE_UPDATED, payload: 'Badge updated successfully' });
    } catch (error) {
      dispatch({ type: ERROR, payload: error });
    }
  };
}

export function deleteBadge(badgeId) {
  return (dispatch) => {
    dispatch({ type: LOADING });
    try {
      fetch(`${baseUrl}/${badgeId}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
      });
      dispatch({ type: BADGE_DELETED, payload: 'Badge deleted successfully' });
    } catch (error) {
      dispatch({ type: ERROR, payload: error });
    }
  };
}
