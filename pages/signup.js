import React, { useState, useEffect } from "react";
import Head from "next/head";
import Link from "next/link";

import styles from "../styles/Home.module.css";

import {
  AiOutlineEye,
  AiOutlineEyeInvisible,
  AiFillGoogleCircle,
} from "react-icons/ai";
import { MdAlternateEmail } from "react-icons/md";
import { FaUserCheck } from "react-icons/fa";

import { Divider, Input, Space } from "antd";
import Button from "../common/Button";
import axios from "axios";

function SignUp() {
  const [firstName, setFirstname] = useState("");
  const [lastName, setLastname] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState(null);

  const [errorMessage, setErrorMessge] = useState(null);

  const handleSignUp = () => {
    const body = {
      firstName: firstName,
      lastName: lastName,
      username: username,
      email: email,
      password: password,
    };

    axios
      .post(process.env.BASE_URL + "/auth/local/register", body)
      .then((res) => {
        localStorage.setItem("jwt", res.data.jwt);
        setErrorMessge("");
      })
      .catch((e) => setErrorMessge("*" + e.response.data.error.message + "*"));
  };

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
                marginBottom: "15px",
              }}
            >
              <div className={styles.inputContainer}>
                <label>First Name</label>
                <Input
                  placeholder="Your first name"
                  className={`${styles.signinInput}`}
                  onChange={(e) => setFirstname(e.target.value)}
                />
              </div>

              <div className={styles.inputContainer}>
                <label>Last Name</label>
                <Input
                  placeholder="Your last name"
                  className={`${styles.signinInput}`}
                  onChange={(e) => setLastname(e.target.value)}
                />
              </div>
            </Space>
            <Space
              direction="vertical"
              style={{ width: "100%", marginBottom: "15px" }}
            >
              <div
                className={styles.inputContainer}
                style={{ marginBottom: "15px" }}
              >
                <label>Username</label>
                <Input
                  placeholder="Enter your username"
                  suffix={<FaUserCheck />}
                  className={`w-100 ${styles.signinInput}`}
                  onChange={(e) => setUsername(e.target.value)}
                />
              </div>

              <div
                className={styles.inputContainer}
                style={{ marginBottom: "15px" }}
              >
                <label>Email</label>
                <Input
                  placeholder="Enter your email"
                  suffix={<MdAlternateEmail />}
                  className={`w-100 ${styles.signinInput}`}
                  onChange={(e) => setEmail(e.target.value)}
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
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
            </Space>

            <div className={styles.errorMessage}>{errorMessage}</div>

            <Button
              variant="primary"
              value="Create an account"
              width="full"
              style={{ marginTop: "15px" }}
              onClick={handleSignUp}
            />

            <Divider plain> OR </Divider>

            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <button className={styles.signupIconBtn}>
                <AiFillGoogleCircle />
              </button>

              <button className={styles.signupIconBtn}>
                <AiFillGoogleCircle />
              </button>
            </div>
          </div>
        </div>
        <div className={styles.col2}></div>
      </section>
    </>
  );
}

export default SignUp;
