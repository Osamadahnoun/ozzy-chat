import React, { useEffect, useState } from "react";
import { ChatState } from "../Context/ChatProvider";
import { Box } from "@chakra-ui/react";
import SideDrawer from "../components/miscComponents/SideDrawer";
import ChatBox from "../components/ChatBox";
import MyChats from "../components/MyChats";

const ChatPage = () => {
  const [fetchAgain, setFetchAgain] = useState(false);
  const { user } = ChatState();

  const reloadCount = Number(sessionStorage.getItem("reloadCount")) || 0;
  useEffect(() => {
    if (reloadCount < 2) {
      sessionStorage.setItem("reloadCount", String(reloadCount + 1));
      window.location.reload();
    } else {
      sessionStorage.removeItem("reloadCount");
    }
  }, []);

  return (
    <div className="chatDiv">
      {user && <SideDrawer />}
      <Box d="flex" justifyContent="space-between" w="100" h="91.5vh" p="10px">
        {user && <MyChats fetchAgain={fetchAgain} />}
        {user && <ChatBox />}
      </Box>
    </div>
  );
};

export default ChatPage;
