import { T_D_T } from '../actions/theme';

export default () => next => action => {
  if (action.type === T_D_T) {
    const dark = localStorage.getItem('dark') === 'true';
    localStorage.setItem('dark', (!dark).toString());
  }
  next(action);
};
