import React from "react";
import {
  Container,
  Box,
  Text,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
} from "@chakra-ui/react";
import Login from "../components/Authentication/Login";
import Signup from "../components/Authentication/Signup";

const HomePage = () => {
  return (
    <Container maxW="xl" centerContent>
      <Box
        d="flex"
        justifyContent="center"
        p={3}
        bg="#a7c2ff"
        w="100%"
        m="40px 0 15px 0"
        borderRadius="lg"
        borderWidth="1px"
      >
        <Text fontSize="4xl" color="#0000A8" fontWeight="bold">
          OzzyChat
        </Text>
      </Box>
      <Box
        bg="#a7c2ff"
        w="100%"
        p={4}
        borderRadius="lg"
        borderWidth="1px"
        color="#0000A8"
      >
        <Tabs variant="soft-rounded">
          <TabList mb="1em">
            <Tab width="50%" color="#0000A8">
              Login
            </Tab>
            <Tab width="50%" color="#0000A8">
              Sign Up
            </Tab>
          </TabList>
          <TabPanels>
            <TabPanel>
              <Login />
            </TabPanel>
            <TabPanel>
              <Signup />
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Box>
    </Container>
  );
};

export default HomePage;
