import { AiFillGithub } from "react-icons/ai";
import { SiNotion } from "react-icons/si";
import { AiOutlineLinkedin } from "react-icons/ai";
import { AiOutlineFacebook } from "react-icons/ai";
import { BsWhatsapp } from "react-icons/bs";
import { TbCopyright } from "react-icons/tb";
import { MdBusinessCenter } from "react-icons/md";
import { BiTestTube } from "react-icons/bi";
import { MdOutlineFavorite } from "react-icons/md";
import { BiMoviePlay } from "react-icons/bi";
import { AiFillHome } from "react-icons/ai";
import { Link } from "react-router-dom";

function Sider() {
  return (
    <div>
      <aside className="w-40  bg-accent min-h-screen">
        <ul className="w-40 space-y-4 mt-3 menu">
          <li>
            <Link to="/" className="btn btn-ghost w-full ">
              <AiFillHome />
              Home
            </Link>
          </li>
          <li>
            <Link to="/Movies" className="btn btn-ghost w-full ">
              <BiMoviePlay />
              Movies
            </Link>
          </li>
          <li>
            <Link to="/Favorites" className="btn btn-ghost w-full ">
              <MdOutlineFavorite />
              Favorites
            </Link>
          </li>
          <li>
            <Link to="/Projets" className="btn btn-ghost w-full ">
              <MdBusinessCenter />
              Projets
            </Link>
          </li>
          <li>
            <Link to="/Test" className="btn btn-ghost w-full ">
              <BiTestTube />
              Test
            </Link>
          </li>
        </ul>
        <ul className="fixed bottom-20 flex gap-1 justify-end ml-1">
          <li>
            <Link to="/SignUp" className="btn btn-warning  ">
              SignUp
            </Link>
          </li>
          <li>
            <Link to="/Login" className="btn btn-primary  ">
              Login
            </Link>
          </li>
        </ul>
        <p className="bottom-10 fixed flex ml-3 gap-1">
          <BsWhatsapp className="text-2xl link" />
          <AiOutlineFacebook className="text-2xl link" />
          <AiOutlineLinkedin className="text-2xl link" />
          <SiNotion className="text-2xl link" />
          <AiFillGithub className="text-2xl link" />
        </p>
        <p className="flex fixed bottom-2">
          <TbCopyright />
          Copyright by Fruvio
        </p>
      </aside>
    </div>
  );
}

export default Sider;
