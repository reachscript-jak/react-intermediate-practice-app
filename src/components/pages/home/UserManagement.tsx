import { memo, useEffect, VFC } from "react";
import { Center, Spinner, Wrap, WrapItem } from "@chakra-ui/react";

import { UserCard } from "../../organisms/user/UserCard";
import { useAllUsers } from "../../../hooks/useAllUsers";

export const UserManagement: VFC = memo(() => {
  const { getUsers, loading, users } = useAllUsers();

  useEffect(() => getUsers(), [getUsers]);

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
              />
            </WrapItem>
          ))}
        </Wrap>
      )}
    </>
  );
});
