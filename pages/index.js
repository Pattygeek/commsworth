import Head from "next/head";
import styles from "../styles/Home.module.css";
import { Box, Flex, Text, Image } from "@chakra-ui/react";
import Blog from "../components/blog";
import Partners from "../components/partners";
import Project from "../components/project";
import Services from '../components/services';
import About from '../components/about';
import Header from '../components/header';
import HeaderTwo from '../components/header-2';
import Footer from '../components/footer';

function Home() {
	return (
		<div className={styles.container}>
			<Head>
				<title>TruContact</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<Header />
			{/* <HeaderTwo /> */}
			<About />
			<Services />
			<Project />
			<Partners />
			<Blog />
			<Footer />
		</div>
	);
}
export default Home;
