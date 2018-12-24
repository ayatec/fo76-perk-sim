
import {
  OPEN_SPECIAL,
  CLOSE_SPECIAL,
} from 'actions/perkSimManager';

const initialState = {
  isSpecialOpen: false,
  openSpecial: null,
};

export default (
  state = initialState,
  action,
) => {
  switch (action.type) {
    case OPEN_SPECIAL: {
      return {
        ...state,
      };
    }

    case CLOSE_SPECIAL: {
      return {
        ...state,
      };
    }

    default: {
      return {
        ...state,
      };
    }
  }
};
