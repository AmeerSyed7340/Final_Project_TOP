import { useEffect } from "react";

function HomePage({user}) {
    useEffect(() => {
        
    }, []);


    return (<>
        <div className="full_content h-[100vh] w-[100vw] bg-stone-200 flex items-center">
            <div className="sidebar h-[97%] min-w-[400px] bg-red-200 rounded-lg shadow-md ml-[10px]">
                <div className="profile_pic_div"></div>
                <div className="user_info">
                    {user.username}
                </div>
            </div>
            <div className="h-[97%] w-[72%] flex flex-col ml-[10px] mr-[10px]">
                <nav className='navbar h-[100px]  bg-yellow-200 rounded-lg'>

                </nav>
                <div className="main_content h-[88.5%]  bg-green-100 rounded-lg mt-[10px]"></div>
            </div>
        </div>
    </>);
}

export default HomePage;