import { IoHome } from "react-icons/io5";
import { FaVideo } from "react-icons/fa";
import { FaMusic } from "react-icons/fa";
import { BiSolidMoviePlay } from "react-icons/bi";
import { FaBookOpen } from "react-icons/fa6";
import { IoIosBrush } from "react-icons/io";
import { FaYoutube } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaGoogle } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";

export const headerMenus = [
    {
        title:"홈",
        icon: <IoHome />,
        src: "/"
    },
    {
        title:"추천 영상",
        icon: <FaVideo />,
        src: "/today"
    },
    {
        title:"추천음악",
        icon: <FaMusic />,
        src: "/music"
    },
    {
        title:"추천 영화",
        icon: <BiSolidMoviePlay />,
        src: "/movie"        
    },
    {
        title:"추천 도서",
        icon: <FaBookOpen />,
        src: "/book"        
    },
    {
        title:"추천 애니",
        icon: <IoIosBrush />,
        src: "/anime"        
    },
    {
        title:"유튜브 사이트",
        icon: <FaYoutube />,
        src: "/youtube"        
    }
];

export const searchKeyword = [
    {
        title:"MyYoutube",
        src:"/search/youtube"
    },
    {
        title:"HTML",
        src:"/search/html"
    },
    {
        title:"CSS",
        src:"/search/css"
    },
    {
        title:"JavaScript",
        src:"/search/javascript"
    },
    {
        title:"React",
        src:"/search/react.js"
    },
    {
        title:"JAVA",
        src:"/search/java"
    },
    {
        title:"ORACLE",
        src:"/search/oracle"
    },
    {
        title:"SPRING",
        src:"/search/spring"
    }
];

export const snsLink = [
    {
        icon: <FaGithub />,
        src: "https://github.com"
    },
    {
        icon: <FaYoutube />,
        src: "https://youtube.com"
    },
    {
        icon: <FaGoogle />,
        src: "https://google.com"
    },
    {
        icon: <FaInstagramSquare />,
        src: "https://instagram.com"
    }
];