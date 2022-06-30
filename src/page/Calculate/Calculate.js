import React from "react";
import GlobalModal from "../../Components/GlobalModal/GlobalModal";
import GlobalTable from "../../Components/GlobalTable/GlobalTable";

function Calculate({page}) {
  return (
    <div className="container">
      <h3>{page?.text}</h3>
      <GlobalModal />
      <div style={{ marginTop: "10px" }}>
        <GlobalTable />
      </div>
    </div>
  );
}

export default Calculate;
