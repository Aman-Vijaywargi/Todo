import React,{useState} from 'react';
import Header from './Header';
import Sidebar from './Sidebar';
import Tasks from './Tasks';
import './scss/App.scss'

const App = () => {
    const [selectedTab, setSelectedTab] = useState("INBOX");
    return (
        <>
            <Header />
            <section className="content">
                <Sidebar selectedTab={selectedTab} setSelectedTab={setSelectedTab} />
                <Tasks />
            </section>
        </>
    )
};

export default App;