import React from "react";

import "./Pagination.css";

const Pagination = ({ page, totalPages, onLeftClick, onRightClick }) => {
  return (
    <div className="pagination-container">
      <button onClick={onLeftClick}>◀</button>
      <div>
        Página {page} de {totalPages}
      </div>
      <button onClick={onRightClick}>▶</button>
    </div>
  );
};

export default Pagination;
