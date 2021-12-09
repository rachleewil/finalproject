import { stringify } from "querystring";
import { FormEvent, useEffect, useState } from "react";
import { login } from "../services/auth.service";
import { useNavigate } from "react-router-dom";
import { Formik } from "formik";

//Login Box
function LoginForm() {
  
  let navigate = useNavigate();
 
  // const [state, setState] = useState(({
  //   username: "",
  //   password: ""
  // }));
  // const [password, setPassword] = useState("");
  // const [login, setLogin] = useState("");

  
// const initialValues = {
//   username: "",
//   password: ""
// };

const initialValues: {
  username: string;
  password: string;
} = {
  username: "",
  password: "",
};

  //useEffect(() => setState(initialValues));

  // const handleLogin = (formValue: { username: string; password: string }) => {
  //   const { username, password } = formValue;
  //   login(username, password).then(
  //     () => {
  //       navigate("/home");
      

        const handleLogin = (formValue: { username: string; password: string }) => {
          const { username, password } = formValue;
    
          login(username, password).then(
            () => {
              navigate("/home");
              //window.location.reload();
            },
          );
        };

  // function handleSubmit(e: FormEvent) {
  //   e.preventDefault();
  //   login(username, password).then(
  //     () => {
  //       navigate("/home");
  //       //window.location.reload();
  //     }
  //   )}
    // setState({username: (document.getElementById("username") as HTMLInputElement).value, 
    //           password: (document.getElementById("password") as HTMLInputElement).value})
    

  return (
    <>
    <Formik
      initialValues={initialValues}
      onSubmit={handleLogin}
    ></Formik>
      <div className="inner-container">
        <div className="header">
          Login
        </div>
        <div className="box">

          <div className="input-group">
            <label htmlFor="username">Username </label>
            <input
              type="text"
              id="username"
              name="username"
              className="login-input"
              placeholder="Username"/>
          </div>

          <div className="input-group">
            <label htmlFor="password">Password </label>
            <input
              type="password"
              id="password"
              name="password"
              className="login-input"
              placeholder="Password"/>
          </div>
    
          <button
            type="submit"
            className="login-btn">Login</button>
        </div>
      </div>
    </>
  )
  }

  export default LoginForm;

// import React, { useState } from "react";
// import { Formik, Field, Form, ErrorMessage } from "formik";
// import * as Yup from "yup";

// import { login } from "../services/auth.service";
// import { useNavigate } from "react-router-dom"


// const LoginForm: React.FC = () => {
//   const [loading, setLoading] = useState<boolean>(false);
//   const [message, setMessage] = useState<string>("");

//   const initialValues: {
//     username: string;
//     password: string;
//   } = {
//     username: "",
//     password: "",
//   };

//   const validationSchema = Yup.object().shape({
//     username: Yup.string().required("This field is required!"),
//     password: Yup.string().required("This field is required!"),
//   });

//   const handleLogin = (formValue: { username: string; password: string }) => {
//     const { username, password } = formValue;

//     let navigate = useNavigate()

//     setMessage("");
//     setLoading(true);

//     login(username, password).then(
//       () => {
//         navigate("/home");
//         //window.location.reload();
//       },
//       (error) => {
//         const resMessage =
//           (error.response &&
//             error.response.data &&
//             error.response.data.message) ||
//           error.message ||
//           error.toString();

//         setLoading(false);
//         setMessage(resMessage);
//       }
//     );
//   };

//   return (
//     <div className="col-md-12">
//       <div className="card card-container">
//         <img
//           src="//ssl.gstatic.com/accounts/ui/avatar_2x.png"
//           alt="profile-img"
//           className="profile-img-card"
//         />
//         <Formik
//           initialValues={initialValues}
//           validationSchema={validationSchema}
//           onSubmit={handleLogin}
//         >
//           <Form>
//             <div className="form-group">
//               <label htmlFor="username">Username</label>
//               <Field name="username" type="text" className="form-control" />
//               <ErrorMessage
//                 name="username"
//                 component="div"
//                 className="alert alert-danger"
//               />
//             </div>

//             <div className="form-group">
//               <label htmlFor="password">Password</label>
//               <Field name="password" type="password" className="form-control" />
//               <ErrorMessage
//                 name="password"
//                 component="div"
//                 className="alert alert-danger"
//               />
//             </div>

//             <div className="form-group">
//               <button type="submit" className="btn btn-primary btn-block" disabled={loading}>
//                 {loading && (
//                   <span className="spinner-border spinner-border-sm"></span>
//                 )}
//                 <span>Login</span>
//               </button>
//             </div>

//             {message && (
//               <div className="form-group">
//                 <div className="alert alert-danger" role="alert">
//                   {message}
//                 </div>
//               </div>
//             )}
//           </Form>
//         </Formik>
//       </div>
//     </div>
//   );
// };

// export default LoginForm;