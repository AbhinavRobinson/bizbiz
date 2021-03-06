import Head from 'next/head';
import Navbar from './Navbar';

const Layout = (props) => (
    <div>
        <Head>
            <title>BIZBIZ</title>
            <link rel="stylesheet" href="https://bootswatch.com/4/journal/bootstrap.min.css"></link>
        </Head>
        <Navbar />
        {props.children}
    </div>
);

export default Layout;