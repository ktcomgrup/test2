import Head from "next/head";
import MasterPage from "../../components/common/master";
import Donate from "./Donate";
import { getDonateDrawerLinks } from "../../util/links";

export default function DonateIndex() {
  return (
    <>
      <Head>
        <title>Implica-te - Fundatia E-Learning</title>
        <meta name="description" content="e-learning platform" />
        <link rel="icon" href="/logo_gold.svg" />
      </Head>
      <MasterPage drawerLinks={getDonateDrawerLinks}>
        <Donate />
      </MasterPage>
    </>
  )
}