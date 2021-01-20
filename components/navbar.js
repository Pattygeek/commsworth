import { Box, Text, Image, Button, Flex } from "@chakra-ui/react";

const Navbar = () => {
	return (
		<>
			<Box bg="transparent" py="8" w="100%">
				<Box w="85%" mx="auto" display="flex">
					<Image src="/images/logo.png" />
					<Flex
						ml="auto"
						color="white"
						w="50%"
						justifyContent="space-between"
					>
						<Text fontWeight={600} fontSize="lg">
							Services
						</Text>
						<Text fontWeight={600} fontSize="lg">
							About Us
						</Text>
						<Text fontWeight={600} fontSize="lg">
							CSR Academy
						</Text>
						<Text fontWeight={600} fontSize="lg">
							Publications
						</Text>

						<Text fontWeight={600} fontSize="lg">
							Events
						</Text>
						<Text fontWeight={600} fontSize="lg">
							Media
						</Text>
					</Flex>
					<Button
						bg="brand.200"
						textTransform="uppercase"
						color="white"
						fontWeight="bold"
                        ml="auto"
                        my="auto"
					>
						COntact us
					</Button>
				</Box>
			</Box>
		</>
	);
};
export default Navbar;
