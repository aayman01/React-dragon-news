import logo from '../../assets/logo.png';
import moment from "moment";

const Header = () => {
    return (
      <div className='text-center mt-7'>
        <img className='mx-auto mb-5' src={logo} alt="" />
        <p className='mb-3'>Journalism Without Fear or Favour</p>
        <p className="text-xl mb-6">
          {moment().format("dddd, MMMM D, YYYY")}
        </p>
      </div>
    );
};

export default Header;