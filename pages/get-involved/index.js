import Head from "next/head";
import MasterPage from "../../components/common/master";
import { getInvolvedDrawerLinks } from "../../util/links";
import GetInvolvedPageContent from "./GetInvolvedPageContent";

export default function InvolvementPageIndex() {
  return (
    <>
      <Head>
        <title>Implica-te - Fundatia E-Learning</title>
        <meta name="description" content="e-learning platform" />
        <link rel="icon" href="/logo_gold.svg" />
      </Head>
      <MasterPage drawerLinks={getInvolvedDrawerLinks}>
        <GetInvolvedPageContent />
      </MasterPage>
    </>
  )
}