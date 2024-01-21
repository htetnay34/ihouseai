import ForgotPassword from "@/components/auth/ForgotPassword";
import Navbar from "@/components/navbar/Navbar";
import Head from "next/head";




export default function ReinitialiserMotsdePasse() {
  return (
    <>
          <Head>
        <title>iHouse AI - Interior</title>
        <link rel="canonical" href="https://ihouseai.vercel.app/auth/resetmotdepasse" />

      </Head>
        <Navbar/>
          <ForgotPassword />
    
    </>
  );
}
