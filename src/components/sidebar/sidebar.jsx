import React from "react";
import { NavLink as RouterLink } from "react-router-dom";
import { Box, Center, Flex, Link, Text } from "@chakra-ui/react";
import { FiHome } from "react-icons/fi";
import { GoGear } from "react-icons/go";
import { motion } from "framer-motion";

const Sidebar = () => {
  return (
    <Box w="100%" h="100%" py="20%" px="20%">
      <SidebarContent />
    </Box>
  );
};

const SidebarContent = () => {
  const defaultLink = {
    container: {
      backgroundColor: "tramsparent",
      color: "#9b9ca1",
    },
    icon: {
      backgroundColor: "white",
      color: "#a2a4b6",
    },
  };

  const activeLink = {
    container: {
      backgroundColor: "#f87193",
      color: "white",
    },
    icon: {
      backgroundColor: "#ec6083",
      color: "white",
    },
  };

  return (
    <Flex justifyContent="center" w="100%" wrap="wrap">
      <Text fontSize="xl" fontWeight="bold">
        HELLO
      </Text>
      <Flex mt={10} wrap="wrap" gap={4}>
        <Link
          as={RouterLink}
          to="/"
          style={{ textDecoration: "none" }}
          _focus={{ boxShadow: "none" }}
        >
          {({ isActive }) => {
            const { container, icon } = isActive ? activeLink : defaultLink;

            return (
              <Flex
                as={motion.button}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                w="10vw"
                minHeight="65px"
                fontWeight="bold"
                sx={{
                  borderRadius: "15px",
                  backgroundColor: container.backgroundColor,
                }}
              >
                <Center
                  fontSize="2xl"
                  sx={{
                    borderRadius: "15px",
                    backgroundColor: icon.backgroundColor,
                    color: icon.color,
                  }}
                  h="65px"
                  w="65px"
                >
                  <FiHome />
                </Center>
                <Center
                  h="65px"
                  color="white"
                  textAlign="center"
                  alignItems="center"
                  sx={{ color: container.color }}
                >
                  <Text>Tất cả các món ăn</Text>
                </Center>
              </Flex>
            );
          }}
        </Link>
        <Link
          as={RouterLink}
          to="/build"
          style={{ textDecoration: "none" }}
          _focus={{ boxShadow: "none" }}
        >
          {({ isActive }) => {
            const { container, icon } = isActive ? activeLink : defaultLink;

            return (
              <Flex
                as={motion.button}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                w="10vw"
                minHeight="65px"
                sx={{
                  borderRadius: "15px",
                  backgroundColor: container.backgroundColor,
                }}
                fontWeight="bold"
              >
                <Center
                  fontSize="2xl"
                  sx={{
                    borderRadius: "15px",
                    backgroundColor: icon.backgroundColor,
                    color: icon.color,
                  }}
                  h="65px"
                  w="65px"
                >
                  <GoGear />
                </Center>
                <Center
                  h="65px"
                  color="white"
                  textAlign="center"
                  alignItems="center"
                  sx={{ color: container.color }}
                >
                  <Text>Xây dựng thực đơn</Text>
                </Center>
              </Flex>
            );
          }}
        </Link>
      </Flex>
    </Flex>
  );
};

export default Sidebar;
