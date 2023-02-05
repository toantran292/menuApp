import { Card, CardBody, Flex, Heading, Text } from "@chakra-ui/react";
import { Image } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const item = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
  },
};

const CardItem = ({ data, onOpen, ...props }) => {
  const navigate = useNavigate();
  return (
    <Card
      key={data.id}
      as={motion.li}
      variants={item}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.9 }}
      {...props}
      //chakra props
      maxW="sm"
      onClick={() => navigate(data.id)}
      // onClick={onOpen}
    >
      <CardBody>
        <Flex
          as={motion.div}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          gap={4}
        >
          <Image src={data.image} alt="" boxSize="150px" borderRadius="lg" />
          <Flex wrap="wrap" height="150px" overflow="hidden">
            <Heading size="md">{data.ten}</Heading>
            <Text fontWeight="normal" textOverflow="ellipsis">
              {data.nguyenlieu}
            </Text>
          </Flex>
        </Flex>
      </CardBody>
    </Card>
  );
};
export default CardItem;
