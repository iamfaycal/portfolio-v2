import { TOOGLE_MENU } from "../actions/types";

export const toggleMenu = () => dispatch => {
    dispatch({
        type: TOOGLE_MENU
    });
};
