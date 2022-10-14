import React from "react";

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
