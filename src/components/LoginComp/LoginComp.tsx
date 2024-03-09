import { NavLink, useNavigate } from "react-router-dom";
import logo from "../../assets/logo.png";
import { SubmitHandler, useForm } from "react-hook-form";
import { useLoginMutation } from "@/redux/features/auth/AuthApi";
import { useAppDispatch } from "@/redux/hooks";
import { setUser } from "@/redux/features/auth/AuthSlice";
import verifyToken from "@/utils/verifyToken";
import { toast } from "sonner";

type TInputs = {
  email: string;
  password: string;
};

const LoginComp = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<TInputs>();

  const [login] = useLoginMutation();

  const onSubmit: SubmitHandler<TInputs> = async (data) => {
    const toastId = toast.loading("Logging In");
    try {
      const res = await login(data).unwrap();
      const user = verifyToken(res.token);
      dispatch(setUser({ user: user, token: res.token }));
      toast.success("Login Success", { id: toastId, duration: 1000 });
      navigate("/");
    } catch (error) {
      toast.error("Login Failed", { id: toastId, duration: 1000 });
    }
  };
  return (
    <section className="bg-white ">
      <div className="container flex items-center justify-center min-h-screen px-6 mx-auto ">
        <form
          className="w-full max-w-lg py-8 px-10 rounded shadow-xl"
          onSubmit={handleSubmit(onSubmit)}
        >
          <div className="flex justify-center mx-auto">
            <NavLink to="/">
              {" "}
              <img className="w-auto h-16 " src={logo} alt="Logo" />
            </NavLink>
          </div>

          <div className="flex items-center justify-center mt-6">
            <a
              href="#"
              className="w-1/3 pb-2 font-semibold text-center text-gray-800 capitalize border-b-2 border-primaryColor"
            >
              Login
            </a>
          </div>

          <div className="relative flex items-center mt-6">
            <span className="absolute">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6 mx-3 text-gray-300 "
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
            </span>

            <input
              type="email"
              className="block w-full py-3 text-gray-700 bg-white border rounded-lg px-11  focus:outline-primaryColor "
              placeholder="Email address"
              {...register("email", { required: true })}
            />
          </div>
          {errors.email && (
            <span className="text-red-500 text-sm mt-2">
              *Email is required
            </span>
          )}

          <div className="relative flex items-center mt-4">
            <span className="absolute">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6 mx-3 text-gray-300 "
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                />
              </svg>
            </span>

            <input
              type="password"
              className="block w-full py-3 text-gray-700 bg-white border rounded-lg px-11  focus:outline-primaryColor "
              placeholder="Password"
              {...register("password", { required: true })}
            />
          </div>
          {errors.password && (
            <span className="text-red-500 text-sm mt-2">
              *Password is required
            </span>
          )}

          <div className="mt-10">
            <button
              className="w-full px-6 py-3 text-base font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-primaryColor rounded-lg hover:bg-transparent  hover:text-primaryColor outline hover:outline-primaryColor "
              type="submit"
            >
              Login
            </button>

            <div className="mt-6 text-center ">
              <div className="text-sm text-secondaryColor ">
                Don't have an account?{" "}
                <NavLink
                  to="/register"
                  className="hover:underline font-semibold"
                >
                  Register Here
                </NavLink>
              </div>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
};

export default LoginComp;
