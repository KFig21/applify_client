/* eslint-disable react/jsx-pascal-case */
import React, { useEffect, useState } from "react";
import SC from "../../../themes/StyledComponents";
import { StarOutlineRounded, Star } from "@material-ui/icons";
import { favJob } from "../../../helpers/Api";

export default function Favorite_col({ props, stickyBG, col, job }) {
  const [isFav, setIsFav] = useState(false);

  // get favorite status
  useEffect(() => {
    setIsFav(job.favorite);
  }, [job]);

  // toggle fav
  const favHandler = () => {
    try {
      favJob(job._id);
    } catch (err) {}
    setIsFav(!isFav);
  };

  return (
    <SC.ST_cell_sticky {...props} className={`${stickyBG} ${col} center`}>
      {isFav ? (
        <SC.favIcon className="icon-container" onClick={() => favHandler()}>
          <Star className="favorite-icon" />
        </SC.favIcon>
      ) : (
        <SC.favIcon
          className="icon-container outline"
          onClick={() => favHandler()}
        >
          <StarOutlineRounded className="favorite-icon" />
        </SC.favIcon>
      )}
    </SC.ST_cell_sticky>
  );
}
