const state = {
  loading: false,
  user: {
    data: {},
    token: localStorage.getItem("TOKEN"),
  },
  service: {},
  products: [],
  latestproducts: [],
  latestServices: [],
  
};



export default state;
