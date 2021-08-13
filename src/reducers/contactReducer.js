


function ContactReducer(state, action){
    switch (action.type){
        case 'USER_SUBMIT':
            console.log('Reducer',state);
            return [...state, action.payload];
        default:
            return state;
    }
}

export default ContactReducer;