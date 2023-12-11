const state = {
  user: {
    data: {},
    token: sessionStorage.getItem("TOKEN") || null,
  },
  service: {},
};

export default state;
