const base_url = "https://api.rawg.io/api/";

// getting date
const getCurrentMonth = () => {
  const month = new Date().getMonth() + 1;
  //   console.log(month);
  if (month < 10) {
    return `0${month}`;
  } else {
    return month;
  }
};

const getCurrentDay = () => {
  const day = new Date().getDay();
  //   console.log(day);
  if (day < 10) {
    return `0${day}`;
  } else {
    return day;
  }
};

// year/month/day
const currentYear = new Date().getFullYear();
const currentMonth = getCurrentMonth();
const currentDay = getCurrentDay();

const lastYear = `${currentYear - 1} -${currentMonth}-${currentDay}`;
const currentDate = `${currentYear}-${currentMonth}-${currentDay}`;
const nextYear = `${currentYear + 1} -${currentMonth}-${currentDay}`;

const popular_games = `games?key=${process.env.REACT_APP_GAME_API}&dates=${lastYear},${currentDate}&ordering=-rating&page_size=10`;
const upcoming_games = `games?key=${process.env.REACT_APP_GAME_API}&dates=${currentDate},${nextYear}&ordering=-added&page_size=10`;
const new_games = `games?key=${process.env.REACT_APP_GAME_API}&dates=${lastYear},${currentDate}&ordering=-released&page_size=10`;

export const popularGamesURL = () => `${base_url}${popular_games}`;
export const upcomingGamesURL = () => `${base_url}${upcoming_games}`;
export const newGamesURL = () => `${base_url}${new_games}`;

export const gameDetailsURL = (game_id) => `${base_url}games?key=${process.env.REACT_APP_GAME_API}/${game_id}`;
export const gameScreenShotURL = (game_id) =>
  `${base_url}games?key=${process.env.REACT_APP_GAME_API}/${game_id}/screen_shot`;
export const searchGameURL = (game_name) =>
  `${base_url}games?key=${process.env.REACT_APP_GAME_API}&search=${game_name}&page_size=9`;

// const popular_games =
// const upcoming_games =
// const new_games =

// export const popularGamesURL=()=> `https://api.themoviedb.org/3/movie/popular?api_key=cd668e362a5f07ce7eb68bf5b88e1b02&language=en-US&page=1`
