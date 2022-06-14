import React, { useState, useEffect } from "react";
import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";

import styles from "../styles/Home.module.css";

import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { MdAlternateEmail } from "react-icons/md";
import { Input, Space } from "antd";
import Button from "../common/Button";

import axios from "axios";

function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState();

  const [errorMessage, setErrorMessge] = useState(null);
  const router = useRouter();

  const handleSignIn = () => {
    const body = {
      identifier: email,
      password: password,
    };
    axios
      .post(process.env.BASE_URL + "/auth/local", body)
      .then((res) => {
        setErrorMessge("");
        console.log(res);
        localStorage.setItem("jwt", res.data.jwt);
        router.push("/");
      })
      .catch((e) => setErrorMessge("*" + e.response.data.error.message + "*"));
  };
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
            <span className="greyText">
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
                <label>Email or username</label>
                <Input
                  placeholder="Enter your email or username"
                  suffix={<MdAlternateEmail />}
                  className={styles.signinInput}
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
                  className={styles.signinInput}
                  onChange={(e) => setPassword(e.target.value)}
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

export default SignIn;
