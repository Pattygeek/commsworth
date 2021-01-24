import { Box, Flex, Text, Image } from "@chakra-ui/react";
import Navbar from "./navbar";

const HeaderTwo = () => {
	return (
		<>
			{/* <Box
				h="100vh"
				w="100%"
				objectFit="contain"
				bg="radial-gradient(77.19% 288.38% at 77.19% 45.23%, rgba(19, 13, 37, 0.41) 5.02%, rgba(19, 13, 37, 0.88) 33.62%, #130D25 69.39%, #130D25 100%), url(/images/header-2.png)"
			>
				<Navbar /> */}
			{/* <Box w="85%" mx="auto"> */}
			<Box w="50%" mt="40">
				<Text
					color="white"
					fontSize="64px"
					my="8"
					lineHeight="72px"
					fontWeight={600}
					width="80%"
				>
					14th Edition of the SERAS CSR awards
				</Text>
				<Text
					color="white"
					mt="4"
					fontWeight={600}
					fontSize="xl"
					lineHeight="36px"
				>
					The Story of The SERAS began in 2007 when the very first edition held
					at Lagos, Nigeria. it’ll be holding this year at Raddison Blu on the
					2nd of February, 2021
				</Text>
				<Flex mt="12">
					<Text
						fontWeight="bold"
						textTransform="uppercase"
						color="brand.200"
						fontSize="20px"
						width="auto"
						position="relative"
						_after={{
							content: '""',
							position: "absolute",
							height: "2px",
							width: "194px",
							backgroundColor: "#4CB952",
							left: 0,
							bottom: "-3%",
						}}
					>
						Make Reservation
					</Text>
					<Image
						src="/Arrow.svg"
						ml="2"
						mt="2"
						_hover={{
							ml: "4",
						}}
						transition="all 0.4s cubic-bezier(0, 0.04, 0.04, 0.18);"
					/>
				</Flex>
			</Box>
			{/* </Box> */}
			{/* </Box> */}
		</>
	);
};
export default HeaderTwo;
