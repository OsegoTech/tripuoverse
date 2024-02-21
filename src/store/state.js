const state = {
  loading: false,
  user: {
    data: {},
    token: localStorage.getItem("TOKEN"),
  },
  usersCount: 0,  
  productsCount: 0,
  servicesCount: 0,
  services: [],
  service: {},
  products: [],
  product: {},
  latestproducts: [],
  latestServices: [],
  
};



export default state;
