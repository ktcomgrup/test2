// import { Select } from "@chakra-ui/react";
// import { serverSideTranslations } from "next-i18next/serverSideTranslations";
// import { useTranslation } from "next-i18next";
//
// export default function LanguageSelect() {
//   const { t } = useTranslation("home");
//
//   return (
//     <Select placeholder={'error-without-status'}>
//       <option value='ro'>Romana</option>
//       <option value='en'>English</option>
//     </Select>
//   );
// }
//
// export async function getStaticProps({ locale }) {
//   return {
//     props: {
//       ...(await serverSideTranslations(locale, ["home"])),
//     },
//   };
// }