const marketReducer = (
  state = {
    arenaria: {
      buy: 1,
      sale: 2,
      time: 10000
    },
    celandine: {
      buy: 20,
      sale: 50,
      time: 120000
    },
    ranogrin: {
      buy: 100,
      sale: 500,
      time: 300000
    },
    wolfsbane: {
      buy: 1000,
      sale: 5000,
      time: 1200000
    },
  },  action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default marketReducer;