import { ReactNode, VFC } from "react";
import { Button } from "@chakra-ui/react";

type Props = {
  children: ReactNode;
  isFullWidth?: boolean;
};

export const PrimaryButton: VFC<Props> = props => {
  const { children, isFullWidth = false } = props;

  return (
    <Button
      bg="teal.400"
      color="white"
      isFullWidth={isFullWidth}
      _hover={{ opacity: 0.8 }}
    >
      {children}
    </Button>
  );
};
