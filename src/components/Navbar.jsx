import { Box, Heading, Button } from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { LOGOUTCALL } from "../redux/actions";

export default function Navbar() {
  const { loggedIn } = useSelector((store) => store.mainReducer);
  const dispatch = useDispatch();
  return (
    <Box
      bg="#393646"
      padding={["15px 20px", "15px 30px", "25px 50px"]}
      position="sticky"
      top="0"
      width="100%"
      display="flex"
      alignItems="flex-end"
      justifyContent="space-between"
      zIndex="1000000"
      color="#F4EEE0"
      marginBottom={["50px", "60px", "70px"]}
    >
      <Box>
        <Link to="/dashboard">
          <Heading
            as="h1"
            fontSize={["12px", "20px", "25px", "30px"]}
            letterSpacing={["1px"]}
          >
            GUVI Assignment
          </Heading>
        </Link>
      </Box>
      <Box display={loggedIn ? "block" : "none"}>
        <Button
          color="#887ab4"
          _hover={{
            color: "black",
          }}
          onClick={() => LOGOUTCALL(dispatch)}
        >
          Logout{" "}
        </Button>
      </Box>
    </Box>
  );
}
