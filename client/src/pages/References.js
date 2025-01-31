import React from "react";

const References = () => {
  return (
    <div className="references-page" style={{ height: "calc(100vh - 410px)" }}>
      <h1>References:</h1>
      <p>TSA Copyright Checklist and Work Log</p>
      <div style={{ display: "flex", justifyContent: "space-around", flexWrap: "wrap" }}>
        <iframe 
          src="/pdfs/Webmaster_Copyright_Form.pdf" 
          width="45%" 
          height="500px" 
          title="Copyright Form"
        />
        <iframe 
          src="/pdfs/Webmaster_Work_Log.pdf" 
          width="45%" 
          height="500px" 
          title="Work Log"
        />
      </div>
    </div>
  );
};

export default References;