import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { currentUser } from "@/redux/features/authSlice";
import { usePostDonationMutation } from "@/redux/features/donation/donatoinApi";
import { useAppSelector } from "@/redux/hooks/Hooks";

import { FieldValues, useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";
type TClothData = {
  title: string;
  category: string;
  size: string;
};

const DonateConfirmationModal = ({ clothData }: { clothData: TClothData }) => {
  const { title, category, size } = clothData;
  const user = useAppSelector(currentUser);

  //mutate donation
  const [donation, { isSuccess }] = usePostDonationMutation();

  const navigate = useNavigate();

  // useform

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data: FieldValues) => {
    const donationData = {
      name: data.name,
      email: data.email,
      donation: data.donation,
      title,
      category,
      size,
    };

    // donation(donationData);
    donation(donationData).then(() => {
      if (isSuccess) {
        toast.success("Success");
      }
      navigate("/dashboard");
    });
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="dark" size="full">
          Donate Now
        </Button>
      </DialogTrigger>
      <DialogContent className="w-full max-w-[525px]">
        <DialogHeader>
          <DialogTitle>Coths' Info</DialogTitle>
        </DialogHeader>

        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="border border-purple-500 p-5">
            <div className="flex justify-between items-center gap-4">
              <div>
                <Label
                  className="font-semibold text-lg text-slate-600 "
                  htmlFor="title"
                >
                  Title
                </Label>
                <p className="border px-2 py-1">{clothData?.title} </p>
              </div>

              {/* category */}
              <div>
                <Label
                  className="font-semibold text-lg text-slate-600 "
                  htmlFor="title"
                >
                  Category
                </Label>
                <p className="border px-2 py-1">{clothData?.category} </p>
              </div>

              {/* size */}
              <div>
                <Label
                  className="font-semibold text-lg text-slate-600 "
                  htmlFor="title"
                >
                  Size
                </Label>
                <p className="border px-2 py-1">{clothData?.size} </p>
              </div>
            </div>
          </div>
          {/* user */}
          <div className="flex justify-between items-center">
            <div>
              <div>
                <h1 className="text-center font-semibold">User Info</h1>
                <div>
                  <Label
                    className="font-semibold text-lg text-slate-600 "
                    htmlFor="title"
                  >
                    Name
                  </Label>
                  <Input
                    defaultValue={user?.name}
                    {...register("name", { required: true })}
                  />
                  {errors?.name && (
                    <span className="text-red-500"> Name is Required</span>
                  )}
                </div>
              </div>
              {/* email */}
              <div
                className="my-3
              "
              >
                <Label
                  className="font-semibold text-lg text-slate-600 "
                  htmlFor="title"
                >
                  Email
                </Label>
                <Input
                  defaultValue={user?.email}
                  {...register("email", { required: true })}
                />
                {errors?.email && (
                  <span className="text-red-500"> Email is Required</span>
                )}
              </div>
            </div>
            {/* donation */}
            <div>
              <Label
                className="font-semibold text-lg text-slate-600 "
                htmlFor="title"
              >
                Donation
              </Label>
              <Input
                type="number"
                {...register("donation", {
                  required: true,
                  valueAsNumber: true,
                })}
              />
              {errors?.donation && (
                <span className="text-red-500"> Donation is Required</span>
              )}
            </div>
          </div>

          <Button type="submit">Submit</Button>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default DonateConfirmationModal;
