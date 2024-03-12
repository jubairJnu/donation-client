import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useAddTestimonialMutation } from "@/redux/features/testimonial.api";
import { FieldValues, useForm } from "react-hook-form";
import { toast } from "sonner";

const CreateTestimonial = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  // post comment function

  const [addTestimonial, { data: addData, isLoading }] =
    useAddTestimonialMutation();

  const onSubmit = async (data: FieldValues) => {
    const toastId = toast.loading("Posting...");

    try {
      const testimonialData = {
        name: data.name,
        comment: data.comment,
      };

      const res = await addTestimonial(testimonialData) as any ;
    

      if (res?.data.insertedId) {
        reset();
        toast.success("Testimonial Posted Successfully", { id: toastId });
      }
    } catch (error) {
      reset();
      toast.error("something went wrong", { id: toastId });
    }
  };
  return (
    <div className="min-h-screen mt-24 ">
      <div className="text-center mb-10">
        <h1 className="text-2xl font-semibold">Give Review</h1>
        <p className="text-xl mt-2">About Our Donation</p>
      </div>
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

          {errors?.title && (
            <span className="text-red-500"> Title is Required</span>
          )}
        </div>

        {/* description */}
        <div className="mb-4 w-full max-w-[500px] ">
          <Label
            className="font-semibold text-lg text-slate-600 "
            htmlFor="password"
          >
            Your Review
          </Label>
          <Textarea
            {...register("comment", { required: true })}
            placeholder="write your comment..."
            id="comment"
            className="min-h-40"
          />

          {errors?.comment && (
            <span className="text-red-500">Comment is Required</span>
          )}
        </div>
        <div className="w-full max-w-[350px]">
          <Button type="submit" size="full">
            {isLoading ? "Submitting" : "Submit"}
          </Button>
        </div>
      </form>
    </div>
  );
};

export default CreateTestimonial;
