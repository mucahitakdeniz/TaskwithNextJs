"use client";
import { createContext, useContext, useEffect, useState } from "react";
import {
  toastErrorNotify,
  toastSuccessNotify,
  toastWarnNotify,
} from "@/helpers/ToastNotify";

export const PostContext = createContext();

export const usePostContext = () => {
  return useContext(PostContext);
};

const PostContextProvider = ({ children }) => {
  const router = useRouter();

  //   const createUser = async (firstName, lastName, email) => {
  //     try {
  //       let newUser = await createUserWithEmailAndPassword(
  //         firstName,
  //         lastName,
  //         email
  //       );
  //       //? kullanıcı profilini güncellemek için kullanılan firebase metodu
  //       await updateProfile(auth.currentUser, {
  //         displayName: displayName,
  //       });
  //       router.push("/profile");
  //       // router.back()
  //       // router.forward()
  //       toastSuccessNotify("Registered successfully!");
  //       console.log(userCredential);
  //     } catch (err) {
  //       toastErrorNotify(err.message);
  //     }
  //   };
  const likePost = async () => {};
  const commentPost = async () => {};
  const createPost = async () => {};

  const values = {};
  return <AuthContext.Provider value={values}>{children}</AuthContext.Provider>;
};

export default PostContextProvider;
