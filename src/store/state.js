const state = {
  loading: false,
  user: {
    data: {},
    token: localStorage.getItem("TOKEN"),
  },
  services: [],
  products: [],
  latestproducts: [],
  latestServices: [],
  
};



export default state;
