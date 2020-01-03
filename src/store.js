import { createStore } from 'redux';

const initialState = {
    name: '',
    address: '',
    city: '',
    state: '',
    zip: '',
    img: '',
    mortgage: '',
    rent: ''
};

export const WIZ_STEP_ONE = 'WIZ_STEP_ONE';
export const WIZ_STEP_TWO = 'WIZ_STEP_TWO';
export const WIZ_STEP_THREE = 'WIZ_STEP_THREE';
export const CLEAR_FIELDS = 'CLEAR_FIELDS';

function reducer (state = initialState, action){
    const { type, payload } = action;

    switch(type){
        case WIZ_STEP_ONE:
            return{
                ...state,
                name: payload.name,
                address: payload.address,
                city: payload.city,
                state: payload.state,
                zip: payload.zip,
                img: payload.img,
                mortgage: payload.mortgage,
                rent: payload.rent
            }
        
        case WIZ_STEP_TWO:
            return{
                ...state,
                imgUrl: payload.imgUrl
            }

        case WIZ_STEP_THREE:
            return{
                ...state,
                mortgage: payload.mortgage,
                rent: payload.rent
            }

        case CLEAR_FIELDS: {
            return {
                name: "",
                address: "",
                city: "",
                state: "",
                zip: "",
                img: "",
                mortgage: "",
                rent: ""
            }
        }
        default: return state;
    }
}

export default createStore(reducer);