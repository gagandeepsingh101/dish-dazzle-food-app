import React from "react";
import { Formik, Form, Field } from "formik";
import emailjs from "@emailjs/browser";
import * as Yup from "yup";
import { showToast } from "../utils/notification";


// Create Contact Page Component
const ContactPage = () => {

	// Add From Validation on filling the data in input tag
	const validateForm = Yup.object({
		name: Yup.string()
			.required("Required")
			.max(20, "Name Must be less than 20 character")
			.min(3, "Name Must be greater than 2 charcter "),
		email: Yup.string().email("Invalid Email").required("Required"),
		message: Yup.string()
			.max(50, "Message Must be less than 20 character")
			.min(11, "Message Must be greater than 10 charcter ")
			.required("Required"),
	});
	return (
		<div className="h-[80vh] flex flex-col md:flex-row-reverse items-center justify-center">
			<img
				srcSet="https://img.freepik.com/free-vector/flat-design-illustration-customer-support_23-2148887720.jpg?w=740&t=st=1700769019~exp=1700769619~hmac=0b07f971e3a34e0c87e2254259ede4e6bff70f3b6bc3ac69245b9713331fe62c"
				className="hidden md:block md:w-1/2  -z-50 lg:p-20"
				alt=""
			/>
			<div className="w-full md:w-1/2 p-4">
				<h1 className=" text-3xl text-blue-950 font-bold text-center lg:text-5xl">
					Contact Us
				</h1>
				<Formik
					initialValues={{ email: "", message: "", name: "" }}
					validationSchema={validateForm}
					onSubmit={(values, { setSubmitting }) => {

						// send email from contact from to emailjs registered email which user id is iMIpxJjQ5-YTe1ZQd template id is template_ukvpp87 and service id is service_pdx2crh 
						emailjs
							.send(
								"service_pdx2crh",
								"template_ukvpp87",
								{
									form_name: values.name,
									form_email: values.email,
									message: values.message,
								},
								"iMIpxJjQ5-YTe1ZQd"
							)
							.then(
								function (response) {
									console.log("SUCCESS!", response.status, response.text);
								},
								function (error) {
									console.log("FAILED...", error);
								}
							);
						showToast("Feedback Sent Successfully");
						values.email="";
						values.message="";
						values.name="";
						setSubmitting(false);
					}}>
					{({
						errors,
						touched,
						handleSubmit,
						isSubmitting,
						/* and other goodies */
					}) => (
						<Form onSubmit={handleSubmit} className=" p-5 flex flex-col">
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
							<label htmlFor="name">Enter Your Email</label>
							<Field
								type="email"
								name="email"
								className={
									" rounded-lg px-4 py-2 focus:outline-none border-2 w-full " +
									(errors.email
										? "focus:border-red-600 border-red-300"
										: "focus:border-blue-600 border-blue-200")
								}
							/>
							<p className="mb-4 h-5 text-red-500">
								{errors.email && touched.email && errors.email}
							</p>
							<label htmlFor="name">Enter Your Message</label>
							<Field
								as="textarea"
								type="text"
								name="message"
								className={
									"text-start h-24 max-h-28 rounded-lg px-4 py-2 focus:outline-none border-2 w-full " +
									(errors.message
										? "focus:border-red-600 border-red-300"
										: "focus:border-blue-600 border-blue-200")
								}
							/>
							<p className="mb-2 h-5 text-red-500">
								{errors.message && touched.message && errors.message}
							</p>
							<button
								type="submit"
								disabled={isSubmitting}
								className="w-1/2  border-blue-300 hover:bg-blue-900 hover:text-white border-4 px-4 py-2 mx-auto lg:w-1/3">
								Submit
							</button>
						</Form>
					)}
				</Formik>
			</div>
		</div>
	);
};
export default ContactPage;
