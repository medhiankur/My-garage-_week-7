import { typographyClasses } from '@mui/material';
import Head from 'next/head';
const about = () => {
    return (
      <>
          <Head>
          <title>My Garage| Workshop Management System</title>
          </Head>
        <div className="pad">
          <typography>The Simplest & Smartest Garage Management System</typography> 
          <h2>We believe in simple and efficient ways to grow a business</h2>
          <h2>by being smart, relevant and most importantly straightforward.</h2> 
          <h1>About Company</h1>
          <h3>Our team of experts tirelessly work to create</h3>,
          <h3> products and features that will help you make a better</h3>
          <h3> experience – one that’s best suited for your workshop needs,</h3>
          <h3> convenient and ease their work.</h3>
        </div>
      </>
    )
}

export default about
