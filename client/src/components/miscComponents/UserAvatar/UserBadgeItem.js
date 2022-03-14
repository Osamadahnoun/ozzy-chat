import { CloseIcon } from "@chakra-ui/icons";
import { Box } from "@chakra-ui/react";
import React from "react";

const UserBadgeItem = ({ user, handleFunction }) => {
  return (
    <Box
      px={2}
      py={1}
      borderRadius="lg"
      m={1}
      mb={2}
      variant="solid"
      fontSize={12}
      backgroundColor="#0000a8"
      color="#a7c2ff"
      fontWeight="bold"
      cursor="pointer"
      onClick={handleFunction}
    >
      {user.name}

      <CloseIcon pl={1} />
    </Box>
  );
};

export default UserBadgeItem;
