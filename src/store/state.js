const state = {
    user: {
        data: {},
        token: sessionStorage.getItem("TOKEN") || null,
    },
    services: {
        
    },
}

export default state;