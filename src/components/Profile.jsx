import {
  Box,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Text,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { GETUSERCALL, UPDATEUSERCALL } from "../redux/actions";

const initialState = {
  age: null,
  contact: null,
  city: null,
};
export default function Profile() {
  const { userInformation, token } = useSelector((store) => store.mainReducer);
  const [state, setState] = useState(initialState);
  const dispatch = useDispatch();

  const inputHandler = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setState({ ...state, [name]: value });
  };

  const submitHandler = (e) => {
    e.preventDefault();
    UPDATEUSERCALL(dispatch, state, userInformation._id, token);
  };

  useEffect(() => {
    GETUSERCALL(dispatch, token);
  }, []);

  return (
    <>
      <Heading
        as="h3"
        fontSize={["22px", "23px", "28px", "30px"]}
        textAlign="center"
        marginBottom={{ base: "18px", md: "20px", lg: "30px" }}
      >
        Profile Details
      </Heading>
      <Flex
        width={["60%"]}
        margin={["auto"]}
        justifyContent={"space-between"}
        alignItems={"center"}
      >
        <Box
          boxShadow={["rgba(0, 0, 0, 0.05) 0px 0px 0px 1px"]}
          padding={["1.5rem 2rem"]}
          width={["40%"]}
          borderRadius={["8px"]}
        >
          <Flex
            marginBottom={["10px"]}
            justifyContent={"space-between"}
            alignItems={"center"}
          >
            <Text
              as="b"
              fontSize={["12px", "14px", "16px", "18px"]}
              textAlign={["justify"]}
            >
              Age
            </Text>
            <Text
              fontSize={["12px", "14px", "16px", "18px"]}
              textAlign={["justify"]}
            >
              {userInformation?.age || "Add age"}
            </Text>
          </Flex>
          <Flex
            marginBottom={["10px"]}
            justifyContent={"space-between"}
            alignItems={"center"}
          >
            <Text
              as="b"
              fontSize={["12px", "14px", "16px", "18px"]}
              textAlign={["justify"]}
            >
              City
            </Text>
            <Text
              fontSize={["12px", "14px", "16px", "18px"]}
              textAlign={["justify"]}
            >
              {userInformation?.city || "Add city"}
            </Text>
          </Flex>
          <Flex justifyContent={"space-between"} alignItems={"center"}>
            <Text
              as="b"
              fontSize={["12px", "14px", "16px", "18px"]}
              textAlign={["justify"]}
            >
              Contact
            </Text>
            <Text
              fontSize={["12px", "14px", "16px", "18px"]}
              textAlign={["justify"]}
            >
              {userInformation?.contact || "Add contact"}
            </Text>
          </Flex>
        </Box>
        <Box width={["40%"]}>
          <form onSubmit={(e) => submitHandler(e)}>
            <FormControl marginBottom={["15px"]}>
              <FormLabel fontSize={{ base: "13px", md: "14px", lg: "16px" }}>
                Age
              </FormLabel>
              <Input
                name="age"
                onChange={(e) => inputHandler(e)}
                value={state.age}
                variant="filled"
                type="number"
                placeholder="How old are you"
                fontSize={{ base: "14px", md: "16px", lg: "17px" }}
              />
            </FormControl>
            <FormControl marginBottom={["15px"]}>
              <FormLabel fontSize={{ base: "13px", md: "14px", lg: "16px" }}>
                City
              </FormLabel>
              <Input
                name="city"
                onChange={(e) => inputHandler(e)}
                value={state.city}
                variant="filled"
                type="text"
                placeholder="Enter your city"
                fontSize={{ base: "14px", md: "16px", lg: "17px" }}
              />
            </FormControl>
            <FormControl marginBottom={["15px"]}>
              <FormLabel fontSize={{ base: "13px", md: "14px", lg: "16px" }}>
                Contact
              </FormLabel>
              <Input
                name="contact"
                onChange={(e) => inputHandler(e)}
                value={state.contact}
                variant="filled"
                type="number"
                placeholder="Phone number"
                fontSize={{ base: "14px", md: "16px", lg: "17px" }}
              />
            </FormControl>
            <Input
              type="submit"
              isDisabled={
                state.age === null ||
                state.contact === null ||
                state.city === null
                  ? true
                  : false
              }
              value="Save"
              cursor="pointer"
              fontSize={{ base: "14px", md: "16px", lg: "17px" }}
              border="none"
              color="white"
              bg="#393646"
              _hover={{
                bg: "#4F4557",
              }}
            />
          </form>
        </Box>
      </Flex>
    </>
  );
}
