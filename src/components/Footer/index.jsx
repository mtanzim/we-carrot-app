﻿import React from "react";
import styles from "./footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className="container-fluid">
        <div className="row justify-content-left">
          <div className="col-8 col-md-5">
            <h5 className={styles.title}>Nulleimer</h5>
            <p className={styles.description}>
              We save waste!
            </p>
          </div>
          {/* <div className="col-2">
            <ul className="list-unstyled">
              <li>
                <a className={styles.footerlink} href="/">
                  Example Link
                </a>
              </li>
              <li>
                <a className={styles.footerlink} href="/">
                  Example Link
                </a>
              </li>
              <li>
                <a className={styles.footerlink} href="/">
                  Example Link
                </a>
              </li>
            </ul>
          </div> */}
        </div>
      </div>
    </footer>
  );
}
