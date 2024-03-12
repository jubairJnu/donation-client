import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { usePostClothsMutation } from "@/redux/features/cloths/clothApi";
import { useState } from "react";

import { FieldValues, useForm } from "react-hook-form";
import { toast } from "sonner";
import Swal from "sweetalert2";

const img_hosting_token = import.meta.env.VITE_IMG_KEY;
// console.log(img_hosting_token);

const AddWinterCloth = () => {
  const img_hosting_url = `https://api.imgbb.com/1/upload?key=${img_hosting_token}`;

  const [loading, setLoading] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const [postCloths, { isError, isSuccess }] = usePostClothsMutation();

  //
  const onSubmit = async (data: FieldValues) => {
    setLoading(true);
    const image = data.image[0];
    const formData = new FormData();
    formData.append("image", image);
    await fetch(img_hosting_url, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((responseImage) => {
        const imageUrl = responseImage?.data.display_url;
        // cloths data

        const clothsData = {
          title: data.title,
          category: data.category,
          size: data.size,
          description: data.description,
          image: imageUrl,
        };

        // create and call

        postCloths(clothsData);
        reset();
        setLoading(false);
      });
  };

  if (isSuccess) {
    const Toast = Swal.mixin({
      toast: true,
      position: "top-end",
      showConfirmButton: false,
      timer: 3000,
      timerProgressBar: true,
      didOpen: (toast) => {
        toast.onmouseenter = Swal.stopTimer;
        toast.onmouseleave = Swal.resumeTimer;
      },
    });
    Toast.fire({
      icon: "success",
      title: "Creater successfully",
    });
  }

  if (isError) {
    toast.error("Something went wrong");
  }

  return (
    <div className="mt-10">
      <h1 className="my-10 text-2xl font-bold text-center">
        Add Winter Cloths
      </h1>
      {loading ? "Loading" : null}
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
              {...register("title", { required: true })}
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
              {...register("category", { required: true })}
              type="text"
              placeholder="hoodies, pant"
              id="category"
            />

            {errors?.category && (
              <span className="text-red-500">Category is Required</span>
            )}
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
              {...register("size", { required: true })}
              type="text"
              id="size"
              placeholder="xl, m, xxl"
            />

            {errors?.size && (
              <span className="text-red-500">Size is Required</span>
            )}
          </div>
          {/* image */}
          <div className="mb-4 w-full max-w-[350px]">
            <Label
              className="font-semibold text-lg text-slate-600 "
              htmlFor="password"
            >
              Image
            </Label>
            <Input
              {...register("image", { required: true })}
              type="file"
              id="image"
            />

            {errors?.image && (
              <span className="text-red-500">Image is Required</span>
            )}
          </div>
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
            {...register("description", { required: true })}
            placeholder="Description Here"
            id="description"
          />

          {errors?.description && (
            <span className="text-red-500">Description is Required</span>
          )}
        </div>
        <div className="w-full max-w-[350px]">
          <Button type="submit" size="full">
            {loading ? "Submitting" : "Submit"}
          </Button>
        </div>
      </form>
    </div>
  );
};

export default AddWinterCloth;
