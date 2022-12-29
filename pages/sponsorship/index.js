import Head from "next/head";
import MasterPage from "../../components/common/master";
import { getSponsorshipDrawerLinks } from "../../util/links";
import Sponsorship from "./Sponsorship";

export default function SponsorshipIndex() {
  return (
    <>
      <Head>
        <title>Implica-te - Fundatia E-Learning</title>
        <meta name="description" content="e-learning platform" />
        <link rel="icon" href="/logo_gold.svg" />
      </Head>
      <MasterPage drawerLinks={getSponsorshipDrawerLinks}>
        <Sponsorship />
      </MasterPage>
    </>
  )
}