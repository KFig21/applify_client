/* eslint-disable react/jsx-pascal-case */
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router";
import { getBoard, getJobs } from "../../helpers/Api";
import SC from "../../themes/StyledComponents";
import Job from "../Job/Job";
import Loader from "../Loader/Loader";
import NewJobModal from "../Modals/NewJobModal";
import BoardNameModal from "../Modals/BoardNameModal";
import EditJobModal from "../Modals/EditJobModal";
import Favorite_col from "./columns/Favorite_col";
import FilterJobsModal from "../Modals/FilterJobsModal";
import ViewJobModal from "../Modals/ViewJobModal";
import BoardStatsModal from "../Modals/BoardStatsModal";
import {
  StarOutlineRounded,
  Star,
  FastForward,
  SkipNext,
  SkipPrevious,
  FastRewind,
} from "@material-ui/icons";
import LinkIcon from "@mui/icons-material/Link";

// sticky table repo https://github.com/GuillaumeJasmin/react-table-sticky
import { useTable, useBlockLayout } from "react-table";
import { useSticky } from "react-table-sticky";

export default function Board() {
  const user = useSelector((state) => state.user);
  const boardParams = useParams("id");
  const [board, setBoard] = useState({});
  const [jobs, setJobs] = useState([]);
  const [loaded, setLoaded] = useState(false);
  const [pageloaded, setPageloaded] = useState(false);
  const [sort, setSort] = useState("appDate");
  const [order, setOrder] = useState(-1); // 1 == ASC, -1 == DESC
  const [skip, setSkip] = useState(0);
  const [limit, setLimit] = useState(user.limit);
  const [filter, setFilter] = useState("none");
  const [filterCol, setFilterCol] = useState("none");
  const [isFiltered, setIsFiltered] = useState(false);

  const columns = React.useMemo(
    () => [
      // sticky left columns
      {
        Header: "",
        accessor: "favorite",
        sticky: "left",
      },
      {
        Header: "Company",
        accessor: "company",
        sticky: "left",
      },
      {
        Header: "Position",
        accessor: "position",
        sticky: "left",
      },
      {
        Header: "",
        accessor: "edit",
        sticky: "left",
      },
      {
        Header: "",
        accessor: "view",
        sticky: "left",
      },
      {
        Header: "",
        accessor: "link",
        sticky: "left",
      },
      // scroll columns
      {
        Header: "Applied",
        accessor: "applied",
      },
      {
        Header: "AppDate",
        accessor: "appDate",
      },
      {
        Header: "City",
        accessor: "city",
      },
      {
        Header: "State",
        accessor: "locationState",
      },
      {
        Header: "Remote",
        accessor: "remote",
      },
      {
        Header: "Status",
        accessor: "status",
      },
      {
        Header: "Result",
        accessor: "result",
      },
      {
        Header: "Type",
        accessor: "jobType",
      },
      {
        Header: "Site",
        accessor: "jobSite",
      },
      {
        Header: "Pay",
        accessor: "pay",
      },
    ],
    []
  );

  function Table({ columns, data }) {
    const defaultColumn = React.useMemo(
      () => ({
        minWidth: 150,
        width: 150,
        maxWidth: 400,
      }),
      []
    );

    const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
      useTable(
        {
          columns,
          data,
          defaultColumn,
        },
        useBlockLayout,
        useSticky
      );

    return (
      <SC.ST_table
        {...getTableProps()}
        style={loaded ? { overflow: "overlay" } : { overflow: "hidden" }}
      >
        <SC.ST_header_header>
          {headerGroups.map((headerGroup) => (
            <SC.ST_header_tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => {
                let col = column.id;
                return (
                  <SC.ST_header_th
                    {...column.getHeaderProps()}
                    className={
                      sort === col ? `active ${col} order${order}` : `${col}`
                    }
                    onClick={() => handleSort(col)}
                  >
                    {col !== "favorite" ? (
                      column.render("Header")
                    ) : order === -1 ? (
                      <Star className="favorite-icon" />
                    ) : (
                      <StarOutlineRounded className="favorite-icon" />
                    )}
                  </SC.ST_header_th>
                );
              })}
            </SC.ST_header_tr>
          ))}
        </SC.ST_header_header>

        {loaded ? (
          <div {...getTableBodyProps()}>
            {rows.map((row, i) => {
              prepareRow(row);
              return (
                <SC.ST_tr {...row.getRowProps()}>
                  {row.cells.map((cell) => {
                    let col = cell.column.id;
                    let val = cell.value;
                    const job = row.original;
                    let stickyBG = (row.index + 1) % 2 === 0 ? "even" : "odd";
                    let props = { ...cell.getCellProps() };
                    let jobRes =
                      job.result === "waiting" ? "unresolved" : "resolved";

                    // CELL FORMATTING
                    // CELL FORMATTING
                    // CELL FORMATTING

                    // FAVORITE
                    const _favorite = () => {
                      return (
                        <Favorite_col
                          props={props}
                          stickyBG={stickyBG}
                          col={col}
                          job={job}
                        />
                      );
                    };
                    // COMPANY
                    const _company = () => {
                      return (
                        <SC.ST_cell_sticky
                          {...cell.getCellProps()}
                          className={`${stickyBG} ${col}`}
                        >
                          <SC.textOnBgColor className="sticky">
                            {job.company}
                          </SC.textOnBgColor>
                        </SC.ST_cell_sticky>
                      );
                    };
                    // POSITION
                    const _position = () => {
                      return (
                        <SC.ST_cell_sticky
                          {...cell.getCellProps()}
                          className={`${stickyBG} ${col}`}
                        >
                          <SC.textOnBgColor className="sticky">
                            {job.position}
                          </SC.textOnBgColor>
                        </SC.ST_cell_sticky>
                      );
                    };

                    // EDIT
                    const _edit = () => {
                      return (
                        <EditJobModal
                          cell={cell}
                          stickyBG={stickyBG}
                          col={col}
                          job={row.original}
                          board={board}
                          updateBoardAndJobs={updateBoardAndJobs}
                        />
                      );
                    };

                    // VIEW
                    const _view = () => {
                      return (
                        <ViewJobModal
                          cell={cell}
                          stickyBG={stickyBG}
                          col={col}
                          job={row.original}
                        />
                      );
                    };
                    // LISTING LINK
                    const _link = () => {
                      return (
                        <SC.ST_cell_sticky
                          {...cell.getCellProps()}
                          className={`${stickyBG} ${col} center`}
                        >
                          <SC.subtextOnBgColor_link
                            className="icon-container"
                            href={val}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <LinkIcon className="favorite-icon" />
                          </SC.subtextOnBgColor_link>
                        </SC.ST_cell_sticky>
                      );
                    };
                    // APPLIED
                    const _applied = () => {
                      return (
                        <SC.ST_cell_standard
                          {...cell.getCellProps()}
                          className={` ${col} center`}
                        >
                          <SC.booleanColorText
                            className={job.applied ? "true" : "false"}
                          >
                            {job.applied ? "Y" : "N"}
                          </SC.booleanColorText>
                        </SC.ST_cell_standard>
                      );
                    };
                    // APPDATE
                    const _appDate = () => {
                      return (
                        <SC.ST_cell_standard
                          {...cell.getCellProps()}
                          className={` ${col} center`}
                        >
                          <SC.textOnBgColor>
                            {job.appDate !== "-" && job.appDate !== ""
                              ? formatAppDate(job.appDate)
                              : ""}
                          </SC.textOnBgColor>
                        </SC.ST_cell_standard>
                      );
                    };
                    // CITY
                    const _city = () => {
                      return (
                        <SC.ST_cell_standard
                          {...cell.getCellProps()}
                          className={` ${col}`}
                        >
                          <SC.textOnBgColor
                            className={`city-${job.city.toLowerCase()}`}
                          >
                            {job.city}
                          </SC.textOnBgColor>
                        </SC.ST_cell_standard>
                      );
                    };
                    // LOCATIONSTATE
                    const _state = () => {
                      return (
                        <SC.ST_cell_standard
                          {...cell.getCellProps()}
                          className={` ${col} center`}
                        >
                          <SC.textOnBgColor
                            className={`city-${job.city.toLowerCase()}`}
                          >
                            {job.locationState}
                          </SC.textOnBgColor>
                        </SC.ST_cell_standard>
                      );
                    };
                    // REMOTE
                    const _remote = () => {
                      return (
                        <SC.ST_cell_standard
                          {...cell.getCellProps()}
                          className={` ${col} center`}
                        >
                          <SC.booleanColorText
                            className={
                              job.remote === "yes"
                                ? "true"
                                : job.remote === "no"
                                ? "false"
                                : job.remote === "hybrid"
                                ? "hybrid"
                                : "na"
                            }
                          >
                            {job.remote === "yes"
                              ? "Y"
                              : job.remote === "no"
                              ? "N"
                              : job.remote === "hybrid"
                              ? "Hybrid"
                              : "N/A"}
                          </SC.booleanColorText>
                        </SC.ST_cell_standard>
                      );
                    };
                    // STATUS
                    const _status = () => {
                      return (
                        <SC.ST_cell_standard
                          {...cell.getCellProps()}
                          className={` ${col} center`}
                        >
                          <SC.ST_cell_status className="board-job-cell center min80">
                            <div
                              className={`job-status-res-container ${job.status} ${jobRes}`}
                            >
                              <span
                                className={`job-status-res status ${job.status} ${jobRes}`}
                              >
                                {job.status}
                              </span>
                            </div>
                          </SC.ST_cell_status>
                        </SC.ST_cell_standard>
                      );
                    };
                    // RESULT
                    const _result = () => {
                      return (
                        <SC.ST_cell_standard
                          {...cell.getCellProps()}
                          className={` ${col} center`}
                        >
                          <SC.ST_cell_status className="board-job-cell center min80">
                            <div
                              className={`job-status-res-container ${job.result}`}
                            >
                              <span
                                className={`job-status-res result ${job.result}`}
                              >
                                {job.result}
                              </span>
                            </div>
                          </SC.ST_cell_status>
                        </SC.ST_cell_standard>
                      );
                    };
                    // TYPE
                    const _jobType = () => {
                      return (
                        <SC.ST_cell_standard
                          {...cell.getCellProps()}
                          className={` ${col} center`}
                        >
                          <SC.textOnBgColor>
                            {job.jobtype === "full"
                              ? "Full-Time"
                              : job.jobtype === "part"
                              ? "Part-Time"
                              : job.jobtype === "contract"
                              ? "Contract"
                              : "N/A"}
                          </SC.textOnBgColor>
                        </SC.ST_cell_standard>
                      );
                    };
                    // SITE
                    const _jobSite = () => {
                      return (
                        <SC.ST_cell_standard
                          {...cell.getCellProps()}
                          className={` ${col} center`}
                        >
                          <SC.textOnBgColor>{job.jobsite}</SC.textOnBgColor>
                        </SC.ST_cell_standard>
                      );
                    };
                    // PAY
                    const _pay = () => {
                      return (
                        <SC.ST_cell_standard
                          {...cell.getCellProps()}
                          className={col}
                        >
                          {job.payScale === "amount" ? (
                            <SC.textOnBgColor>
                              ${job.pay.toLocaleString()}
                              {job.payType === "salary" ? "/yr" : "/hr"}
                            </SC.textOnBgColor>
                          ) : job.payScale === "range" ? (
                            <SC.textOnBgColor>
                              ${job.payMin.toLocaleString()} to $
                              {job.payMax.toLocaleString()}
                              {job.payType === "salary" ? "/yr" : "/hr"}
                            </SC.textOnBgColor>
                          ) : (
                            "N/A"
                          )}
                        </SC.ST_cell_standard>
                      );
                    };
                    return (
                      <>
                        {col === "favorite" ? (
                          <_favorite />
                        ) : col === "company" ? (
                          <_company />
                        ) : col === "position" ? (
                          <_position />
                        ) : col === "edit" ? (
                          <_edit />
                        ) : col === "view" ? (
                          <_view />
                        ) : col === "applied" ? (
                          <_applied />
                        ) : col === "appDate" ? (
                          <_appDate />
                        ) : col === "city" ? (
                          <_city />
                        ) : col === "locationState" ? (
                          <_state />
                        ) : col === "status" ? (
                          <_status />
                        ) : col === "remote" ? (
                          <_remote />
                        ) : col === "result" ? (
                          <_result />
                        ) : col === "jobType" ? (
                          <_jobType />
                        ) : col === "jobSite" ? (
                          <_jobSite />
                        ) : col === "link" ? (
                          <_link />
                        ) : col === "pay" ? (
                          <_pay />
                        ) : (
                          <div {...cell.getCellProps()} className={col}>
                            {cell.render("Cell")}
                          </div>
                        )}
                      </>
                    );
                  })}
                </SC.ST_tr>
              );
            })}
          </div>
        ) : (
          <Loader type="board" />
        )}
      </SC.ST_table>
    );
  }

  const handlePage = async (dir) => {
    if (dir === "right") {
      if (board.applications > skip + limit) {
        let _skip = skip + limit;
        setSkip(_skip);
        setLoaded(false);
        fetchJobs(_skip, sort, order);
      }
    } else if (dir === "left") {
      if (skip - limit >= 0) {
        let _skip = skip - limit;
        setSkip(_skip);
        setLoaded(false);
        fetchJobs(_skip, sort, order);
      }
    } else if (dir === "start") {
      if (skip !== 0) {
        let _skip = 0;
        setSkip(_skip);
        setLoaded(false);
        fetchJobs(0, sort, order);
      }
    } else if (dir === "end") {
      if (board.applications > skip + limit) {
        let _skip = board.applications - (board.applications % limit);
        setSkip(_skip);
        setLoaded(false);
        fetchJobs(_skip, sort, order);
      }
    }
  };

  const handleSort = async (col) => {
    setLoaded(false);
    if (col === sort) {
      // 1 == ASC, -1 == DESC
      if (order === -1) {
        setOrder(1);
        setSkip(0);
        fetchJobs(0, col, 1);
      } else {
        setSort("appDate");
        setSkip(0);
        setOrder(-1);
        fetchJobs(0, "appDate", -1);
      }
    } else {
      setSort(col);
      setSkip(0);
      setOrder(-1);
      fetchJobs(0, col, -1);
    }
  };

  const fetchJobs = async (
    _skip = skip,
    _sort = sort,
    _order = order,
    _filter = filter,
    _filterCol = filterCol
  ) => {
    let _board = boardParams.id;
    const fetchedJobs = await getJobs(
      _board,
      _skip,
      _sort,
      _order,
      limit,
      _filter,
      _filterCol
    );
    setJobs(fetchedJobs);
    setPageloaded(true);
    setLoaded(true);
  };

  const fetchBoard = async (_filter = filter, _filterCol = filterCol) => {
    setBoard(await getBoard(boardParams.id, _filter, _filterCol));
    fetchJobs(0, sort, order, _filter, _filterCol);
  };

  const resetBoard = async () => {
    setBoard(await getBoard(boardParams.id, "none", "none"));
    fetchJobs(0, "appDate", -1, limit, "none", "none");
  };

  const updateBoardAndJobs = (job) => {
    job._id = job.job
    const updatedJobs = jobs.map((j) => (j._id === job._id ? job : j));
    setJobs(updatedJobs);
  }

  useEffect(() => {
    fetchBoard();
  }, [user]);

  const formatAppDate = (date) => {
    if (date !== undefined) {
      let arr = date.split("-");
      let formattedDate = arr[1] + "/" + arr[2] + "/" + arr[0];
      return formattedDate;
    }
  };

  return (
    <SC.tablePage className="board-page">
      {/* TABLE DETAIL */}
      <div className="table-detail-container">
        <SC.textOnBgColor className="table-name">
          {board.boardname ? board.boardname : "Loading"}
          <BoardNameModal board={board} />
        </SC.textOnBgColor>
        {/* BOARD STATS */}
        <SC.boardStats className="board-stats">
          <SC.textOnBgColor className="job-stats">
            Applications -{" "}
            {board && board.jobs && board.jobs.length !== undefined
              ? board.applications
              : 0}
          </SC.textOnBgColor>
          <SC.textOnBgColor className="job-stats">
            Waiting -{" "}
            {board && board.jobs && board.jobs.length !== undefined
              ? board.waiting
              : 0}
          </SC.textOnBgColor>
        </SC.boardStats>
        <div className="table-header-buttons">
          {/* ADD JOBS */}
          {jobs.length < 1000 && loaded && (
            <NewJobModal board={board}/>
          )}
          {/* FILTER JOBS */}
          {(jobs.length > 0 || isFiltered) && (
            <FilterJobsModal
              filter={filter}
              filterCol={filterCol}
              setFilter={setFilter}
              setFilterCol={setFilterCol}
              fetchBoard={fetchBoard}
              setLoaded={setLoaded}
              isFiltered={isFiltered}
              setIsFiltered={setIsFiltered}
              resetBoard={resetBoard}
            />
          )}
          {/* BOARD STATS */}
          {jobs.length > 0 && 
          
          <BoardStatsModal
            board={board}
            filter={filter}
            filterCol={filterCol}
            setFilter={setFilter}
            setFilterCol={setFilterCol}
            fetchBoard={fetchBoard}
            setLoaded={setLoaded}
            setIsFiltered={setIsFiltered}
            resetBoard={resetBoard}
          />
            
          }
        </div>
      </div>
      {pageloaded ? (
        <div className="jobs-table-container">
          {jobs.length > 0 ? (
            <>
              {/* JOBS TABLE */}
              <Table columns={columns} data={jobs} />
              {/* PAGINATION BUTTONS */}
              <SC.table_hr className="table-hr"></SC.table_hr>
              <SC.paginationButtonsContainer className="bottom-button-container">
                <SC.paginationButton
                  className="icon-container RW"
                  onClick={() => handlePage("start")}
                >
                  <FastRewind className="page-icon" />
                </SC.paginationButton>
                <SC.paginationButton
                  className="icon-container"
                  onClick={() => handlePage("left")}
                >
                  <SkipPrevious className="page-icon" />
                </SC.paginationButton>
                <SC.textOnBgColor className="page-info">
                  {skip + 1} - {Math.min(board.applications, limit + skip)}
                  <SC.subtextOnBgColor style={{ padding: "0px 2px" }}>
                    {" "}
                    of{" "}
                  </SC.subtextOnBgColor>
                  {board.applications}
                </SC.textOnBgColor>
                <SC.paginationButton
                  className="icon-container"
                  onClick={() => handlePage("right")}
                >
                  <SkipNext className="page-icon" />
                </SC.paginationButton>
                <SC.paginationButton
                  className="icon-container FF"
                  onClick={() => handlePage("end")}
                >
                  <FastForward className="page-icon" />
                </SC.paginationButton>
              </SC.paginationButtonsContainer>
            </>
          ) : (
            <div className="page-buttons-container"></div>
          )}
        </div>
      ) : (
        <Loader type="full-screen" />
      )}
    </SC.tablePage>
  );
}
