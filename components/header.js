import { Box, Text, Flex, Image } from "@chakra-ui/react";
import Navbar from "./navbar";
import HeaderThree from "./header-3";
import HeaderTwo from "./header-2";
import { useState } from "react";

const Header = () => {
	const [pic, setPic] = useState("first");
	const [heading, setHeading] = useState(<HeaderThree />);

	const handleFirst = () => {
		setPic("first");
		setHeading(<HeaderThree />);
	};

	const handleSecond = () => {
		setPic("second");
		setHeading(<HeaderTwo />);
	};

	
	return (
		<>
			<Box
				h="100vh"
				w="100%"
				position="relative"
				bg={`radial-gradient(77.19% 288.38% at 77.19% 45.23%, rgba(19, 13, 37, 0.41) 5.02%, rgba(19, 13, 37, 0.88) 33.62%, #130D25 69.39%, #130D25 100%), url(${
					pic === "first" ? "/images/header-1.png" : "/images/header-2.png"
				})`}
			>
				<Navbar />
				<Box w="85%" mx="auto" mt="10%">
					<Flex
						justifyContent="center"
						bottom={10}
						position="absolute"
						left="50%"
					>
						<Image
							src={pic === "first" ? "/dot.svg" : "/rec.svg"}
							height="14px"
							width="14px"
							mr={2}
							cursor="pointer"
							onClick={handleFirst}
						/>
						<Image
							src={pic === "second" ? "/dot.svg" : "/rec.svg"}
							height="14px"
							width="14px"
							cursor="pointer"
							onClick={handleSecond}
						/>
					</Flex>
					{heading}
				</Box>
			</Box>
		</>
	);
};
export default Header;
