import { useAuth } from '../../Context/useAuth';
import logo from './logo.png'
import { Link } from 'react-router-dom';

type Props = {}

const Narbar = (props: Props) => {
  const {isLoggedIn, user, logout} = useAuth();
    return (
        <nav className="relative container mx-auto p-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-20">
                <Link to="/">
              <img src={logo} alt="" />
              </Link>
              <div className="hidden font-bold lg:flex">
                <Link to="/search" className="text-black hover:text-darkBlue">
                  Search
                </Link>
              </div>
            </div>
            {isLoggedIn() ?(
                          <div className="hidden lg:flex items-center space-x-6 text-back">
                          <div className="hidden font-bold lg:flex">
                              <a className="text-black hover:text-darkBlue">
                                Welcome, {user?.userName}
                              </a>
                            </div>
                             <a
                              onClick={logout}
                              className="px-8 py-3 font-bold rounded text-white bg-lightGreen hover:opacity-70"
                            >
                              Logout
                            </a>
                          </div>
            ): (
              <div className="hidden lg:flex items-center space-x-6 text-back">
              <div className="hidden font-bold lg:flex">
                  <Link to="/login" className="text-black hover:text-darkBlue">
                    Login
                  </Link>
                </div>
                 <Link
                  to="register"
                  className="px-8 py-3 font-bold rounded text-white bg-lightGreen hover:opacity-70"
                >
                  Signup
                </Link>
              </div>
            )}
          </div>
        </nav>
      );
}

export default Narbar