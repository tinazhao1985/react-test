import logo from './logo.svg'

function Home({ subject}) {
    return (
        <>
            <h2 className="text-primary">
                Hello, {subject}
            </h2>
            <img src={logo} className="img-thumbnail" alt="logo" />
        </>
    );
}

export default Home;