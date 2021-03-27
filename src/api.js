require("dotenv").config();
const apikey = process.env.API_KEY;
// base url
const base_url = `https://api.rawg.io/api/`;

// getting date
const getCurrentMonth = () => {
  const month = new Date().getMonth() + 1;
  if (month < 10) {
    return `0${month}`;
  } else {
    return month;
  }
};
const getCurrentDay = () => {
  const day = new Date().getDay();
  if (day < 10) {
    return `0${day}`;
  } else {
    return day;
  }
};

// dd/mm/yyyy
const currentDay = getCurrentDay();
const currentMonth = getCurrentMonth();
const currentYear = new Date().getFullYear();
const currentDate = `${currentYear}-${currentMonth}-${currentDay}`;
const lastYear = `${currentYear - 1}-${currentMonth}-${currentDay}`;
//  constom request for popular games

const popular_games = `games?key=${apikey}&date=${currentDate},&ordering=-rating&page_size=10`;

const popularGameUrl = () => `${base_url}${popular_games}`;

console.log(popularGameUrl());
