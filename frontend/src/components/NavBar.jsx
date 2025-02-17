// import { useAuthStore } from "../store/useAuthStore"
import { LogOut, MessageCircle, Settings, User, UserRoundSearch } from "lucide-react";
import { Link } from "react-router-dom";
import { useAuthstore } from "../store/useAuthstore";
const Navbar = () => {
  const { authUser, logout } = useAuthstore();


  return (
    <header className=" border-b border-base-300 fixed w-full tpo-0 z-40 backdrop-blur-lg bg-base-100/80">
      <div className="container mx-auto px-4 h-12 ">
        <div className="flex items-center justify-between h-full">
          <div className="flex items-center gap-8">
            <Link to="/" className=" flex items-center gap-2.5 hover:opacity-80 transition-all" >
              <div className="size-7 rounded-lg bg-primary/10 flex items-center justify-center">
                <MessageCircle className="w-5 h-5 text-primary" />
              </div>
              <h1 className="text-lg font-bold">Sr-Jr</h1>
            </Link>
          </div>

          <div className="flex items-center gap-2">
            <Link
              to={"/settings"}
              className="btn btn-sm transition-colors"
            >
              <Settings className="size-5" />
              <span className="hidden"></span>
            </Link>

            {
              authUser &&
              (
                <>
                  <Link
                    to={"/profile"}
                    className={`btn btn-sm gap-2 transition-colors`}
                  >
                    <User className="size-5" />
                    <span className="hidden "></span>
                  </Link>
                  <Link
                    to="/teammate"
                    className="btn btn-sm gap-2 transition-colors"
                  >
                    <UserRoundSearch className="size-5" />
                  </Link>

                  <button className="btn btn-sm gap-2 transition-all" onClick={logout} >
                    <LogOut className="size-5" />
                    <span className="hidden "></span>
                  </button>
                </>
              )

            }

          </div>
        </div>
      </div>
    </header>
  )
}

export default Navbar