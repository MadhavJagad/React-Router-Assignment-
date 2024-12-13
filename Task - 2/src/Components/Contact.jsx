import React from "react";

const Contact = () => {
  return (
    <>
      <div className="container col-xxl-8 mt-5 px-4 py-5">
        <div className="card p-5 border-2 border-black flex-lg-row-reverse align-items-center g-5 py-5">
          <div className="mx-auto">
            <h1 className="display-5 fw-bold text-body-emphasis lh-1 mb-3">
              Contact Us Page
            </h1>
            <p className="lead">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eius
              omnis facilis fuga numquam doloremque facere quis repellat ullam
              reiciendis commodi odit inventore beatae aperiam perferendis
              temporibus eaque, nostrum molestias tempora.
            </p>
            <div className="d-grid gap-2 d-md-flex justify-content-md-start">
              <button
                type="button"
                className="btn btn-primary btn-lg px-4 me-md-2"
              >
                Primary
              </button>
              <button
                type="button"
                className="btn btn-outline-secondary btn-lg px-4"
              >
                Default
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
