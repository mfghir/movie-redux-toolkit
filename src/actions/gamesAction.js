import axios from "axios";
import {
  newGamesURL,
  popularGamesURL,
  searchGameURL,
  upcomingGamesURL,
} from "../api";

export const loadGames = () => async (dispatch) => {

//   const url =  "https://api.rawg.io/api/games?key=db839281f5ac4af9acbcf8f67d40c26f"
//   async function  getData() {
//     const data = await fetch(url)
//     const response = await data.json();
//     console.log(response)
// }
// getData();

  const popularData = await axios.get(popularGamesURL());
  const newGamesData = await axios.get(newGamesURL());
  const upcomingData = await axios.get(upcomingGamesURL());

  dispatch({
    type: "FETCH_GAMES",
    payload: {
      popular: popularData.data.results,
      upcoming: upcomingData.data.results,
      newGames: newGamesData.data.results,
    },
  });
};

export const fetchSearch = (game_name) => async (dispatch) => {
  const searchGames = await axios.get(searchGameURL(game_name));
  dispatch({
    type: "FETCH_SEARCHED",
    payload: {
      searched: searchGames.data.results,
    },
  });
};
