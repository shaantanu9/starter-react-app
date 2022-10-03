// import { Route, Routes, Switch, Navigate } from "react-router-dom";
// import { useState, useEffect, useRef } from "react";
// import { useSelector, useDispatch } from "react-redux";
// import { getAdmin, getUser } from "../redux/actions/authActions";
// import {
//   getAdminSelector,
//   getUserSelector,
// } from "../redux/selectors/authSelector";
// import {
//   getAdmin as getAdminFromLocalStorage,
//   getUser as getUserFromLocalStorage,
// } from "../utils/localStorage";

// import Login from "../pages/LoginUser";
// import UserDashboard from "../pages/UserDashboard";
// import Admin from "../pages/Admin";
// import GetSpecificUserDetail from "../pages/GetSpecificUserDetail";

// const RoutesLink = () => {
//   const dispatch = useDispatch();
//   const admin = useSelector(getAdminSelector);
//   const user = useSelector(getUserSelector);
//   const [isUserLoggedIn, setIsUserLoggedIn] = useState(false);
//   const [isAdminLoggedIn, setIsAdminLoggedIn] = useState(false);
//   const [isUserLoading, setIsUserLoading] = useState(true);
//   const [isAdminLoading, setIsAdminLoading] = useState(true);
//   const [isUserError, setIsUserError] = useState(false);
//   const [isAdminError, setIsAdminError] = useState(false);

//   const isMounted = useRef(true);

//   useEffect(() => {
//     const user = getUserFromLocalStorage();
//     const admin = getAdminFromLocalStorage();
//     if (user) {
//       dispatch(getUser(user));
//     }
//     if (admin) {
//       dispatch(getAdmin(admin));
//     }
//     setIsUserLoading(false);
//     setIsAdminLoading(false);
//     return () => {
//       isMounted.current = false;
//     };
//   }, []);

//   useEffect(() => {
//     if (isMounted.current) {
//       if (user) {
//         setIsUserLoggedIn(true);
//       } else {
//         setIsUserLoggedIn(false);
//       }
//       if (admin) {
//         setIsAdminLoggedIn(true);
//       } else {
//         setIsAdminLoggedIn(false);
//       }
//     }
//   }, [user, admin]);

//   return (
//     <Routes>
//       <Route path="/" element={<PrivateRoutes></PrivateRoutes>}></Route>
//       <Route path="/login" element={<></>}></Route>
//       <Route path="*" element={<Navigate to="/"></Navigate>}></Route>
//     </Routes>
//   );
// };

// const PrivateRoutes = () => {
//   const { user, admin } = useSelector((state) => state.auth);
//   return (
//     <Switch>
//       <Route path="/" element={<UserDashboard></UserDashboard>}></Route>
//       <Route path="/admin" element={<Admin></Admin>}></Route>
//       <Route
//         path="/user/:id"
//         element={<GetSpecificUserDetail></GetSpecificUserDetail>}
//       ></Route>
//       <Route path="*" element={<Navigate to="/"></Navigate>}></Route>
//     </Switch>
//   );
// };

// export default RoutesLink;
