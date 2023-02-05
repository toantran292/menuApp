import { Box, Grid, GridItem } from "@chakra-ui/react";
import { Outlet } from "react-router-dom";
import SimpleSidebar from "../components/sidebar/sidebar";

const Page = () => {
  return (
    <Box
      width="100vw"
      height="100vh"
      display="flex"
      alignItems="center"
      justifyContent="center"
      sx={{
        background:
          "linear-gradient(90deg, rgba(238,174,202,1) 0%, rgba(148,187,233,1) 100%)",
      }}
    >
      <Grid
        templateAreas={`
      "nav main"
      `}
        gridTemplateColumns={"240px"}
        h="95vh"
        w="98vw"
        // fontWeight="bold"
        sx={{
          background: "rgba(255, 255, 255, 0.17)",
          borderRadius: "16px",
          boxShadow: " 0 4px 30px rgba(0, 0, 0, 0.1)",
          backdropFilter: "blur(6px)",
          WebkitBackdropFilter: "blur(6px)",
          border: "1px solid rgba(255, 255, 255, 0.25)",
        }}
      >
        <GridItem area="nav">
          <SimpleSidebar />
        </GridItem>
        <GridItem p={5} area="main">
          <Box
            width="100%"
            // maxW="81.5vw"
            h="90vh"
            p="5"
            backgroundColor="white"
            borderRadius="10px"
            boxShadow="6px 8px 36px -5px rgba(0,0,0,0.75)"
            overflowX="hidden"
            overflowY="auto"
            css={{
              "&::-webkit-scrollbar": {
                width: "4px",
              },
              "&::-webkit-scrollbar-track": {
                width: "6px",
              },
              "&::-webkit-scrollbar-thumb": {
                borderRadius: "24px",
              },
            }}
            sx={{
              WebkitBoxShadow: "6px 8px 36px -5px rgba(0,0,0,0.75)",
            }}
          >
            <Outlet />
          </Box>
        </GridItem>
      </Grid>
    </Box>
  );
};

export default Page;
