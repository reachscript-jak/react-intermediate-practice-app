import { memo, useCallback, useEffect, VFC } from "react";
import {
  Center,
  Spinner,
  useDisclosure,
  Wrap,
  WrapItem
} from "@chakra-ui/react";

import { UserCard } from "../../organisms/user/UserCard";
import { useAllUsers } from "../../../hooks/useAllUsers";
import { UserDetailModal } from "../../organisms/modal/UserDetailModal";

export const UserManagement: VFC = memo(() => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { getUsers, loading, users } = useAllUsers();

  useEffect(() => getUsers(), [getUsers]);

  const onClickUser = useCallback(() => onOpen(), [onOpen]);

  return (
    <>
      {loading ? (
        <Center h="100vh">
          <Spinner color="teal.200" />
        </Center>
      ) : (
        <Wrap p={{ base: 4, md: 10 }}>
          {users.map(obj => (
            <WrapItem key={obj.id} mx="auto">
              <UserCard
                imageUrl="https://source.unsplash.com/random"
                userName={obj.username}
                fullName={obj.name}
                onClick={onClickUser}
              />
            </WrapItem>
          ))}
        </Wrap>
      )}
      <UserDetailModal isOpen={isOpen} onClose={onClose} />
    </>
  );
});
