import React, { use, useState } from "react";
import AuthWrapper from "@/app/pages/Wrappers/AuthWrapper/Wrapper";
import "./style.scss";
import Image from "next/image";
import Input from "@/app/components/Input/Input";
import ChieldIcon from "@/app/icons/ChieldIcon";
import SecurityKeyIcon from "@/app/icons/SecurityKeyIcon";
import Button from "@/app/components/Button/Button";
import { SignUpSchema, SignUpType } from "@/app/utils/validation";
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
  } = useForm<SignUpType>({
    resolver: yupResolver(SignUpSchema),
  });

  const onSubmit: SubmitHandler<SignUpType> = async (data) => {
    try {
      const response = await axios.post("/api/v1/register", data);

      toast.success("Регистрация прошла успешно!");

      router.push("/auth/sing-up");
    } catch (error) {
      console.log(error);

      if (
        error instanceof AxiosError &&
        error.response?.data &&
        error.response?.data.errors
      ) {
        toast.error(error.response.data.message);
      } else {
        toast.error("Произошла ошибка при регистрации!");
      }
    }
  };

  return (
    <AuthWrapper>
      <>
        <div className="auth-card">
          <div className="header">
            <Image
              src="/imgs/logo_white.png"
              alt="Logo"
              priority
              width="115"
              height="39"
            />
          </div>
          <div className="body">
            <h3>Register</h3>
            <div className="inputs">
              <Input
                type="text"
                placeholder="Security Key"
                className="input"
                iconLeft={
                  <SecurityKeyIcon width={17} height={17} color="#26333D" />
                }
                register={register("securityKey")}
                error={errors.securityKey?.message}
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
                style={{ width: "100%" }}
                onClick={handleSubmit(onSubmit)}
              >
                Sign Up
              </Button>
            </div>

            <div className="separator"></div>

            <div className="button-change">
              <Button
                onClick={() => router.push("/auth/sign-in")}
                color="highlight"
                size="lg"
                style={{ width: "100%" }}
              >
                Sign In
              </Button>
            </div>
          </div>
        </div>
      </>
    </AuthWrapper>
  );
};

export default Page;
