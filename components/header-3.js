import { Box, Text, Flex, Image } from "@chakra-ui/react";

const HeaderThree = () => {
	return (
		<>
			<Box w="55%" my="auto" h="100%">
				<Text
					color="white"
					fontSize="64px"
					my="8"
					lineHeight="72px"
					fontWeight={600}
				>
					We are in the business of{" "}
					<span style={{ fontStyle: "italic" }}>sustainability</span>
				</Text>
				<Text
					color="white"
					mt="4"
					fontWeight={600}
					fontSize="xl"
					lineHeight="36px"
				>
					<span style={{ fontWeight: "bold" }}></span>TCSRN founded in 2006, is
					a consulting company that helps organisations to contribute to their
					societal goals of a philanthropic, activist, or charitable nature by
					engaging in or supporting volunteering or ethically-oriented
					practices.
				</Text>
				<Flex mt="8">
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
							width: "130px",
							backgroundColor: "#4CB952",
							left: 0,
							bottom: "-3%",
						}}
					>
						Explore Site
					</Text>
					<Image
						src="/Arrow.svg"
						ml="2"
						mt="2"
						transition="all 0.4s cubic-bezier(0, 0.04, 0.04, 0.18);"
						transform="rotate(90deg)"
					/>
				</Flex>
			</Box>
		</>
	);
};
export default HeaderThree;
