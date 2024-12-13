import React from "react";

const Home = () => {
  return (
    <>
      <div className="container my-5 ">
        <div
          className="p-5 text-center   rounded-3"
          style={{ backgroundColor: "lavender" }}
        >
          <svg
            className="bi mt-4 mb-3"
            width="100"
            height="100"
          >
            <use xlinkHref="#bootstrap"></use>
          </svg>
          <h1 className="text-body-emphasis">Home Page</h1>
          <p className="col-lg-8 mx-auto fs-5 text-muted">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Blanditiis, expedita temporibus. Reprehenderit, consequatur dolorum voluptatibus distinctio error ut nostrum voluptates molestias impedit eveniet architecto nobis, est blanditiis, cupiditate doloribus iusto?
          </p>
          <div className="d-inline-flex gap-2 mb-5">
            <button
              className="d-inline-flex align-items-center btn btn-primary btn-lg px-4 rounded-pill"
              type="button"
            >
             Click Here
            </button>
         
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
