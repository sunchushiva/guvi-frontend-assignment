import { Box, Heading } from "@chakra-ui/react";
import "../styles/styles.css";

export default function Loading() {
  return (
    <Box
      position="fixed"
      top="0"
      left="0"
      right="0"
      bottom="0"
      display="flex"
      justifyContent="center"
      alignItems="center"
      backgroundColor="rgba(88, 88, 88, 0.482)"
      zIndex="10000000000000"
      className="Loading"
    >
      <Heading as="h1" fontSize={["25px", "30px", "40px"]}>
        Loading
      </Heading>
    </Box>
  );
}
