const stockReducer = (
  state = {
    arenaria: 1,
    celandine: 1,
    ranogrin: 1,
    wolfsbane: 1
  },  action) => {
  switch (action.type) {
    case 'SELL_HERB_PART':
      state[action.data] -= 1;
      return state;
    default:
      return state;
  }
};

export default stockReducer;