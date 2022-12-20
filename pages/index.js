import Head from 'next/head'
import styles from '../styles/Home.module.scss'
import Drawer from "../components/common/drawer/Drawer";
// import { useTranslation } from "next-i18next";
// import { serverSideTranslations } from "next-i18next/serverSideTranslations";
// import { useRouter } from "next/router";
import { Box, Container, Flex, Image, SimpleGrid } from "@chakra-ui/react";
// import HeroSection from "./landing/HeroSection";
import StatisticsSection from "./landing/StatisticsSection";
import { Footer } from '../components';
import PartnerCardWithAvatar from "../components/partners/PartnerCardWithAvatar";
import { useEffect, useState } from "react";
import MainLoader from "../components/common/loader/MainLoader";
import LandingPage from "./landing";

const drawerLinks = [
  {
    label: "Misiune și viziune",
    href: "/#mission-section",
  },
  {
    label: "Pe cine ajutăm",
    href: "/#future",
  },
  {
    label: "Cum poți ajuta și tu",
    href: "/#help",
  },
  {
    label: "Implică-te",
    href: "/join-us",
  },
  // {
  //   label: "Mediere",
  //   children: [
  //     {
  //       label: "Formular cerere loc de muncă",
  //       href: "/job-form",
  //     },
  //     {
  //       label: "Formular ofertă locuri disponibile",
  //       href: "/availability-form",
  //     },
  //   ]
  // }
];

export default function Index() {
  // const router = useRouter();
  // const { t } = useTranslation("home");
  //
  // const handleLocaleChange = (event) => {
  //   router.push(router.route, router.asPath, {
  //     locale: event.target.value,
  //   });
  // };

  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setTimeout(() => setLoading(true), 2500);
  }, []);

  return (
    <>
      <Head>
        <title>Implica-te - Fundatia E-Learning</title>
        <meta name="description" content="e-learning platform" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {
        !!loading ? (

          <Box id={'main-box'}>
            <Drawer links={drawerLinks} />
            <LandingPage />
            <Footer />
          </Box>

          // <Box h={'100%'} minH={'100vh'} id={'main-box'}>
          //   {/*<Select onChange={handleLocaleChange} value={router.locale}>*/}
          //   {/*  <option value='ro'>Romana</option>*/}
          //   {/*  <option value='en'>English</option>*/}
          //   {/*</Select>*/}
          //   <Drawer links={drawerLinks} />
          //   <Flex w="100%" flexDirection={"column"} minH={'100vh'} id={'content-box'}>
          //     {/*<HeroSection />*/}
          //     <Container maxW='8xl'>
          //       <StatisticsSection />
          //       <PartnerCardWithAvatar />
          //     </Container>
          //   </Flex>
          //
          //   <footer>
          //     <Footer />
          //   </footer>
          //
          // </Box>
        ) : (
          <MainLoader text={"Împreună facem lumea mai bună"} />
        )
      }

    </>


  )
}

// export async function getStaticProps({ locale }) {
//   console.log("locale", locale)
//   return {
//     props: {
//       ...(await serverSideTranslations(locale, ["common", "home"])),
//       // Will be passed to the page component as props
//     },
//   };
// }