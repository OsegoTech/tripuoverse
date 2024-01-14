const state = {
  loading: false,
  user: {
    data: {},
    token: sessionStorage.getItem("TOKEN") || null,
  },
  service: {},
  products: [],
  
};



export default state;
