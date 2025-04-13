import { Container, Flex, HStack, Text,Button} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { ColorModeButton, } from "./ui/color-mode";
import { LuPlus } from "react-icons/lu";
const Navbar = () => {
  return (
    <Container px={4} >
      <Flex
        h={16}
        alignItems={"center"}
        justifyContent={"space-between"}
        flexDir={{ base: "column", sm: "row" }}
      >
        <Text
          textAlign="center"
          fontSize={{ base: "22", sm: "28" }}
          textTransform={"uppercase"}
          fontWeight={"bold"}
          bgGradient="to-r"
          gradientFrom="cyan.400"
          gradientTo="blue.500"
          bgClip={"text"}
        >
          <Link to={"/"}>Product Store 🛒</Link>
        </Text>
        <HStack>
            <Button size={'md'} variant={'outline'}>
                <Link to={"/create"}><LuPlus/></Link>
            </Button>
            <ColorModeButton/>
        </HStack>
      </Flex>
    </Container>
  );
};

export default Navbar;
