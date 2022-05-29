import axios from "axios";
import { newGamesURL, popularGamesURL, upcomingGamesURL } from "../api";

export const loadGames = () => async (dispatch) => {
  const popularData = await axios.get(popularGamesURL());
  const newGamesData = await axios.get(newGamesURL());
  const upcomingData = await axios.get(upcomingGamesURL());

  dispatch({
    type: "FETCH_GAMES",
    payload: {
      popular: popularData.data.results,
      newGames: newGamesData.data.results,
      upComing: upcomingData.data.results,
    },
  });
};
