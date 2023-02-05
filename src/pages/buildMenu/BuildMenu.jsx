import {
  Box,
  Grid,
  Center,
  Text,
  Button,
  useToast,
  Link,
  Progress,
  Image,
  Flex,
} from "@chakra-ui/react";
import _, { isEmpty } from "lodash";
import { useEffect } from "react";
import { useState } from "react";
import { Link as ReactLink } from "react-router-dom";
import { motion } from "framer-motion";
import useDish from "../../hooks/useDish";

const getRandom = (arr, n) => {
  var result = new Array(n),
    len = arr.length,
    taken = new Array(len);
  if (n > len)
    throw new RangeError("getRandom: more elements taken than available");
  while (n--) {
    var x = Math.floor(Math.random() * len);
    result[n] = arr[x in taken ? taken[x] : x];
    taken[x] = --len in taken ? taken[len] : len;
  }
  return result;
};

const dayOfWeek = ["Thứ 2", "Thứ 3", "Thứ 4", "Thứ 5", "Thứ 6", "Thứ 7", "CN"];

// const categoryFood = ["mặn", "xào", "canh"];

const generateMenu = (dish) => {
  const dishByType = _.chain(dish)
    .groupBy("categoryFood")
    .map((value, key) => ({ categoryFood: key, data: value }))
    .value();

  return dishByType.map((food) => {
    return {
      ...food,
      data: getRandom(food.data, 7),
    };
  });
};
let interval = undefined;

const BuildMenu = () => {
  const toast = useToast();
  const { dish } = useDish();
  const [menus, setMenus] = useState(() => {
    let value = localStorage.getItem("menuGenerated");

    if (value) return JSON.parse(value);
    return null;
  });
  const [isLoading, setLoading] = useState(false);
  const [progress, setProgress] = useState(0.0);

  useEffect(() => {
    if (isLoading)
      interval = setInterval(() => {
        setProgress((prev) => prev + 1);
      }, 10);
    else clearInterval(interval);
  }, [isLoading]);

  useEffect(() => {
    if (((1 - Math.exp((-1 * progress) / 10)) * 100).toFixed(1) >= 100) {
      toast({
        title: "Đã tạo thực đơn theo tuần",
        description: "Hệ thống đã tạo thành công thực đơn cho bạn!",
        status: "success",
        variant: "left-accent",
        position: "top-right",
        duration: 2000,
        isClosable: true,
      });

      const value = generateMenu(dish);
      localStorage.setItem("menuGenerated", JSON.stringify(value));
      setMenus(value);
      setLoading(false);
      clearInterval(interval);
    }
  }, [progress, dish, toast]);

  const handleClick = () => {
    setLoading(true);
    setProgress(0);
  };

  const handleClear = () => {
    localStorage.removeItem("menuGenerated");
    setMenus(null);
  };
  return (
    <Box>
      <Button
        as={motion.button}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        transition={{ type: "spring", stiffness: 400, damping: 10 }}
        colorScheme="messenger"
        onClick={handleClick}
        my={3}
        isLoading={isLoading}
        loadingText="Đợi một chút"
      >
        Tạo thực đơn
      </Button>
      {!isEmpty(menus) && !isLoading && (
        <Button
          as={motion.button}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          transition={{ type: "spring", stiffness: 400, damping: 10 }}
          colorScheme="red"
          onClick={handleClear}
          m={3}
        >
          Xoá dữ liệu
        </Button>
      )}
      <Grid templateColumns="repeat(7, 1fr)" gap={3} my={5}>
        {dayOfWeek.map((day) => {
          return (
            <Center key={JSON.stringify(day)}>
              <Text fontWeight="bold" fontSize="2xl">
                {day}
              </Text>
            </Center>
          );
        })}
        {!isLoading &&
          menus?.map?.((categories) => {
            return categories?.data?.map?.((menu) => {
              return (
                <Link
                  key={menu.id}
                  as={ReactLink}
                  to={`/${menu.id}`}
                  style={{ textDecoration: "none" }}
                  _focus={{ boxShadow: "none" }}
                >
                  <Flex
                    as={motion.div}
                    whileHover={{ scale: 1.05, transition: { duration: 0.1 } }}
                    whileTap={{ scale: 0.9 }}
                    background=" rgba(148, 187, 233, 0.49)"
                    borderRadius=" 16px"
                    boxShadow=" 0 4px 30px rgba(0, 0, 0, 0.1)"
                    backdropFilter=" blur(7.1px)"
                    webkitbackdropfilter="blur(7.1px)"
                    flexDirection={"column"}
                    justifyContent="center"
                    alignItems="center"
                  >
                    <Image
                      mt={3}
                      objectFit="cover"
                      boxSize="150px"
                      borderRadius="lg"
                      src={menu.image}
                      alt={menu.ten}
                    />
                    <Text
                      textAlign="center"
                      p={2}
                      fontSize="xl"
                      fontWeight="bold"
                    >
                      {menu.ten}
                    </Text>
                  </Flex>
                </Link>
              );
            });
          })}
      </Grid>
      {!isLoading ? (
        _.isEmpty(menus) && (
          <Center>
            <Text fontSize="xl" fontWeight="bold">
              Không có dữ liệu
            </Text>
          </Center>
        )
      ) : (
        <>
          <Center>
            <Text>
              Đang tạo thực đơn...
              {((1 - Math.exp((-1 * progress) / 10)) * 100).toFixed(1)}%
            </Text>
          </Center>
          <Progress
            hasStripe
            value={Math.floor((1 - Math.exp((-1 * progress) / 10)) * 100)}
          />
        </>
      )}
    </Box>
  );
};

export default BuildMenu;
