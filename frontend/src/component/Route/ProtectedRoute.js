// import React, { Fragment } from "react";
// import { useSelector } from "react-redux";
// import { Route } from "react-router-dom";
// import { useNavigate } from "react-router-dom";

// const ProtectedRoute = ({ isAdmin, element: Component, ...rest }) => {
//   const { loading, isAuthenticated, user } = useSelector((state) => state.user);
//   const navigate=useNavigate();

//   return (
//     <Fragment>
//       {loading === false && (
//         <Route
//           {...rest}
//           render={(props) => {
//             if (isAuthenticated === false) {
//             //   return <Redirect to="/login" />;
//             return navigate("/login")
//             }

//             if (isAdmin === true && user.role !== "admin") {
//             //   return <Redirect to="/login" />;
//             return navigate("/login")
//             }

//             return <Component {...props} />;
//           }}
//         />
//       )}
//     </Fragment>
//   );
// };

// export default ProtectedRoute;

import React, { Fragment } from "react";
import { useSelector } from "react-redux";
import { Redirect, Route } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const ProtectedRoute = ({ isAdmin, component: Component, ...rest }) => {
  const { loading, isAuthenticated, user } = useSelector((state) => state.user);

  const navigate=useNavigate();
  return (
    <Fragment>
      {loading === false && (
        <Route
          {...rest}
          render={(props) => {
            if (isAuthenticated === false) {
              // return <Redirect to="/login" />;
              return navigate("/login");
            }

            if (isAdmin === true && user.role !== "admin") {
              // return <Redirect to="/login" />;
              return navigate("/login");
            }

            return <Component {...props} />;
          }}
        />
      )}
    </Fragment>
  );
};

export default ProtectedRoute;