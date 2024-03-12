import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { FieldValues, useForm } from "react-hook-form";

import RegistrationModal from "./RegistrationModal";
import { useLoginMutation } from "@/redux/features/auth/authApi";
import { VerifyJwt } from "./component/utils/VerifyJwt";
import { toast } from "sonner";
import { useAppDispatch } from "@/redux/hooks/Hooks";
import { setUser } from "@/redux/features/authSlice";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();

  const [login] = useLoginMutation();

  const dispatch = useAppDispatch();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data: FieldValues) => {
    const ToastId = toast.loading("Longging in", {
      position: "top-center",
      duration: 1000,
    });
    try {
      const userData = {
        email: data.email,
        password: data.password,
      };
      const res = await login(userData).unwrap();
      console.log(res, "res");

      const user = VerifyJwt(res.token);
      console.log(user, "user");
      dispatch(setUser({ user: user, token: res.token }));
      toast.success("Logged in", { id: ToastId });
      navigate("/");
    } catch (err) {
      toast.error("Something Went Wrong", { id: ToastId });
    }
  };

  return (
    <div className=" h-screen flex flex-col justify-center items-center w-full">
      <form
        className="w-full flex flex-col  justify-center items-center"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="mb-4 w-full max-w-[350px]">
          <Label
            className="font-semibold text-lg text-slate-600 "
            htmlFor="email"
          >
            Email
          </Label>
          <Input
            {...register("email", { required: true })}
            type="text"
            id="email"
          />

          {errors?.email && (
            <span className="text-red-500"> Email is Required</span>
          )}
        </div>
        <div className="mb-4 w-full max-w-[350px]">
          <Label
            className="font-semibold text-lg text-slate-600 "
            htmlFor="password"
          >
            Password
          </Label>
          <Input
            {...register("password", { required: true })}
            type="text"
            id="password"
          />

          {errors?.password && (
            <span className="text-red-500">Password is Required</span>
          )}
        </div>

        <div>
          <Button type="submit">Submit</Button>
        </div>
      </form>
      <div className="flex mt-10 w-full max-w-[350px] items-center">
        <p className="w-1/2"> Haven't Account? </p>
        <RegistrationModal />
      </div>
    </div>
  );
};

export default Login;
