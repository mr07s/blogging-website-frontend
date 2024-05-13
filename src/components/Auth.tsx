import { SignupputType } from "@soumyadeep/medium-common";
import axios from "axios";
import { ChangeEvent, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { BACKEND_URL } from "../config";
// import Button from "./Button";

export const Auth = ({ type }: { type: "signup" | "signin" }) => {
  // const [username, setUsername] = useState<string>("");
  // const [email, setEmail] = useState<string>("");
  // const [password, setPassword] = useState<string>("");
  const [postInput, setPostInput] = useState<SignupputType>({
    email: "",
    password: "",
    name: "",
  });
  const navigate = useNavigate();
  async function handleRequest() {
    try {
      const response = await axios.post(
        `${BACKEND_URL}/api/v1/user/${type === "signup" ? "signup" : "signin"}`,
        {
          postInput,
        }
      );
      console.log(response);
      const jwt = response.data.jwt;
      console.log(jwt);

      localStorage.setItem("token", jwt);
      navigate("/blogs");
    } catch (e) {
      // Notifdy the user that a error happend
      alert(e);
    }
  }
  return (
    <div className=" h-screen flex justify-center flex-col">
      <div className="flex justify-center ">
        <div>
          <div className="text-3xl font-extrabold">
            {type === "signup" ? "Create an account" : "LogIn To your account"}
          </div>
          <div className="text-slate-400">
            {type === "signup"
              ? "Already Have An account?"
              : "Create new account"}

            <Link
              className="pl-2 underline"
              to={type === "signin" ? "/signup" : "/signin"}
            >
              {type === "signin" ? "Signup" : "LogIn"}
            </Link>
          </div>
          {type === "signup" ? (
            <LabledInput
              lable="Name"
              placeholder="Name"
              onChange={(e) => {
                setPostInput((c) => ({
                  ...c,
                  name: e.target.value,
                }));
              }}
            />
          ) : (
            <></>
          )}
          <LabledInput
            lable="Email"
            placeholder="Email"
            onChange={(e) => {
              setPostInput((c) => ({
                ...c,
                email: e.target.value,
              }));
            }}
          />
          <LabledInput
            type="password"
            lable="Password"
            placeholder="Password"
            onChange={(e) => {
              setPostInput((c) => ({
                ...c,
                password: e.target.value,
              }));
            }}
          />
          <div className="">
            <button
              type="button"
              onClick={handleRequest}
              className="flex justify mt-3 bg-black w-full justify-center text-white h-8 items-center rounded-md"
            >
              {type === "signin" ? "SignIn" : "SignUp"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
interface Labledinputtype {
  lable: string;
  placeholder: string;
  type?: "text" | string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}
function LabledInput({ lable, placeholder, onChange, type }: Labledinputtype) {
  return (
    <div>
      <label className="block mb-2 text-sm font-medium text-gray-900 pt-4">
        {lable}
      </label>
      <input
        onChange={onChange}
        type={type}
        id="first_name"
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500"
        placeholder={placeholder}
        required
      />
    </div>
  );
}
