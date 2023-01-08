import Head from "next/head";
import MasterPage from "../../components/common/master";
import JoinUs from "./JoinUs";
import { getJoinDrawerLinks } from "../../util/links";

export default function JoinIndex() {
  return (
    <>
      <Head>
        <title>Implica-te - Fundatia E-Learning</title>
        <meta name="description" content="e-learning platform" />
        <link rel="icon" href="/logo_gold.svg" />
      </Head>
      <MasterPage drawerLinks={getJoinDrawerLinks}>
        <JoinUs />
      </MasterPage>
    </>
  )
}