// import React, { useState, useEffect, ChangeEvent } from "react";
// import { useNavigate } from "react-router-dom";
// import AOS from "aos";
// import "aos/dist/aos.css";
// import { FaPowerOff } from "react-icons/fa";
// // import axios from "axios";

// interface LoginData {
//   username: string;
//   password: string;
// }

// interface SignupData {
//   username: string;
//   email: string;
//   password: string;
//   confirmPassword: string;
//   gender: string;
// }

// const Login: React.FC = () => {
//   const [, setActiveCard] = useState<"login" | "signup">("login");
//   const [showSignup, setShowSignup] = useState(false);
//   const [loginData, setLoginData] = useState<LoginData>({
//     username: "",
//     password: "",
//   });
//   const [signupData, setSignupData] = useState<SignupData>({
//     username: "",
//     email: "",
//     password: "",
//     confirmPassword: "",
//     gender: "",
//   });
//   const navigate = useNavigate();

//   useEffect(() => {
//     AOS.init({ duration: 1500 });
//   }, []);

// //   const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
// //     e.preventDefault();
// //     try {
// //       const response = await axios.post(
// //         "http://localhost:5000/auth/login",
// //         loginData,
// //         { withCredentials: true } 
// //       );
// //       console.log("Login response:", response.data); 
// //       if (response.data.access_token) {
// //         localStorage.setItem("token", response.data.access_token);
// //         navigate("/bridge");
// //       } else {
// //         console.error("Login response didn't contain a token:", response.data);
// //         alert("Login failed: Unexpected response from server");
// //       }
// //     } catch (error: any) {
// //       console.error("Login error:", error);
// //       if (error.response) {
// //         console.error("Error response:", error.response.data);
// //         alert(`Login failed: ${error.response.data.message || "An unexpected error occurred"}`);
// //       } else if (error.request) {
// //         console.error("No response received:", error.request);
// //         alert("Login failed: No response from server. Please try again.");
// //       } else {
// //         console.error("Error setting up request:", error.message);
// //         alert("Login failed: An unexpected error occurred. Please try again.");
// //       }
// //     }
// //   };

// //   const handleSignup = async (e: React.FormEvent<HTMLFormElement>) => {
// //     e.preventDefault();
// //     if (signupData.password !== signupData.confirmPassword) {
// //       alert("Passwords do not match");
// //       return;
// //     }
// //     try {
// //       const response = await axios.post(
// //         "http://localhost:5000/auth/register",
// //         signupData
// //       );
// //       console.log("Signup response:", response); 
// //       if (response.data.token) {
// //         localStorage.setItem("token", response.data.token);
// //         navigate("/bridge");
// //       } else {
// //         console.error("Signup response didn't contain a token:", response.data);
// //         alert("Signup successful, but login failed. Please try logging in.");
// //       }
// //     } catch (error: any) {
// //       console.error("Signup error:", error);
// //       if (error.response) {
// //         console.error("Error response:", error.response.data);
// //         alert(`Signup failed: ${error.response.data.message || "An unexpected error occurred"}`);
// //       } else if (error.request) {
// //         console.error("No response received:", error.request);
// //         alert("Signup failed: No response from server. Please try again.");
// //       } else {
// //         console.error("Error setting up request:", error.message);
// //         alert("Signup failed: An unexpected error occurred. Please try again.");
// //       }
// //     }
// //   };

//   const handleChange = (
//     e: ChangeEvent<HTMLInputElement | HTMLSelectElement>,
//     setData: React.Dispatch<React.SetStateAction<LoginData>>
//   ) => {
//     const { name, value } = e.target;
//     setData((prevData) => ({
//       ...prevData,
//       [name]: value,
//     }));
//   };

//   const selectCard = (card: "login" | "signup") => {
//     setActiveCard(card);
//     if (card === "signup") {
//       setShowSignup(true);
//     }
//   };

//   const closeSignup = () => {
//     setShowSignup(false);
//   };

//   return (
//     <div className=" h-screen bg-amber-50 text-black overflow-hidden" data-aos="slide-left">
//          <img
//       src="/src/assets/silk-4916174_1280.jpg"
//       alt="Background"
//       className="absolute inset-0 object-cover object-center w-full h-full" />
      
//       <div className="flex-3 flex flex-col items-center justify-center" data-aos="fade-up">
//         <div className="w-[300px] p-5 flex flex-col items-center">
//           <h2 className="mb-5">Log In</h2>
//           {/* onSubmit={handleLogin} */}
//           <form className="flex flex-col w-full">
//             <div className="mb-4">
//               <label htmlFor="username" className="block mb-2">Username or Email</label>
//               <input
//                 type="text"
//                 id="username"
//                 name="username"
//                 value={loginData.username}
//                 onChange={(e) => handleChange(e, setLoginData)}
//                 className="p-2 border border-gray-400 rounded-lg w-full"
//                 required
//               />
//             </div>
//             <div className="mb-4">
//               <label htmlFor="password" className="block mb-2">Password</label>
//               <input
//                 type="password"
//                 id="password"
//                 name="password"
//                 value={loginData.password}
//                 onChange={(e) => handleChange(e, setLoginData)}
//                 className="p-2 border border-gray-400 rounded-lg w-full"
//                 required
//               />
//             </div>
//             <button type="submit" className="p-2 bg-[#a01d3d] text-white rounded-lg hover:bg-[#770822] transition-colors">Log In</button>
//           </form>
//         </div>
//         <div className="flex items-center my-5 w-3/5">
//           <div className="flex-1 h-px bg-white"></div>
//           <span className="mx-2">Or</span>
//           <div className="flex-1 h-px bg-white"></div>
//         </div>
//         <div className="text-center">
//           <h4 className="mb-3">Don't have an account? Join us today!</h4>
//           <button
//             className="p-2 bg-[#a01d3d] text-white rounded-lg hover:bg-[#770822] transition-colors"
//             onClick={() => selectCard("signup")}
//           >
//             Create an Account
//           </button>
//         </div>
//       </div>
//       {showSignup && (
//         <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-50 z-50" data-aos="fade-in">
//           <div className="bg-gradient-to-t from-[#890e0e] via-[#870021] to-[#000000] p-5 rounded-lg relative w-[80%] max-w-[400px]">
//             <button className="absolute top-3 right-3 text-2xl" onClick={closeSignup}>
//               <FaPowerOff size={28} />
//             </button>
//             <h2 className="mb-5">Sign Up</h2>
//             {/* onSubmit={handleSignup} */}
//             <form className="flex flex-col">
//               <div className="mb-4">
//                 <label htmlFor="new-username" className="block mb-2">Username</label>
//                 <input
//                   type="text"
//                   id="new-username"
//                   name="username"
//                   value={signupData.username}
//                   onChange={(e) =>
//                     handleChange(
//                       e,
//                       setSignupData as React.Dispatch<
//                         React.SetStateAction<LoginData | SignupData>
//                       >
//                     )
//                   }
//                   className="p-2 border border-gray-400 rounded-lg w-full"
//                   required
//                 />
//               </div>
//               <div className="mb-4">
//                 <label htmlFor="new-email" className="block mb-2">Email</label>
//                 <input
//                   type="email"
//                   id="new-email"
//                   name="email"
//                   value={signupData.email}
//                   onChange={(e) =>
//                     handleChange(
//                       e,
//                       setSignupData as React.Dispatch<
//                         React.SetStateAction<LoginData | SignupData>
//                       >
//                     )
//                   }
//                   className="p-2 border border-gray-400 rounded-lg w-full"
//                   required
//                 />
//               </div>
//               <div className="mb-4">
//                 <label htmlFor="gender" className="block mb-2">Gender</label>
//                 <select
//                   id="gender"
//                   name="gender"
//                   value={signupData.gender}
//                   onChange={(e) =>
//                     handleChange(
//                       e,
//                       setSignupData as React.Dispatch<
//                         React.SetStateAction<LoginData | SignupData>
//                       >
//                     )
//                   }
//                   className="p-2 border border-gray-400 rounded-lg w-full"
//                   required
//                 >
//                   <option value="">Select Gender</option>
//                   <option value="male">Male</option>
//                   <option value="female">Female</option>
//                   <option value="non-binary">Non-Binary</option>
//                   <option value="prefer-not-to-say">Prefer not to say</option>
//                 </select>
//               </div>
//               <div className="mb-4">
//                 <label htmlFor="new-password" className="block mb-2">Password</label>
//                 <input
//                   type="password"
//                   id="new-password"
//                   name="password"
//                   value={signupData.password}
//                   onChange={(e) =>
//                     handleChange(
//                       e,
//                       setSignupData as React.Dispatch<
//                         React.SetStateAction<LoginData | SignupData>
//                       >
//                     )
//                   }
//                   className="p-2 border border-gray-400 rounded-lg w-full"
//                   required
//                 />
//               </div>
//               <div className="mb-4">
//                 <label htmlFor="confirm-password" className="block mb-2">Confirm Password</label>
//                 <input
//                   type="password"
//                   id="confirm-password"
//                   name="confirmPassword"
//                   value={signupData.confirmPassword}
//                   onChange={(e) =>
//                     handleChange(
//                       e,
//                       setSignupData as React.Dispatch<
//                         React.SetStateAction<LoginData | SignupData>
//                       >
//                     )
//                   }
//                   className="p-2 border border-gray-400 rounded-lg w-full"
//                   required
//                 />
//               </div>
//               <button type="submit" className="p-2 bg-[#a01d3d] text-white rounded-lg hover:bg-[#770822] transition-colors">Sign Up</button>
//             </form>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Login;
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
// import logo from '../assets/tl.png';
// import { loginUser, registerUser } from '../services/api';

function Login() {
  const navigate = useNavigate();
  const [signIn, toggle] = useState(true);
  const [loginData, setLoginData] = useState({ email: '', password: '' });
  const [signupData, setSignupData] = useState({ name: '', email: '', password: '' });

//   const handleLoginChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     setLoginData({ ...loginData, [e.target.name]: e.target.value });
//   };

//   const handleSignupChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     setSignupData({ ...signupData, [e.target.name]: e.target.value });
//   };

//   const handleLogin = async (e: React.FormEvent) => {
//     e.preventDefault();
//     try {
//       const response = await loginUser(loginData.email, loginData.password);
//       const token = response.access_token;
//       localStorage.setItem('token', token);
//       navigate('/home');
//     } catch (error) {
//       alert('Login error: ' + (error as Error).message);
//     }
//   };

//   const handleSignup = async (e: React.FormEvent) => {
//     e.preventDefault();
//     try {
//       const response = await registerUser(signupData.name, signupData.email, signupData.password);
//       const token = response.token;
//       localStorage.setItem('token', token);
//       toggle(true);
//       setSignupData({ name: '', email: '', password: '' });
//     } catch (error) {
//       alert('Signup error: ' + (error as Error).message);
//     }
//   };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="relative bg-white rounded-lg shadow-lg overflow-hidden w-[900px] max-w-full min-h-[550px]">
        <div className={`absolute top-0 left-0 h-full w-1/2 transition-transform duration-600 ease-in-out ${!signIn ? 'transform translate-x-full opacity-0 z-1' : ''}`}>
        {/* onSubmit={handleSignup} */}
          <form  className="flex flex-col items-center justify-center p-12 text-center bg-gray-200 h-full">
            <h1 className="text-2xl font-bold">Create Account</h1>
            <input
              type='text'
              name="name"
              placeholder='Name'
              value={signupData.name}
            //   onChange={handleSignupChange}
              className="mt-4 p-2 border border-gray-300 rounded-lg w-full"
            />
            <input
              type='email'
              name="email"
              placeholder='Email'
              value={signupData.email}
            //   onChange={handleSignupChange}
              className="mt-4 p-2 border border-gray-300 rounded-lg w-full"
            />
            <input
              type='password'
              name="password"
              placeholder='Password'
              value={signupData.password}
            //   onChange={handleSignupChange}
              className="mt-4 p-2 border border-gray-300 rounded-lg w-full"
            />
            <button type="submit" className="mt-6 p-2 bg-blue-500 text-white rounded-lg">Sign Up</button>
          </form>
        </div>

        <div className={`absolute top-0 left-0 h-full w-1/2 transition-transform duration-600 ease-in-out ${signIn ? 'transform translate-x-full' : ''}`}>
        {/* onSubmit={handleLogin} */}
          <form  className="flex flex-col items-center justify-center p-12 text-center bg-gray-200 h-full">
            <h1 className="text-2xl font-bold">Sign in</h1>
            <input
              type='email'
              name="email"
              placeholder='Email'
              value={loginData.email}
            //   onChange={handleLoginChange}
              className="mt-4 p-2 border border-gray-300 rounded-lg w-full"
            />
            <input
              type='password'
              name="password"
              placeholder='Password'
              value={loginData.password}
            //   onChange={handleLoginChange}
              className="mt-4 p-2 border border-gray-300 rounded-lg w-full"
            />
            <a href='#' className="mt-2 text-sm text-blue-500">Forgot your password?</a>
            <button type="submit" className="mt-6 p-2 bg-blue-500 text-white rounded-lg">Sign In</button>
            <a href='/home' className="mt-2 text-sm text-blue-500">Home</a>
          </form>
        </div>

        <div className={`absolute top-0 left-1/2 w-1/2 h-full overflow-hidden transition-transform duration-600 ease-in-out ${!signIn ? 'transform -translate-x-full' : ''}`}>
          <div className="absolute flex flex-col items-center justify-center h-full w-full p-12 bg-blue-500 text-white text-center transform -translate-x-full transition-transform duration-600 ease-in-out">
            <h1 className="text-2xl font-bold">Already Have an Account?</h1>
            <p className="mt-4 text-sm">Log in and continue from where you left off.</p>
            <button onClick={() => toggle(true)} className="mt-6 p-2 border border-white rounded-lg">Sign In</button>
          </div>

          <div className="absolute flex flex-col items-center justify-center h-full w-full p-12 bg-blue-500 text-white text-center transition-transform duration-600 ease-in-out">
            <h1 className="text-2xl font-bold">Don't Have an Account?</h1>
            <p className="mt-4 text-sm">Join us today to create memories.</p>
            <button onClick={() => toggle(false)} className="mt-6 p-2 border border-white rounded-lg">Sign Up</button>
          </div>
        </div>
      </div>
      
    </div>
  );
}

export default Login;

