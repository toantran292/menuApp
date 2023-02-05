import { Box, Grid } from "@chakra-ui/react";
import CardItem from "./CartItem";
import useDish from "../../hooks/useDish";
import { useNavigate, useParams } from "react-router-dom";
import Dish from "./Dish";
import { useEffect, useState } from "react";
import _ from "lodash";
import { AnimatePresence, motion } from "framer-motion";

const container = {
  hidden: { opacity: 1, scale: 0 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      delayChildren: 0.3,
      staggerChildren: 0.2,
    },
  },
};

const AllDishes = () => {
  const navigate = useNavigate();
  const { dish } = useDish();
  const { id } = useParams();
  const [data, setData] = useState(() => {
    const value = dish?.filter((item) => +item.id === +id);
    console.log(value);
    return value ?? null;
  });
  useEffect(() => {
    if (id) {
      const value = dish?.filter((item) => +item.id === +id);
      setData(value);
    } else {
      setData(null);
    }
  }, [id, dish]);

  return (
    <Box>
      <AnimatePresence mode="popLayout">
        {!_.isEmpty(data) ? (
          <Dish key="dish" data={data} onClose={() => navigate(-1)} />
        ) : (
          <Grid
            as={motion.ul}
            layout
            variants={container}
            initial="hidden"
            animate="visible"
            templateColumns="repeat(4, 1fr)"
            gap={6}
          >
            {dish &&
              dish.map((item) => {
                return <CardItem key={item.id} data={item} />;
              })}
          </Grid>
        )}
      </AnimatePresence>
    </Box>
  );
};

export default AllDishes;
