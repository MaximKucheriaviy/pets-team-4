import { Formik, Field, Form } from "formik";

function validateEmail(value) {
  let error;
  if (!value) {
    error = "Required";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)) {
    error = "Invalid email address";
  }
  return error;
}

function validatePassword(value) {
  let error;
  if (value === "admin") {
    error = "Very nice try!";
  }
  return error;
}

// export const SignInfo1 = (
//   { handleSubmit, email, password, handleChange, confirmPassword },
//   setPage
// ) => {
//   return (
//     <div>
//       {({ errors, touched, isValidating }) => (
//         <Form>
//           <Field name="email" validate={validateEmail} />
//           {errors.email && touched.email && <div>{errors.email}</div>}

//           <Field name="username" validate={validateUsername} />
//           {errors.username && touched.username && <div>{errors.username}</div>}

//           <button
//             onClick={() => {
//               setPage((currPage) => currPage + 1);
//             }}
//           >
//             next
//           </button>
//         </Form>
//       )}
//     </div>
//   );
// };

export const SignInfo = ({
  email,
  password,
  handleChange,
  handleFirstStep,
  confirmPassword,
  setPage,
}) => (
  <div>
    <Formik
      initialValues={{
        email,
        password,
      }}
      onSubmit={(values) => {
        // same shape as initial values
        handleFirstStep(values);
        setPage((currPage) => currPage + 1);
      }}
    >
      {({ errors, touched, isValidating }) => (
        <Form>
          <Field name="email" validate={validateEmail} />
          {errors.email && touched.email && <div>{errors.email}</div>}

          <Field name="password" validate={validatePassword} />
          {errors.password && touched.password && <div>{errors.password}</div>}

          <button
            type="submit"
            // onClick={() => {
            //   setPage((currPage) => currPage + 1);
            // }}
          >
            next
          </button>
        </Form>
      )}
    </Formik>
  </div>
);

//       <><label>
//     Email
//     <input
//         type="email"
//         name="email"
//         value={email}
//         onChange={handleChange}
//         placeholder="Enter user email" />
// </label><label>
//         Password
//         <input
//             type="password"
//             name="password"
//             value={password}
//             onChange={handleChange}
//             placeholder="Enter user password" />
//     </label><label>
//         confirmPassword
//         <input
//             type="password"
//             name="confirmPassword"
//             value={confirmPassword}
//             placeholder="confirmPassword"
//             onChange={handleChange} />
//     </label></>
