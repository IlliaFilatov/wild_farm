  const inventReducer = (
    state = {
      seeds: {
        arenaria: 0,
        celandine: 0,
        ranogrin: 0,
        wolfsbane: 0
      },
      coins: 5
    },  action) => {
  switch (action.type) {
    case 'DO':
      return state;
    default:
      return state;
  }
};

export default inventReducer;