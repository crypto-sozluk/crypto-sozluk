import { T_D_T } from '../actions/theme';

const dark = localStorage.getItem('dark') === 'true';
const initialState = { dark };

export default (state = initialState, action) => {
  switch (action.type) {
    case T_D_T:
      return { ...state, dark: !state.dark };
    default:
      return state;
  }
};
