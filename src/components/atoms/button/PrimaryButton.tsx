import { ReactNode, VFC } from "react";
import { Button } from "@chakra-ui/react";

type Props = {
  children: ReactNode;
  isFullWidth?: boolean;
  disabled?: boolean;
  onClick: () => void;
};

export const PrimaryButton: VFC<Props> = props => {
  const { children, isFullWidth = false, disabled = false, onClick } = props;

  return (
    <Button
      bg="teal.400"
      color="white"
      isFullWidth={isFullWidth}
      disabled={disabled}
      _hover={{ opacity: 0.8 }}
      onClick={onClick}
    >
      {children}
    </Button>
  );
};
