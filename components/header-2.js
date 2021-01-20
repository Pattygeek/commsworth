import { Box, Text } from "@chakra-ui/react";
import Navbar from "./navbar";

const HeaderTwo = () => {
	return (
		<>
			<Box
				h="100vh"
				w="100%"
				objectFit="contain"
				bg="radial-gradient(77.19% 288.38% at 77.19% 45.23%, rgba(19, 13, 37, 0.41) 5.02%, rgba(19, 13, 37, 0.88) 33.62%, #130D25 69.39%, #130D25 100%), url(/images/header-2.png)"
			>
				<Navbar />
				<Box w="85%" mx="auto">
					<Box w="50%">
						<Text color="white">14th Edition of the SERAS CSR awards</Text>
						<Text color="white">
							The Story of The SERAS began in 2007 when the very first edition
							held at Lagos, Nigeria. it’ll be holding this year at Raddison Blu
							on the 2nd of February, 2021
						</Text>
						<Text fontWeight="bold" textTransform="uppercase" color="brand.200">
							Make Reservation
						</Text>
					</Box>
				</Box>
			</Box>
		</>
	);
};
export default HeaderTwo;
