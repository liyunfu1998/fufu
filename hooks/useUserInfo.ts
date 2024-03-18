import { router } from "expo-router";

import { useAppDispatch } from "./useRedux";
import useVerify from "./useVerify";

import { useGetUserInfoQuery } from "@/services";
import { setTokenAsync } from "@/store";

export default function useUserInfo() {
  const dispatch = useAppDispatch();
  const isVerify = useVerify();

  const { data, isLoading, error, isError } = useGetUserInfoQuery(undefined, {
    skip: !isVerify,
  });

  const isLoginVerify = !isVerify ? false : isLoading ? false : !!data?.data;

  const mustAuthAction = (nextAction: any) => {
    if (!isLoginVerify) {
      return router.push("/login");
    }
    nextAction();
  };

  if (isError) dispatch<any>(setTokenAsync(""));

  return {
    userInfo: data?.data,
    isVerify,
    isLoginVerify,
    mustAuthAction,
    isLoading,
    error,
    isError,
  };
}
