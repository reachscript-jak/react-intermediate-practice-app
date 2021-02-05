/* eslint-disable react-hooks/exhaustive-deps */
import { useCallback, useState } from "react";
import axios from "axios";

import { User } from "../types/api/user";
import { useMessage } from "./useMessage";

export const useAllUsers = () => {
  const { showMessage } = useMessage();

  const [loading, setLoading] = useState(false);
  const [users, setUsers] = useState<Array<User>>([]);

  const getUsers = useCallback(() => {
    setLoading(true);
    axios
      .get<Array<User>>("https://jsonplaceholder.typicode.com/users")
      .then(res => setUsers(res.data))
      .catch(() =>
        showMessage({ title: "ユーザー取得に失敗しました", status: "error" })
      )
      .finally(() => setLoading(false));
  }, []);

  return { getUsers, loading, users };
};
