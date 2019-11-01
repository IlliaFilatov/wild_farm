const marketReducer = (
  state = {
    arenaria: {
      buy: 1,
      sale: 2
    },
    celandine: {
      buy: 20,
      sale: 50
    },
    ranogrin: {
      buy: 100,
      sale: 500
    },
    wolfsbane: {
      buy: 1000,
      sale: 5000
    },
  },  action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default marketReducer;