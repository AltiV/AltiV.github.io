import React from "react";

import Résumé from "../files/Résumé.pdf";

const Resume = () => {
  return (
    <>
      <p>This is the resume component.</p>

      <p>
        Download resume{" "}
        <a href={Résumé} target="_blank" rel="noopener noreferrer">
          here
        </a>{" "}
        (embeded PDF reader in progress)
      </p>
    </>
  );
};

export default Resume;
