import { FaGoogle, FaGithub, FaFacebook } from "react-icons/fa";
import { FaInstagram, FaTwitter } from "react-icons/fa6";
import qZone1 from '../../assets/qZone1.png';
import qZone2 from '../../assets/qZone2.png';
import qZone3 from '../../assets/qZone3.png';

const RightSideNav = () => {
  return (
    <div>
      <div className="p-4 mb-6">
        <h2 className="text-xl font-semibold text-[#403F3F] mb-3">
          Login With
        </h2>
        <button className="btn btn-block btn-outline mb-2">
          <FaGoogle />
          Button
        </button>
        <button className="btn btn-block btn-outline">
          <FaGithub />
          Login With Github
        </button>
      </div>
      {/* Find us on */}
      <div className="p-4">
        <h2 className="text-xl font-semibold text-[#403F3F] mb-3">
          Find Us On
        </h2>
        <a
          className="flex items-center gap-2 p-3 border rounded-t-lg text-base"
          href=""
        >
          <FaFacebook />
          Facebook
        </a>
        <a className="flex items-center gap-2 p-3 border-x text-base" href="">
          <FaTwitter />
          Twitter
        </a>
        <a
          className="flex items-center gap-2 p-3 border text-base rounded-b-lg"
          href=""
        >
          <FaInstagram />
          Instagram
        </a>
      </div>

      {/* Q-Zone */}
      <div className="p-4 mb-6">
        <h2 className="text-xl font-semibold text-[#403F3F] mb-3">
          Q Zone
        </h2>
        <img src={qZone1} alt="" />
        <img src={qZone2} alt="" />
        <img src={qZone3} alt="" />
      </div>
    </div>
  );
};

export default RightSideNav;
