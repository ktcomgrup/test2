import Head from 'next/head'
import styles from '../styles/Home.module.scss'
import Drawer from "../components/common/drawer/Drawer";
// import { useTranslation } from "next-i18next";
// import { serverSideTranslations } from "next-i18next/serverSideTranslations";
// import { useRouter } from "next/router";
import { Box, Container, Flex } from "@chakra-ui/react";
import HeroSection from "./landing/HeroSection";
import StatisticsSection from "./landing/StatisticsSection";
import { Footer } from '../components/common';

const drawerLinks = [
  // {
  //   label: "Acasa",
  //   href: "/",
  // },
  {
    label: "Despre noi",
    href: "/about-us",
  },
  {
    label: "Proiecte",
    href: "/projects",
  },
  {
    label: "Parteneri",
    href: "/partnerships",
  },
  {
    label: "Media",
    href: "/media",
  },
  {
    label: "Implică-te",
    href: "/join-us",
  },
  {
    label: "Mediere",
    children: [
      {
        label: "Formular cerere loc de muncă",
        href: "/job-form",
      },
      {
        label: "Formular ofertă locuri disponibile",
        href: "/availability-form",
      },
    ]
  }
];

export default function Home() {
  // const router = useRouter();
  // const { t } = useTranslation("home");
  //
  // const handleLocaleChange = (event) => {
  //   router.push(router.route, router.asPath, {
  //     locale: event.target.value,
  //   });
  // };

  return (
    <Box h={'100%'} minH={'100vh'} id={'main-box'}>
      {/*<Select onChange={handleLocaleChange} value={router.locale}>*/}
      {/*  <option value='ro'>Romana</option>*/}
      {/*  <option value='en'>English</option>*/}
      {/*</Select>*/}
      <Drawer links={drawerLinks} />
      <Flex w="100%" flexDirection={"column"} minH={'100vh'} id={'content-box'}>
        <HeroSection />
        <Container maxW='8xl'>
          <StatisticsSection />
        </Container>
      </Flex>

      <footer>
        <Footer />
      </footer>
    </Box>
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