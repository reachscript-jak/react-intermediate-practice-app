/* eslint-disable react-hooks/exhaustive-deps */
import { useCallback, useState } from "react";

import { User } from "../types/api/user";
import { useMessage } from "./useMessage";

type Props = {
  id: number;
  users: Array<User>;
  onOpen: () => void;
};

// 選択したユーザー情報を特定しモーダルを表示するカスタムフック
export const useSelectUser = () => {
  const { showMessage } = useMessage();

  const [selectedUser, setSelectedUser] = useState<User>();

  const onSelectUser = useCallback((props: Props) => {
    const { id, users, onOpen } = props;
    const targetUser = users.find(obj => obj.id === id);
    if (!targetUser) {
      showMessage({ title: "ユーザーが見つかりません", status: "error" });
      return;
    } else {
      setSelectedUser(targetUser);
      onOpen();
    }
  }, []);
  return { onSelectUser, selectedUser };
};
