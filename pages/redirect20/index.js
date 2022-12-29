import Head from "next/head";
import MasterPage from "../../components/common/master";
import { getInvolved20DrawerLinks } from "../../util/links";
import InvolvementPage20 from "./InvolvementPage20";

export default function InvolvementPage20Index() {
  return (
    <>
      <Head>
        <title>Implica-te - Fundatia E-Learning</title>
        <meta name="description" content="e-learning platform" />
        <link rel="icon" href="/logo_gold.svg" />
      </Head>
      <MasterPage drawerLinks={getInvolved20DrawerLinks}>
        <InvolvementPage20 />
      </MasterPage>
    </>
  )
}