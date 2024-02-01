const state = {
  loading: false,
  user: {
    data: {},
    token: localStorage.getItem("TOKEN"),
  },
  service: {},
  products: [],
  
};



export default state;
