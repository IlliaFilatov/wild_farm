const fieldReducer = (
  state = {
      isEmpty: [
        true,
        true,
        true,
        true,
        true,
        true,
        true,
        true,
        true
      ],
      plantName: '',
      isWithSeed: false
  }, action) => {
  switch (action.type) {
    case 'TAKE_SEED':
      state.isWithSeed = true;
      state.plantName = action.data;
      return state;
    case 'DROP_SEED':
      state.isWithSeed = false;
      state.plantName = '';
      state.isEmpty[action.data] = false;
      return state;
    default:
      return state;
  }
};

export default fieldReducer;