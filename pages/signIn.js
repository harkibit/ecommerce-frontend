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
              eiusmod tempor incididunt ut.
            </p>
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
                  className={styles.signinInput}
                />
              </div>

              <div className={styles.inputContainer}>
                <label>Password</label>
                <Input.Password
                  placeholder="Enter your password"
                  iconRender={(visible) =>
                    visible ? <AiOutlineEye /> : <AiOutlineEyeInvisible />
                  }
                  className={styles.signinInput}
                />
              </div>
            </Space>
            <Button
              variant="primary"
              value="Sign In"
              // size="small"
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
