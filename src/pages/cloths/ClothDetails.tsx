import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Container from "../component/utils/Container";

import DonateConfirmationModal from "./DonateConfirmationModal";
import { useLoaderData } from "react-router-dom";

//type

type TSingleCloths = {
  title: string;
  image: string;
  _id: string;
  description: string;
  category: string;
  size: string;
};

const ClothDetails = () => {
  const singleClothData = useLoaderData() as TSingleCloths;

  const { title, image, description, category, size } = singleClothData;

  const clothDatas = { title, image, description, category, size };

  return (
    <Container>
      <Card className="w-ful lg:max-w-[550px] mx-auto mt-10">
        <CardHeader>
          <img src={image} alt="" />
          <CardTitle className="text-slate-700 ">{title}</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex justify-between items-center text-slate-800">
            <p>
              <span className="font-semibold me-1 ">Catergory:</span>
              {category}
            </p>
            <p>
              {" "}
              <span className="font-semibold me-1">Size:</span>
              {size}
            </p>
          </div>
          <p className="leading-relaxed mt-5 text-slate-500">{description}</p>
        </CardContent>
        <CardFooter className="mt-10">
          <DonateConfirmationModal clothData={clothDatas} />
        </CardFooter>
      </Card>
    </Container>
  );
};

export default ClothDetails;
