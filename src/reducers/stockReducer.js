const stockReducer = (
  state = {
    arenaria: 0,
    celandine: 0,
    ranogrin: 0,
    wolfsbane: 0
  },  action) => {
  switch (action.type) {
    case 'DO':
      return state;
    default:
      return state;
  }
};

export default stockReducer;