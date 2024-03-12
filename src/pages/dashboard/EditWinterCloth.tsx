import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  useGetSingleClothQuery,
  useUpdateClothsMutation,
} from "@/redux/features/cloths/clothApi";

import { FieldValues, useForm } from "react-hook-form";
import { TiEdit } from "react-icons/ti";
import { toast } from "sonner";

const EditWinterCloth = ({ id }: { id: string }) => {
  const { data: singleData } = useGetSingleClothQuery(id);

  // update

  const [updateCloth, { isSuccess }] = useUpdateClothsMutation();

  if (isSuccess) {
    toast.success("Updated Successfully", {
      duration: 1000,
      position: "top-right",
    });
  }

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  //update submit

  const onSubmit = async (data: FieldValues) => {
    const clothInfo = {
      title: data.title,
      category: data.category,
      size: data.size,
      description: data.description,
      id: singleData._id,
    };

    //update
    updateCloth(clothInfo);
    reset();
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="dark">
          <TiEdit />
        </Button>
      </DialogTrigger>
      <DialogContent className="w-full max-w-[525px]">
        <h1 className="text-center text-xl font-bold ">Update A Cloth</h1>

        <form
          className="w-full flex flex-col  justify-center items-center"
          onSubmit={handleSubmit(onSubmit)}
        >
          <div className="flex flex-col lg:flex-row justify-center  items-center gap-9 w-full max-w-7xl">
            <div className="mb-4 w-full max-w-[350px]">
              <Label
                className="font-semibold text-lg text-slate-600 "
                htmlFor="title"
              >
                Title
              </Label>
              <Input
                {...register("title", { required: false })}
                defaultValue={singleData?.title}
                type="text"
                id="title"
              />

              {errors?.title && (
                <span className="text-red-500"> Title is Required</span>
              )}
            </div>
            {/* category */}
            <div className="mb-4 w-full max-w-[350px]">
              <Label
                className="font-semibold text-lg text-slate-600 "
                htmlFor="password"
              >
                Category
              </Label>
              <Input
                {...register("category", { required: false })}
                type="text"
                defaultValue={singleData?.category}
                id="category"
              />
            </div>
          </div>

          {/*  */}
          <div className="flex flex-col lg:flex-row justify-center  items-center gap-9 w-full max-w-7xl">
            {/* size */}
            <div className="mb-4 w-full max-w-[350px]">
              <Label
                className="font-semibold text-lg text-slate-600 "
                htmlFor="password"
              >
                Size
              </Label>
              <Input
                {...register("size", { required: false })}
                type="text"
                id="size"
                defaultValue={singleData?.size}
              />

              {errors?.size && (
                <span className="text-red-500">Size is Required</span>
              )}
            </div>
            {/* description */}
            <div className="mb-4 w-full max-w-[700px]">
              <Label
                className="font-semibold text-lg text-slate-600 "
                htmlFor="password"
              >
                Description
              </Label>
              <Textarea
                {...register("description", { required: false })}
                defaultValue={singleData?.description}
                id="description"
              />
            </div>
          </div>

          <div className="w-full max-w-[350px]">
            <DialogClose asChild>
              <Button type="submit" size="full">
                Submit
              </Button>
            </DialogClose>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default EditWinterCloth;
