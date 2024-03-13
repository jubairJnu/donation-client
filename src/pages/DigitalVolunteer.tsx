
import Container from "./component/utils/Container";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { FieldValues, useForm } from "react-hook-form";
import { toast } from "sonner";
import { useAddVlounteerMutation } from "@/redux/features/volunteer.api";

const DigitalVolunteer = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  // add function

  const [addVolunteer, { data, isLoading }] = useAddVlounteerMutation();
  console.log(data);

  const onSubmit = async (data: FieldValues) => {
    const toastId = toast.loading("Posting...");

    try {
      const volunteerData = {
        name: data.name,
        email: data.email,
        phone: data.phone,
        location: data.location,
      };

      const res = (await addVolunteer(volunteerData)) as any;

      if (res?.data.insertedId) {
        reset();
        toast.success("Sign Up Successfully", { id: toastId });
      }
    } catch (error) {
      reset();
      toast.error("something went wrong", { id: toastId });
    }
  };

  return (
    <div className="mt-24 min-h-screen">
      <h1 className="text-2xl mb-10 font-semibold text-center ">
        Join As Virtual Volunteer
      </h1>
      <Container>
        <form
          className="w-full flex flex-col  justify-center items-center px-10"
          onSubmit={handleSubmit(onSubmit)}
        >
          <div className="mb-4 w-full max-w-[500px]">
            <Label
              className="font-semibold text-lg text-slate-600 "
              htmlFor="name"
            >
              Name
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

          {/* Email */}
          <div className="mb-4 w-full max-w-[500px]">
            <Label
              className="font-semibold text-lg text-slate-600 "
              htmlFor="email"
            >
              Email
            </Label>
            <Input
              {...register("email", { required: true })}
              type="email"
              id="email"
            />

            {errors?.email && (
              <span className="text-red-500"> Email is Required</span>
            )}
          </div>

          {/* phone */}
          <div className="mb-4 w-full max-w-[500px]">
            <Label
              className="font-semibold text-lg text-slate-600 "
              htmlFor="phone"
            >
              Phone
            </Label>
            <Input
              {...register("phone", { required: true })}
              type="text"
              id="phone"
            />

            {errors?.phone && (
              <span className="text-red-500"> Phone is Required</span>
            )}
          </div>

          {/* address */}
          <div className="mb-4 w-full max-w-[500px]">
            <Label
              className="font-semibold text-lg text-slate-600 "
              htmlFor="location"
            >
              Location
            </Label>
            <Input
              {...register("location", { required: true })}
              type="text"
              id="location"
            />

            {errors?.location && (
              <span className="text-red-500"> Location is Required</span>
            )}
          </div>

          <div className="w-full max-w-[350px]">
            <Button type="submit" size="full">
              {isLoading ? "Submitting" : "Submit"}
            </Button>
          </div>
        </form>
      </Container>
    </div>
  );
};

export default DigitalVolunteer;
