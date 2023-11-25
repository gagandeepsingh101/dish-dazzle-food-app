import React, { useContext, useEffect } from "react";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import UserContext from "../utils/UserContext";
import { useNavigate } from "react-router-dom";
const Login = () => {
	let navigate=useNavigate();
	const {setUserLoginName, loginStatus, setLiveLoginStatus } = useContext(UserContext);
	const LoginValidate = Yup.object().shape({
		name: Yup.string()
			.required("Required")
			.max(24, "Name Must be less than 25 character")
			.min(3, "Name Must be greater than 2 charcter "),
		email: Yup.string().email("Invalid email").required("Required"),
		password: Yup.string()
			.required("Required")
			.min(6, "Password must be greater than 6 character"),
	});
	return (
		<div>
			<Formik
				initialValues={{name:"", email: "", password: "" }}
				onSubmit={(values, { setSubmitting }) => {
					setUserLoginName(values.name);
					let userInfo = localStorage.getItem(values.email);
					if (userInfo) {
						userInfo = JSON.parse(userInfo);
						if (userInfo.password === values.password) {
							alert(userInfo.email);
						}
					}
					navigate('/');
                    setLiveLoginStatus(!loginStatus); 
                    setSubmitting(false);
				}}
				validationSchema={LoginValidate}>
				{({ errors, touched, handleSubmit, isSubmitting }) => (
					<Form
						className="w-full flex flex-col md:w-5/6 mx-auto gap-2 mt-4 px-10 "
						onSubmit={handleSubmit}>
						<label htmlFor="name">Enter Your Name</label>
						<Field
						type="name"
							name="name"
							className={
								"rounded-lg px-4 py-2 focus:outline-none border-2 w-full " +
								(errors.name
									? "focus:border-red-600 border-red-300"
									: "focus:border-blue-600 border-blue-200")
							}
						/>
						<p className="mb-4 h-5 text-red-500">
						{errors.name && touched.name && errors.name}
						</p>
						<label htmlFor="email">Enter Your Email</label>
						<Field
							type="email"
							name="email"
							className={
								"rounded-lg px-4 py-2 focus:outline-none border-2 w-full " +
								(errors.email
									? "focus:border-red-600 border-red-300"
									: "focus:border-blue-600 border-blue-200")
							}
						/>
						<p className="mb-4 h-5 text-red-500">
							{errors.email && touched.email && errors.email}
						</p>
						<label htmlFor="password">Enter Your Password</label>
						<Field
							type="password"
							name="password"
							className={
								" rounded-lg px-4 py-2 focus:outline-none border-2 w-full " +
								(errors.password
									? "focus:border-red-600 border-red-300"
									: "focus:border-blue-600 border-blue-200")
							}
						/>
						<p className="mb-4 h-5 text-red-500">
							{errors.password && touched.password && errors.password}
						</p>
						<button
						onClick={()=>{
							
						}}
							type="submit"
							disabled={isSubmitting}
							className="w-1/2  border-blue-300 hover:bg-blue-900 hover:text-white border-4 px-4 py-2 mx-auto lg:w-1/3">
							Login
						</button>
					</Form>
				)}
			</Formik>
		</div>
	);
};

export default Login;
