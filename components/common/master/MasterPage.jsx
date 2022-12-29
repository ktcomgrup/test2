import Drawer from "../drawer/Drawer";
import { Footer } from "../footer";

export default function MasterPage({ children, drawerLinks = [] }) {
  return (
    <>
      <Drawer links={drawerLinks} />
      {children}
      <Footer />
    </>
  )
}