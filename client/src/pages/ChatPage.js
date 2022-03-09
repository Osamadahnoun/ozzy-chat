import React from "react";
import { ChatState } from "../Context/ChatProvider";
import { Box } from "@chakra-ui/react";
import SideDrawer from "../components/miscComponents/SideDrawer";
import ChatBox from "../components/ChatBox";
import MyChats from "../components/MyChats";

const ChatPage = () => {
  const { user } = ChatState();
  return (
    <div className="chatDiv">
      {user && <SideDrawer />}
      <Box d="flex" justifyContent="space-between" w="100" h="91.5vh" p="10px">
        {user && <MyChats />}
        {user && <ChatBox />}
      </Box>
    </div>
  );
};

export default ChatPage;
