import React from "react";
import Head from "next/head";
import Link from "next/link";

import styles from "../styles/Home.module.css";

import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { MdAlternateEmail } from "react-icons/md";
import { Input, Space } from "antd";

function signIn() {
  return (
    <>
      <Head>
        <title>Sign In</title>
        <meta name="description" content="Sign In" />
        <link rel="icon" href="favicon.svg" />
      </Head>

      <section className={styles.signinContainer}>
        <div className={styles.col1}>
          <div>
            <span>
              Need an account? <Link href="signup">Sign Up</Link>
            </span>

            <h1 className={styles.signinTitle}>Welcome Back!</h1>
            <p className={styles.signinParagraph}>
              lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam.
            </p>

            <Space direction="vertical">
              <div
                className={styles.inputContainer}
                style={{ marginBottom: "40px" }}
              >
                <label>Email</label>
                <Input
                  placeholder="Enter your email"
                  suffix={<MdAlternateEmail />}
                  style={{ width: "100%" }}
                />
              </div>

              <div className={styles.inputContainer}>
                <label>Password</label>
                <Input.Password
                  placeholder="Enter your password"
                  iconRender={(visible) =>
                    visible ? <AiOutlineEye /> : <AiOutlineEyeInvisible />
                  }
                  style={{ width: "100%" }}
                  className={styles.signinInput}
                />
              </div>
            </Space>
          </div>
        </div>
        <div className={styles.col2}></div>
      </section>
    </>
  );
}

export default signIn;
