import Head from 'next/head'
import { useEffect, useState } from "react";
import MainLoader from "../components/common/loader/MainLoader";
import MasterPage from "../components/common/master";
import LandingPage from "./landing";
import { drawerLinks } from "../util/links"

export default function Index() {
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setTimeout(() => setLoading(true), 2500);
  }, []);

  return (
    <>
      <Head>
        <title>Implica-te - Fundatia E-Learning</title>
        <meta name="description" content="e-learning platform" />
        <link rel="icon" href="/logo_gold.svg" />
      </Head>
      {
        !!loading ? (
          <MasterPage drawerLinks={drawerLinks}>
            <LandingPage />
          </MasterPage>
        ) : (
          <MainLoader text={"Împreună facem lumea mai bună"} />
        )
      }
    </>
  )
}