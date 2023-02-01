import { lazy } from "react";
import { SharedLayout } from "./SharedLayout/SharedLayot";
import { Route, Routes } from "react-router-dom";

import { Suspense } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { SelectIsLoadingUserStatus } from "./redux/auth/autSelectors";
import { current } from "./redux/auth/auth-operation";

const Home = lazy(() =>
  import("./pages/HomePage/HomePage")
);
const News = lazy(() =>
  import("./pages/NewsPage/NewsPage")
);
const OurFriends = lazy(() =>
  import("./pages/OurFriendsPage/OurFriendsPage")
);
const FindPet = lazy(() =>
  import("./pages/FindPetPage/FindPetPage")
);

const Login = lazy(() =>
  import("./pages/LoginPage/LoginPage")
);
const Register = lazy(() =>
  import("./pages/RegisterPage/RegisterPage")
);
const User = lazy(() =>
  import("./pages/UserPage/UserPage")
);

const NotFoundPage = lazy(() =>
  import("./pages/NotFoundPages/NotFoundPages")
);

function App() {
  const dispatch = useDispatch();
  const isLoadingUser = useSelector(
    SelectIsLoadingUserStatus
  );

  useEffect(() => {
    dispatch(current());
  }, [dispatch]);

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
              <Route
                path="/notices/sell"
                element={<FindPet />}
              />
              <Route
                path="/notices/lost-found"
                element={<FindPet />}
              />
              <Route
                path="/notices/for-free"
                element={<FindPet />}
              />
              <Route
                path="/notices/favorite"
                element={<FindPet />}
              />
              <Route
                path="/notices/own"
                element={<FindPet />}
              />

              <Route
                path="/friends"
                element={<OurFriends />}
              />

              <Route path="/login" element={<Login />} />
              <Route
                path="/register"
                element={<Register />}
              />

              <Route path="/user" element={<User />} />

              <Route path="*" element={<NotFoundPage />} />
            </Route>
          </Routes>
        </Suspense>
      )}
    </>
  );
}

export default App;
