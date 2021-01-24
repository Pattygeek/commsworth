import { Box, Text, Image, Button, Flex } from "@chakra-ui/react";
import React from "react";

const Navbar = () => {
	//scroll handler for sticky header
	const [scroll, setScroll] = React.useState(false);
	const handleScroll = (e) => {
		if (typeof window !== undefined) {
			const scrollPos = window.scrollY > 120;
			setScroll(scrollPos);
		} else {
			setScroll(false);
		}
	};

	React.useEffect(() => {
		document.addEventListener("scroll", handleScroll);
	}, []);
	return (
		<>
			<Box
				bg={scroll ? "#130D25" : "transparent"}
				py="6"
				zIndex={+5}
				w="100%"
				position="fixed"
				// style={{ backdropFilter: scroll ? "blur(5px)" : ""}}
			>
				<Box w="85%" mx="auto" display="flex">
					<Image src="/images/logo.png" />
					<Flex
						ml="auto"
						w="55%"
						my="auto"
						mr={12}
						justifyContent="space-between"
					>
						<Text
							fontWeight={600}
							fontSize="lg"
							color="white"
							_hover={{ color: "brand.200" }}
							cursor="pointer"
						>
							Services
						</Text>
						<Text
							fontWeight={600}
							fontSize="lg"
							color="white"
							_hover={{ color: "brand.200" }}
							cursor="pointer"
						>
							About Us
						</Text>
						<Text
							fontWeight={600}
							fontSize="lg"
							color="white"
							cursor="pointer"
							_hover={{ color: "brand.200" }}
						>
							CSR Academy
						</Text>
						<Text
							fontWeight={600}
							fontSize="lg"
							color="white"
							_hover={{ color: "brand.200" }}
							cursor="pointer"
						>
							Publications
						</Text>

						<Text
							fontWeight={600}
							fontSize="lg"
							color="white"
							_hover={{ color: "brand.200" }}
							cursor="pointer"
							cursor="pointer"
						>
							Events
						</Text>
						<Text
							fontWeight={600}
							fontSize="lg"
							color="white"
							_hover={{ color: "brand.200" }}
							cursor="pointer"
						>
							Media
						</Text>
					</Flex>
					<Box>
						<Button
							bg="brand.200"
							textTransform="uppercase"
							color="white"
							fontWeight="bold"
							ml="auto"
							my="auto"
							// alignSelf="center"
							letterSpacing="0.15em"
							px="4"
							_hover={{ bg: "brand.200", opacity: 0.9 }}
						>
							Contact us
							<Image
								src="/whiteArr.svg"
								ml={2}
								transition="all 0.4s cubic-bezier(0, 0.04, 0.04, 0.18);"
								_hover={{transform: "translate(10px)" }}
							/>
						</Button>
					</Box>
				</Box>
			</Box>
		</>
	);
};
export default Navbar;
