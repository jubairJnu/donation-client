import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useRegisterMutation } from "@/redux/features/auth/authApi";

import { FieldValues, useForm } from "react-hook-form";
import { toast } from "sonner";

interface FetchBaseQueryError {
  data: any;
  message: string;
}

const RegistrationModal = () => {
  const [registration, { error, isSuccess }] = useRegisterMutation();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data: FieldValues) => {
    try {
      const userData = {
        name: data.name,
        email: data.email,
        password: data.password,
      };
      await registration(userData);
    } catch (error) {
      console.error("Registration error:", error);
    }
  };

  if (isSuccess) {
    toast.success("Register Successfully", { duration: 1000 });
  }

  if (error) {
    toast.error("Something went wrong", { duration: 1000 });
  }

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline" size="full">
          Register
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Register Now</DialogTitle>
        </DialogHeader>

        <form className="" onSubmit={handleSubmit(onSubmit)}>
          {/* name */}
          <div className="mb-4 w-full max-w-[350px]">
            <Label
              className="font-semibold text-lg text-slate-600 "
              htmlFor="name"
            >
              User Name
            </Label>
            <Input
              {...register("name", { required: true })}
              type="text"
              id="name"
            />

            {errors?.name && (
              <span className="text-red-500"> Name is Required</span>
            )}
          </div>
          {/* email */}
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

          {/* show error */}
          {error && (
            <p className="text-red-500 text-sm">
              {(error as FetchBaseQueryError).data.message}
            </p>
          )}

          <div className="flex justify-end mt-10">
            <DialogClose asChild>
              <Button type="submit">Submit</Button>
            </DialogClose>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default RegistrationModal;
