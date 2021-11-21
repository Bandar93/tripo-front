import React from 'react'
import {
    Box,
    Text,
    Heading,
    VStack,
    FormControl,
    Input,
    Link,
    Button,
    HStack,
    Center,
    useToast
  } from "native-base"
  import { useState } from "react"
import authStore from "../../stores/authStore";

  
const Signup = ({navigation}) => {
    const toast = useToast()
     const [user, setUser] = useState({
         username: "",
         password: "",
     });

     const handleSubmit = () => {
        authStore.signup(user,navigation,toast);
     }
    

    return (
        

        <Center flex={1} px="3">
        <Box safeArea p="2" py="8" w="90%" maxW="290">
          <Heading
            size="lg"
            fontWeight="600"
            color="coolGray.800"
            _dark={{
              color: "warmGray.50",
            }}
          >
            Tripo  
            Sign up
          </Heading>
          <Heading
            mt="1"
            _dark={{
              color: "warmGray.200",
            }}
            color="coolGray.600"
            fontWeight="medium"
            size="xs"
          >
            Welcome
          </Heading>
    
          <VStack space={3} mt="5">
            <FormControl>
              <FormControl.Label>UserName</FormControl.Label>
              <Input onChangeText={(value) => setUser({ ...user,username: value })} />
            </FormControl>
            <FormControl>
              <FormControl.Label>Password</FormControl.Label>
              <Input
                   type="password"
                   onChangeText={(value) => setUser({ ...user, password: value })}
                   />
              <Link
                _text={{
                  fontSize: "xs",
                  fontWeight: "500",
                  color: "indigo.500",
                }}
                alignSelf="flex-end"
                mt="1"
              >
                Forget Password?
              </Link>
            </FormControl>
            <Button mt="2" colorScheme="indigo" onPress={handleSubmit}>
              Sign up
            </Button>
            <HStack mt="6" justifyContent="center">
              <Text
                fontSize="sm"
                color="coolGray.600"
                _dark={{
                  color: "warmGray.200",
                }}
              >
                I already have account
              </Text>
              <Link
                _text={{
                  color: "indigo.500",
                  fontWeight: "medium",
                  fontSize: "sm",
                }}
                onPress={() => navigation.navigate("Signin")}
              >
                Sign in
              </Link>
            </HStack>
          </VStack>
        </Box>
        </Center>
      )
    }

export default Signup
