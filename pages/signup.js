import React from "react";
import Head from "next/head";
import Link from "next/link";

import styles from "../styles/Home.module.css";

import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { MdAlternateEmail } from "react-icons/md";
import { Input, Space } from "antd";
import Button from "../common/Button";

function signIn() {
  const handleSignIn = () => {};
  return (
    <>
      <Head>
        <title>Sign Up</title>
        <meta name="description" content="Sign Up" />
        <link rel="icon" href="favicon.svg" />
      </Head>

      <section className={styles.signinContainer}>
        <div className={styles.col1}>
          <div>
            <span>
              Have an account? <Link href="signIn">Sign In</Link>
            </span>
            <h1 className={styles.signinTitle}>Welcome to Books!</h1>
            <p className={styles.signinParagraph}>
              lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut.
            </p>
            <Space
              direction="horizontal"
              style={{
                width: "100%",
                marginBottom: "20px",
              }}
            >
              <div className={styles.inputContainer}>
                <label>First Name</label>
                <Input
                  placeholder="Your first name"
                  className={`${styles.signinInput}`}
                />
              </div>

              <div className={styles.inputContainer}>
                <label>Last Name</label>
                <Input
                  placeholder="Your last name"
                  className={`${styles.signinInput}`}
                />
              </div>
            </Space>
            <Space
              direction="vertical"
              style={{ width: "100%", marginBottom: "20px" }}
            >
              <div
                className={styles.inputContainer}
                style={{ marginBottom: "20px" }}
              >
                <label>Email</label>
                <Input
                  placeholder="Enter your email"
                  suffix={<MdAlternateEmail />}
                  className={`w-100 ${styles.signinInput}`}
                />
              </div>

              <div className={styles.inputContainer}>
                <label>Password</label>
                <Input.Password
                  placeholder="Enter your password"
                  iconRender={(visible) =>
                    visible ? <AiOutlineEye /> : <AiOutlineEyeInvisible />
                  }
                  className={`w-100 ${styles.signinInput}`}
                />
              </div>
            </Space>
            <Button
              variant="primary"
              value="Create an account"
              width="full"
              style={{ marginTop: "20px" }}
              onClick={handleSignIn}
            />
          </div>
        </div>
        <div className={styles.col2}></div>
      </section>
    </>
  );
}

export default signIn;
