import React from "react";
import style from './style.scss'

const Item = () => {
  return (
    <div className="container mt-5">
      <div className="row" style={{ gap: "40px" }}>
        <div
          className="col-12"
          style={{
            backgroundColor: "#ced4da",
            borderRadius: "20px",
            maxWidth: "48%",
          }}
        >
          <div className="itemContent px-5 py-3 d-inline-flex">
            <div
              className="itemIcoin rounded-pill"
              style={{
                color: "white",
              }}
            >
              <i
                class="fa-solid fa-wifi bg-primary rounded-pill"
                style={{
                  width: "50px",
                  height: "50px",
                  transform: "translateY(-40px)",
                  lineHeight: "50px",
                }}
              ></i>
              <h1 style={{ color: "black", fontStyle: "italic" }}>Kết Nối</h1>
              <p style={{ color: "black", letterSpacing: "2px" }}>
                With Bootstrap 5, we've created a fresh new layout for this
                template!
              </p>
            </div>
            <div className="itemText"></div>
          </div>
        </div>
        <div
          className="col-12"
          style={{
            backgroundColor: "#ced4da",
            borderRadius: "20px",
            maxWidth: "48%",
          }}
        >
          <div className="itemContent px-5 py-3 d-inline-flex">
            <div
              className="itemIcoin rounded-pill"
              style={{
                color: "white",
              }}
            >
              <i
                class="fa-solid fa-cloud-arrow-down bg-primary rounded-pill"
                style={{
                  width: "50px",
                  height: "50px",
                  transform: "translateY(-40px)",
                  lineHeight: "50px",
                }}
              ></i>
              <h1 style={{ color: "black", fontStyle: "italic" }}>Download</h1>
              <p style={{ color: "black", letterSpacing: "2px" }}>
                As always, Start Bootstrap has a powerful collectin of free
                templates.!
              </p>
            </div>
            <div className="itemText"></div>
          </div>
        </div>
        <div
          className="col-12"
          style={{
            backgroundColor: "#ced4da",
            borderRadius: "20px",
            maxWidth: "48%",
          }}
        >
          <div className="itemContent px-5 py-3 d-inline-flex">
            <div
              className="itemIcoin rounded-pill"
              style={{
                color: "white",
              }}
            >
              <i
                class="fa-solid fa-address-card bg-primary rounded-pill"
                style={{
                  width: "50px",
                  height: "50px",
                  transform: "translateY(-40px)",
                  lineHeight: "50px",
                }}
              ></i>
              <h1 style={{ color: "black", fontStyle: "italic" }}>
                Jumbotron hero header
              </h1>
              <p style={{ color: "black", letterSpacing: "2px" }}>
                The heroic part of this template is the jumbotron hero header!
              </p>
            </div>
            <div className="itemText"></div>
          </div>
        </div>
        <div
          className="col-12"
          style={{
            backgroundColor: "#ced4da",
            borderRadius: "20px",
            maxWidth: "48%",
          }}
        >
          <div className="itemContent px-5 py-3 d-inline-flex">
            <div
              className="itemIcoin rounded-pill"
              style={{
                color: "white",
              }}
            >
              <i
                class="fa-brands fa-bootstrap bg-primary rounded-pill"
                style={{
                  width: "50px",
                  height: "50px",
                  transform: "translateY(-40px)",
                  lineHeight: "50px",
                }}
              ></i>
              <h1 style={{ color: "black", fontStyle: "italic" }}>
                Feature boxes
              </h1>
              <p style={{ color: "black", letterSpacing: "2px" }}>
                We've created some custom feature boxes using Bootstrap icons!
              </p>
            </div>
            <div className="itemText"></div>
          </div>
        </div>
        <div
          className="col-12"
          style={{
            backgroundColor: "#ced4da",
            borderRadius: "20px",
            maxWidth: "48%",
          }}
        >
          <div className="itemContent px-5 py-3 d-inline-flex">
            <div
              className="itemIcoin rounded-pill"
              style={{
                color: "white",
              }}
            >
              <i
                class="fa-solid fa-code bg-primary rounded-pill"
                style={{
                  width: "50px",
                  height: "50px",
                  transform: "translateY(-40px)",
                  lineHeight: "50px",
                }}
              ></i>
              <h1 style={{ color: "black", fontStyle: "italic" }}>
                Simple clean code
              </h1>
              <p style={{ color: "black", letterSpacing: "2px" }}>
                We keep our dependencies up to date and squash bugs as they
                come!
              </p>
            </div>
            <div className="itemText"></div>
          </div>
        </div>
        <div
          className="col-12"
          style={{
            backgroundColor: "#ced4da",
            borderRadius: "20px",
            maxWidth: "48%",
          }}
        >
          <div className="itemContent px-5 py-3 d-inline-flex">
            <div
              className="itemIcoin rounded-pill"
              style={{
                color: "white",
              }}
            >
              <i
                class="fa-solid fa-circle-check bg-primary rounded-pill"
                style={{
                  width: "50px",
                  height: "50px",
                  transform: "translateY(-40px)",
                  lineHeight: "50px",
                }}
              ></i>
              <h1 style={{ color: "black", fontStyle: "italic" }}>
                A name you trust
              </h1>
              <p style={{ color: "black", letterSpacing: "2px" }}>
                Start Bootstrap has been the leader in free Bootstrap templates
                since 2023!
              </p>
            </div>
            <div className="itemText"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Item;
