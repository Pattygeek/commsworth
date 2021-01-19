import Head from "next/head";
import styles from "../styles/Home.module.css";
import { Box, Flex, Text, Image } from "@chakra-ui/react";
import Blog from "../components/blog";
import Partners from "../components/partners";
import Project from '../components/project'

function Home() {
	return (
		<div className={styles.container}>
			<Head>
				<title>Commsworth</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>
      <Project />
			<Partners />
			<Blog />
			<Box bg="brand.100" width="100%">
				<Box width="80%" mx="auto" color="white" mt="12" mb="20">
					<Flex justifyContent="space-between">
						<Box>
							<Text textTransform="uppercase">Customer Service</Text>
							<Text>FAQs</Text>
							<Text>Customer Service</Text>
						</Box>
						<Box>
							<Text textTransform="uppercase">Business</Text>
							<Text>Careers</Text>
							<Text>Partner with us</Text>
							<Text>Investor Relations</Text>
						</Box>
						<Box>
							<Text textTransform="uppercase">Company</Text>
							<Text>About us</Text>
							<Text>Services</Text>
							<Text>Partners</Text>
							<Text>Customers stories</Text>
							<Text>Contact us</Text>
						</Box>
						<Box textAlign="right">
							<Text textTransform="uppercase">Lagos Nigeria</Text>
							<Text>30, Shakiru Anjorin Street, Road 39, Off</Text>
							<Text>Admiralty Way,Lekki Phase 1, Lekki, Lagos,</Text>
							<Text>Phone: +234 123 4456</Text>
						</Box>
					</Flex>
				</Box>
			</Box>
		</div>
	);
}
export default Home;
