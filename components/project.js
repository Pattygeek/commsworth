import { Box, Text, Button, Image, Grid } from "@chakra-ui/react";

const Project = () => {
	const projects = [
		{
			id: 1,
			image: "project-1",
			title: "Mask up Initiaitve by Nestle",
			body:
				"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pharetra pellentesque quam iaculis imperdiet. Mollis nisi ac ultrices amet urna interdum proin lobortis. Lobortis tristique faucibus tellus ac amet.",
		},
		{
			id: 2,
			image: "project-2",
			title: "Save the children initiative powered by Chevron",
			body:
				"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pharetra pellentesque quam iaculis imperdiet. Mollis nisi ac ultrices amet urna interdum proin lobortis. Lobortis tristique faucibus tellus ac amet.",
		},
		{
			id: 3,
			image: "project-3",
			title: "14th Edition of The SERAS CSR Awards.",
			body:
				"The SERAS is an acronym for Sustainability, Entrepreneurship and Responsibility Awards. The Story of The SERAS began in 2007 when the very first edition held at Lagos, Nigeria.",
		},
		{
			id: 4,
			image: "project-3",
			title: "Mask up Initiaitve by Nestle",
			body:
				"Lorem ipsum dolor sit amet, consectetur adipiscing elit. In eget integer ornare nulla aliquam commodo dolor nec. Egestas faucibus ut lorem lectus vel amet. Vulputate sit vitae sit quam mattis. ",
		},
	];
	return (
		<>
			<Box w="100%" my="14">
				<Text
					color="brand.100"
					fontWeight="bold"
					textAlign="center"
					letterSpacing="0.15em"
					fontSize="xl"
					textTransform="uppercase"
					position="relative"
					_before={{
						content: '""',
						position: "absolute",
						height: "4px",
						width: "39px",
						backgroundColor: "brand.100",
						left: "39%",
						top: "3",
						// bottom: "-3%",
					}}
				>
					Our projects
				</Text>
				<Grid
					my="8"
					gap={4}
					// gridTemplateRows="minmax(150px, 1fr)"
					gridTemplateColumns="repeat(4, 1fr)"
					// overflowX="scroll"
					className="logobar"
				>
					{projects.map((project) => (
						<Box
							pt="40"
							px="12"
							height="816px"
							width="527px"
							className="project"
							overflow="hidden"
							bgImage={`linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(/images/${project.image}.png)`}
						>
							<Text
								color="white"
								className="title"
								fontSize="5xl"
								fontWeight="bold"
							>
								{project.title}
							</Text>
							<Text color="white" className="title" fontSize="2xl">
								{project.body}
							</Text>
						</Box>
					))}
				</Grid>
				<Button
					bg="brand.200"
					textTransform="uppercase"
					color="white"
					display="flex"
					mx="auto"
					fontSize="xl"
					letterSpacing="0.15em"
					px="8"
					_hover={{
						bg: "brand.200",
						opacity: 0.9,
					}}
				>
					View all projects
					<Image
						src="/whiteArr.svg"
						ml={2}
						transition="all 0.4s cubic-bezier(0, 0.04, 0.04, 0.18);"
						_hover={{ transform: "translate(10px)" }}
					/>
				</Button>
			</Box>
		</>
	);
};
export default Project;
