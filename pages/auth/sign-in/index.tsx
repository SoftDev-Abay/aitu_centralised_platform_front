import React, { use, useState } from "react";
import AuthWrapper from "@/app/pages/Wrappers/AuthWrapper/Wrapper";
import "./style.scss";
import Image from "next/image";
import Input from "@/app/components/Input/Input";
import ChieldIcon from "@/app/icons/ChieldIcon";
import ProfileIcon from "@/app/icons/ProfileIcon";
import Button from "@/app/components/Button/Button";
import { SignInSchema, SignInType } from "@/app/utils/validation";
import { useForm, SubmitHandler, set } from "react-hook-form";
import { ObjectSchema, AnyObject } from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useAxios } from "@/app/context/AxiosContext";
import { UseUserStore } from "@/app/store/useUserStore";
import { useRouter } from "next/router";
import Cookies from "js-cookie";
import { toast } from "react-toastify";
import { AxiosError } from "axios";

const Page = () => {
  const [passwordType, setPasswordType] = useState("password");

  const axios = useAxios();
  const router = useRouter();

  const changePasswordType = (type: string) => {
    setPasswordType(type);
  };

  const { currentUser } = UseUserStore.getState();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignInType>({
    resolver: yupResolver(SignInSchema),
  });

  const onSubmit: SubmitHandler<SignInType> = async (data) => {
    try {
      console.log(data);

      const responseLogin = await axios.post("/auth/login", {
        ...data,
      });

      const token = responseLogin.data.token;

      Cookies.set("token", token);

      const responseUserData = await axios.get("/users/visitor");
      const user = responseUserData.data;

      UseUserStore.getState().setCurrentUser(user);

      // console.log({ token });
      console.log({ token, user });

      toast.success("Authorization successful!");

      router.push("/public/post");
    } catch (error) {
      console.log(error);

      if (
        error instanceof AxiosError &&
        error.response?.data &&
        error.response?.data.errors
      ) {
        toast.error(error.response.data.message);
      } else {
        toast.error("Произошла ошибка при авторизации!");
      }
    }
  };

  return (
    <AuthWrapper>
      <>
        <div className="auth-card">
          <div className="header">
            <Image
              src="/imgs/aitu-logo.png"
              style={{ filter: "brightness(0) invert(1)" }}
              alt="Logo"
              priority
              width="70"
              height="39"
            />
            <h2 className="text-heading4-semibold text-white">
              Astana IT
              <br />
              University
            </h2>
          </div>
          <div className="body">
            <h3>Login</h3>
            <div className="inputs">
              <Input
                type="text"
                placeholder="Email"
                className="input"
                iconLeft={
                  <ProfileIcon width={17} height={17} color="#26333D" />
                }
                register={register("email")}
                error={errors.email?.message}
              />
              <Input
                type={passwordType}
                changeType={changePasswordType}
                placeholder="Password"
                className="input"
                iconLeft={<ChieldIcon color="#26333D" width={17} height={17} />}
                register={register("password")}
                error={errors.password?.message}
              />
            </div>
            <div className="actions">
              <Button
                color="primary"
                size="lg"
                style={{
                  width: "100%",
                  backgroundColor: "rgba(21, 108, 189, 1)",
                }}
                onClick={handleSubmit(onSubmit)}
              >
                Login
              </Button>
              <a href="#">Forgot password?</a>
            </div>

            <div className="separator"></div>

            <div className="button-change">
              <Button
                onClick={() => router.push("/auth/sign-up")}
                color="highlight"
                size="lg"
                style={{ width: "100%" }}
              >
                Sign Up
              </Button>
            </div>
          </div>
        </div>
      </>
    </AuthWrapper>
  );
};

export default Page;
