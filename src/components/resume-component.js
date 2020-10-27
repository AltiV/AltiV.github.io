import React from "react";

import Résumé from "../files/Résumé.pdf";

const Resume = () => {
  return (
    <>
      <p>
        Download resume{" "}
        <a href={Résumé} target="_blank" rel="noopener noreferrer">
          here.
        </a>{" "}
      </p>

      <object
        data={Résumé}
        type="application/pdf"
        style={{ height: "calc(100vh - 170px)", width: "100%" }}
      >
        <p>
          <a href={Résumé}>Link to PDF</a>
        </p>
      </object>
    </>
  );
};

export default Resume;
