const base_url = `https://api.rawg.io/api/`;

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

const currentYear = new Date().getFullYear();
const currentMonth = getCurrentMonth();
const currentDay = getCurrentDay();

const lastYear = `${currentYear - 1} -${currentMonth}-${currentDay}`;
const currentDate = `${currentYear}-${currentMonth}-${currentDay}`;
const nextYear = `${currentYear + 1} -${currentMonth}-${currentDay}`;

const popular_games = `games?key=${process.env.REACT_APP_API_KEY}&dates=${lastYear},${currentDate}&ordering=-rating&page=2&page_size=10`;


export const popularGamesURL=()=> `${base_url}${popular_games}`