import HeaderBox from '@/components/HeaderBot'
import RightSideBar from '@/components/RightSideBar';
import TotalBalanceBox from '@/components/TotalBalanceBox';

const Home = () => {
    const loggedIn = { firstName: 'Ratan', lastName: "Prajapati", email: "ratanprajapati1242@gmail.com" };
    return (
        <div className='home'>
            <div className='home-content'>
                <header className='home-header'>
                    <HeaderBox
                        type="greeting"
                        title="welcome"
                        user={loggedIn?.firstName || "Guest"}
                        subtext="Access and manage your account and transactions efficiently."
                    />
                    <TotalBalanceBox
                        accounts={[]}
                        totalBanks={1}
                        totalCurrentBalance={1250.35}
                    />
                </header>
                RECENT TRANSACTIONS
            </div>
            <RightSideBar
                user={loggedIn}
                transactions={[]}
                banks={[{ currentBalance: 123.50 }, { currentBalance: 21.4 }]}
            />
        </div>
    )
}
export default Home