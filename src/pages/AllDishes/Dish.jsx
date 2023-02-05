import { Box, Button, Center, ListItem, OrderedList } from "@chakra-ui/react";
import { Flex, Heading, Text, Image, Stack } from "@chakra-ui/react";
import { motion } from "framer-motion";

const Dish = ({ data, onClose }) => {
  const { ten, image, cachchebien, nguyenlieu } = data[0];
  return (
    <Flex
      as={motion.div}
      initial={{ opacity: 0, y: 1000 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.8 }}
      transition={{ type: "spring" }}
      position="relative"
    >
      <Button
        as={motion.button}
        whileHover={{ scale: 1.3 }}
        whileTap={{ scale: 0.9 }}
        transition={{ type: "spring", stiffness: 400, damping: 10 }}
        position="absolute"
        onClick={onClose}
        top="0"
        right="0"
      >
        X
      </Button>
      <Image
        mr="5"
        objectFit="cover"
        maxW={{ base: "100%", sm: "500px" }}
        borderRadius="10px"
        src={image}
        alt={ten}
      />
      <Flex direction="column">
        <Center>
          <Heading size="4xl">{ten}</Heading>
        </Center>

        <Stack py={5} direction="row" gap={3}>
          <Box>
            <Text fontWeight="bold" fontSize="3xl">
              Nguyên liệu:
            </Text>
            <OrderedList spacing={1}>
              {nguyenlieu?.map?.((item) => {
                return (
                  <ListItem key={`${JSON.stringify(item)}`} fontSize="xl">
                    {item}
                  </ListItem>
                );
              })}
            </OrderedList>
          </Box>
          <Box>
            <Text fontWeight="bold" fontSize="3xl">
              Cách chế biến:
            </Text>
            <OrderedList spacing={1}>
              {cachchebien?.map?.((item) => {
                return (
                  <ListItem key={`${JSON.stringify(item)}`} fontSize="xl">
                    {item}
                  </ListItem>
                );
              })}
            </OrderedList>
          </Box>
        </Stack>
      </Flex>
    </Flex>
  );
};

export default Dish;
