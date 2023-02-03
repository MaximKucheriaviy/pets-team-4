import { lazy } from "react";
import { SharedLayout } from "./SharedLayout/SharedLayot";
import { Route, Routes } from "react-router-dom";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";
import PublicRoute from "./components/PublickRoute/PublickRoute";
import { Suspense } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { SelectIsLoadingUserStatus } from "./redux/auth/autSelectors";
import { current } from "./redux/auth/auth-operation";
import { selectToken} from './redux/auth/autSelectors';

const Home = lazy(() => import("./pages/HomePage/HomePage"));
const News = lazy(() => import("./pages/NewsPage/NewsPage"));
const OurFriends = lazy(() => import("./pages/OurFriendsPage/OurFriendsPage"));
const FindPet = lazy(() => import("./pages/FindPetPage/FindPetPage"));

const Login = lazy(() => import("./pages/LoginPage/LoginPage"));
const Register = lazy(() => import("./pages/RegisterPage/RegisterPage"));
const User = lazy(() => import("./pages/UserPage/UserPage"));

const NotFoundPage = lazy(() => import("./pages/NotFoundPages/NotFoundPages"));

function App() {
  
  const dispatch = useDispatch();
  const token = useSelector(selectToken);
  const isLoadingUser = useSelector(
    SelectIsLoadingUserStatus
  );
 


  useEffect(() => {
  	if (token) {
			dispatch(current());
		}

  }, [dispatch, token]);

 
  return (
    <>
      {isLoadingUser ? (
        <p>....Loading</p>
      ) : (
        <Suspense>
          <Routes>
            <Route path="/" element={<SharedLayout />}>
              <Route path="/" element={<Home />} />
              <Route path="/news" element={<News />} />
              <Route path="/notices/sell" element={<FindPet />} />
              <Route path="/notices/lost-found" element={<FindPet />} />
              <Route path="/notices/for-free" element={<FindPet />} />
              <Route path="/notices/favorite" element={<FindPet />} />
              <Route path="/notices/own" element={<FindPet />} />

              <Route path="/friends" element={<OurFriends />} />
              <Route element={<PublicRoute />}>
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
              </Route>
              <Route element={<PrivateRoute />}>
                <Route path="/user" element={<User />} />
              </Route>

              <Route path="*" element={<NotFoundPage />} />
            </Route>
          </Routes>
        </Suspense>
      )}
    </>
  );
}

export default App;
