import Fetch from 'isomorphic-unfetch';
import Layout from '../components/Layout';
import Prices from '../components/Prices';

const Index = (props) => (
    <Layout>
        <div className="container">
            <h1>Welcome to BIZBIZ</h1>
            <p>Current Bitcoin Rate :</p>
            <Prices bpi = {props.bpi} />
        </div>
    </Layout>
);

Index.getInitialProps = async function() {
    const res = await Fetch('https://api.coindesk.com/v1/bpi/currentprice.json');
    const data = await res.json();

    return {
        bpi: data
    };
};

export default Index;