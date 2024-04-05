import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";

const BreakingNews = () => {
  return (
    <div className="flex bg-[#F3F3F3] p-2 rounded-lg">
      <button className="btn bg-[#D72050] text-white px-3 py-0">Breaking news</button>
      <Marquee pauseOnHover speed={100}>
        <Link className="mr-12" to="/">
          I can be a React component, multiple React components, or just some
          text......
        </Link>
        <Link className="mr-12" to="/">
          I can be a React component, multiple React components, or just some
          text......
        </Link>
        <Link className="mr-12" to="/">
          I can be a React component, multiple React components, or just some
          text......
        </Link>
        <Link className="mr-12" to="/">
          I can be a React component, multiple React components, or just some
          text......
        </Link>
        <Link className="mr-12" to="/">
          I can be a React component, multiple React components, or just some
          text......
        </Link>
      </Marquee>
    </div>
  );
};

export default BreakingNews;
