const state = {
  loading: false,
  user: {
    data: {},
    token: localStorage.getItem("TOKEN"),
  },
  services: [],
  service: {},
  products: [],
  product: {},
  latestproducts: [],
  latestServices: [],
  
};



export default state;
