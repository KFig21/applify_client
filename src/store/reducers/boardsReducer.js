import {
  GET_BOARDS,
  BOARD_NEW,
  BOARD_EDIT_NAME,
  BOARD_DELETE,
} from "../actions/types";

const boardsReducer = (boards = [], action) => {
  switch (action.type) {
    case GET_BOARDS:
      return action.boards.data;
    case BOARD_NEW:
      return [action.board.data, ...boards];
    case BOARD_EDIT_NAME:
      return boards.map((board) =>
        board._id === action.board.data._id ? action.board.data : board
      );
    case BOARD_DELETE:
      return boards.filter((board) => board._id !== action.id);
    default:
      return boards;
  }
};

export default boardsReducer;
