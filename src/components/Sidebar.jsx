import React from 'react'
import { GrHomeRounded } from "react-icons/gr";
import { SiYoutubeshorts } from "react-icons/si";
import { MdOutlineSubscriptions } from "react-icons/md";
import { CgProfile } from "react-icons/cg";
import { FaHistory } from "react-icons/fa";
import { MdOutlineLocalMovies } from "react-icons/md";
import { MdOndemandVideo } from "react-icons/md";
import { GiLoveSong } from "react-icons/gi";
import { MdOutlineWatchLater } from "react-icons/md";
import { RiMiniProgramLine } from "react-icons/ri";
import { useSelector } from 'react-redux';

const sidebarItem = [
    {
        icons: <GrHomeRounded size={'24px'} />,
        title: "Home",
    },
    {
        icons: <SiYoutubeshorts size={'24px'} />,
        title: "Shorts",
    },
    {
        icons: <MdOutlineSubscriptions size={'24px'} />,
        title: "Subscription",
    },
    {
        icons: <CgProfile size={'24px'} />,
        title: "Your channel",
    },
    {
        icons: <FaHistory size={'24px'} />,
        title: "History",
    },
    {
        icons: <MdOndemandVideo size={'24px'} />,
        title: "Your Videos",
    },
    {
        icons: <MdOutlineLocalMovies size={'24px'} />,
        title: "Your movies",
    },
    {
        icons: <GiLoveSong size={'24px'} />,
        title: "Your songs",
    },
    {
        icons: <MdOutlineWatchLater size={'24px'} />,
        title: "Watch later",
    },
    
    {
        icons: <RiMiniProgramLine size={'24px'} />,
        title: "Programmer",
    },
    {
        icons: <SiYoutubeshorts size={'24px'} />,
        title: "Shorts",
    },
    {
        icons: <MdOutlineSubscriptions size={'24px'} />,
        title: "Subscription",
    },
    {
        icons: <CgProfile size={'24px'} />,
        title: "Your channel",
    },
    {
        icons: <MdOndemandVideo size={'24px'} />,
        title: "Your Videos",
    },
    {
        icons: <MdOutlineLocalMovies size={'24px'} />,
        title: "Your movies",
    },
    {
        icons: <GiLoveSong size={'24px'} />,
        title: "Your songs",
    },
]

const Sidebar = () => {

    const toggle=useSelector((state)=>state.app.toggle);

    return (
        <div className={`relative  ${toggle ? "w-[15%]":"w-[6%]"}  py-0 px-5 h-[100vh] ml-3  overflow-y-scroll mt-14`}>
            {
                sidebarItem.map((item, index) => {
                    return (
                        <div className='flex  my-4 ' key={index}>
                            {item.icons}
                            <h2 className={`ml-5 ${toggle?"":'hidden'} `}>{item.title}</h2>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default Sidebar