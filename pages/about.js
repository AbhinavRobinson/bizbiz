import Link from 'next/link';

const About = () => (
    <div>
        <ul>
            <li><Link href="/"><a>Home</a></Link></li>
            <li><Link href="/about"><a>About</a></Link></li>
        </ul>
        <h1>About BIZBIZ</h1>
        <p>Application to view Bitcoin Prices.</p>
    </div>
);

export default About;