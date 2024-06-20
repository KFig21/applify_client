import axios from "axios";

// API endpoint URL
export const url = "http://localhost:3000/api"; // local
// export const url = "https://applify-api.herokuapp.com/api"; // api

// protect apis section - https://www.youtube.com/watch?v=aMFClmsA9Xw
export const setHeaders = () => {
  const header = {
    headers: {
      "x-auth-token": localStorage.getItem("token"),
    },
  };

  return header;
};

// API CALLS

// ---------- BOARDS ----------
export const getBoards = async (user) => {
  const res = await axios.get(`${url}/boards/all/${user}`);
  return res.data;
};

export const getBoard = async (board, filter, col) => {
  const res = await axios.get(`${url}/boards/${board}/${filter}/${col}`);
  return res.data;
};

export const favBoard = async (board) => {
  const res = await axios.put(`${url}/boards/favorite/${board}`);
  return res.data;
};

// export const changeBoardName = async (board) => {
//   const res = await axios.put(`${url}/boards/${board}`);
//   return res.data;
// };

// ---------- JOBS ----------
export const getJobs = async (
  board,
  skip,
  sort,
  order,
  limit,
  filter,
  filterCol
) => {
  const res = await axios.get(
    `${url}/jobs/${board}/${skip}/${sort}/${order}/${limit}/${filter}/${filterCol}`
  );
  return res.data;
};

export const favJob = async (job) => {
  const res = await axios.put(`${url}/jobs/favorite/${job}`);
  return res.data;
};

// ---------- QUICKLINKS ----------
export const getQuickLinks = async (user) => {
  const res = await axios.get(`${url}/auth/quicklinks/${user}`);
  return res.data;
};

// ---------- JOB SCRAPE ----------
export const getJobInfoScrape = async (body) => {
  const res = await axios.post(`${url}/utils/scrape`, body);
  console.log('res', res)
  return res.data;
};
