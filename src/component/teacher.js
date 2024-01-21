import React, { useState } from "react";
import {
  Box,
  Container,
  Input,
  Button,
  VStack,
  HStack,
  Spinner,
  Flex,
  IconButton,
  Text,
  Image,
  ChakraProvider,
  flexbox,
} from "@chakra-ui/react";
import { Teachers } from "../api/fetchdata";

const Teacher = () => {
  const [userMessage, setUserMessage] = useState("");
  const [conversation, setConversation] = useState([
    {
      role: "system",
      content: "you are a assistent in open ai",
    },
  ]);
  const [loading, setLoading] = useState(false);

  const handleSendMessage = async () => {
    if (userMessage.trim() !== "") {
      setLoading(true);
      const userData = { role: "user", content: userMessage };
      const updatedChat = [...conversation, userData];
      const assistantResponse = await Teachers(updatedChat).catch((err) => {
        console.log(err);
        setLoading(false);
      });

      if (assistantResponse) {
        setConversation([...updatedChat, assistantResponse]);
      } else {
        setConversation([
          ...updatedChat,
          {
            role: "assistant",
            content: "need api key , free trail expired",
          },
        ]);
      }
      setUserMessage("");
      setLoading(false);
    }
  };

  return (
    <VStack
      position="relative"
      m="auto"
      height="100vh"
      overflow="hidden"
      p="2"
      bg="gray.700"
      spacing={4}
    >
      <Box m="2">
        <Text
          variant=""
          fontWeight="semibold"
          fontSize="x-large"
          textColor="white"
          textTransform="capitalize"
          align="center"
        >
          chatgpt 3.5 turbo
        </Text>
      </Box>
      <Box
        maxHeight="100vh"
        overflowY="scroll"
        bg="white"
        p="5"
        py="3"
        maxWidth="900px"
        margin="auto"
        mb="70px"
        borderWidth="1px"
        w="100%"
        h="100%"
        borderRadius="md"
      >
        {conversation.map((message) => {
          return (
            <>
              {message.role === "user" ? (
                <Flex
                  bg="gray.300"
                  p="2"
                  my="3"
                  rounded="xl"
                  width="100%"
                  alignItems="center"
                >
                  <Image
                    src={
                      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRqRyIiwYCq4s-fZi1zdmyfSuIPUvg9EyZ_Q&usqp=CAU"
                    }
                    aspectRatio={1 / 2}
                    w="10"
                    h="10"
                    mx="10px"
                    rounded="full"
                  />
                  <Text
                    variant=""
                    fontWeight="semibold"
                    my="auto"
                    fontSize="medium"
                    textTransform="capitalize"
                  >
                    {message.content}
                  </Text>
                </Flex>
              ) : (
                <>
                  {message.role !== "system" && (
                    <Flex
                      bg="gray.300"
                      p="2"
                      my="3"
                      rounded="xl"
                      width="100%"
                      alignItems="center"
                    >
                      <Image
                        src={
                          "https://th.bing.com/th/id/OIP.zBmIXRvEHz0hXz51y1DcyAHaHa?w=183&h=183&c=7&r=0&o=5&dpr=1.3&pid=1.7"
                        }
                        aspectRatio={1 / 2}
                        w="10"
                        h="10"
                        mx="10px"
                        rounded="full"
                      />
                      <Text
                        variant=""
                        fontWeight="semibold"
                        my="auto"
                        fontSize="medium"
                        textTransform="capitalize"
                        align="center"
                      >
                        {message.content}
                      </Text>
                    </Flex>
                  )}
                </>
              )}
            </>
          );
        })}
      </Box>
      <HStack
        bg="gray.700"
        textColor="black"
        maxWidth="900px"
        margin="auto"
        p="3"
        py="5"
        position="fixed"
        bottom="0"
        left="0"
        right="0"
      >
        <Input
          autoFocus
          p="3"
          py="4"
          bg="white"
          rounded="md"
          fontSize="medium"
          value={userMessage}
          onChange={(e) => setUserMessage(e.target.value)}
          placeholder="Type your message..."
        />
        <Button onClick={handleSendMessage} colorScheme="teal">
          Send
        </Button>
      </HStack>
      {loading && (
        <Box
          position="absolute"
          width="100vw"
          height="100vh"
          display="flex"
          justifyContent="center"
          alignItems="center"
        >
          <Image
            src={"https://c.tenor.com/0iK9a1WkT40AAAAC/loading-white.gif"}
            // aspectRatio={1 / 2}
            w="20"
            h="20"
            my="auto"
            rounded="full"
          />
        </Box>
      )}
    </VStack>
  );
};

export default Teacher;
