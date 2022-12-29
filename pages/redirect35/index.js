import Head from "next/head";
import MasterPage from "../../components/common/master";
import { getInvolved35DrawerLinks } from "../../util/links";
import InvolvementPage35 from "./InvolvementPage35";

export default function InvolvementPage35Index() {
  return (
    <>
      <Head>
        <title>Implica-te - Fundatia E-Learning</title>
        <meta name="description" content="e-learning platform" />
        <link rel="icon" href="/logo_gold.svg" />
      </Head>
      <MasterPage drawerLinks={getInvolved35DrawerLinks}>
        <InvolvementPage35 />
      </MasterPage>
    </>
  )
}