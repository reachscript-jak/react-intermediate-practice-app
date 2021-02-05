/* eslint-disable react-hooks/exhaustive-deps */
import { useCallback } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";

import { User } from "../types/api/user";
import { useMessage } from "./useMessage";

export const useAuth = () => {
  const history = useHistory();
  const { showMessage } = useMessage();

  const login = useCallback((id: string) => {
    axios
      .get<User>(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then(res => {
        if (res.data) {
          showMessage({ title: "ログインしました", status: "success" });
          history.push("/home");
        } else {
          showMessage({ title: "ユーザーが見つかりません", status: "error" });
        }
      })
      .catch(() =>
        showMessage({ title: "ユーザーが見つかりません", status: "error" })
      );
  }, []);

  return { login };
};
