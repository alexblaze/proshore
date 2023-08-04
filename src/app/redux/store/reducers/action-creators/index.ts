import { ActionType } from "../spellReducer/type";
import { Action, Dispatch } from "redux";
import { toast } from "react-toastify";
import { axiosInstance } from "app/components/interceptor/axiosInterceptor";

export const fetchAllSpells = () => {
  return async (dispatch: Dispatch<Action>) => {
    try {
      dispatch({ type: ActionType.SET_LOADING, payload: true });
      // Make the dynamic request using axios
      const data = await axiosInstance.get(`/spells`);

      // Dispatch the action with the response data
      dispatch({
        type: ActionType.FETCH_ALL_SPELLS,
        payload: data,
      });

      // Show success toast message
      toast.success("Data retrieved successfully");
    } catch (error: any) {
      // Handle any errors
      // You can dispatch an action or show an error message here
      toast.error(error?.message);
    } finally {
      dispatch({ type: ActionType.SET_LOADING, payload: false });
    }
  };
};
