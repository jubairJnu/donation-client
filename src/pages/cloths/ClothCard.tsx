import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { useInView, motion } from "framer-motion";
import { useRef } from "react";
import { Link } from "react-router-dom";

//type

export type TClothsProps = {
  image: string;
  title: string;
  category: string;
  size: string;
  _id: string;
};
// initial={{ opacity: 0, y: 50 }}
// animate={{ opacity: 1, y: 0 }}
// transition={{ duration: 0.6 }}

const ClothCard = ({ cloth }: { cloth: TClothsProps }) => {
  const ref = useRef(null);

  const inView = useInView(ref);

  return (
    <motion.div
      ref={ref}
      animate={
        inView
          ? { opacity: 1, y: 0 }
          : { opacity: 0, y: 50, transition: { duration: 0.7 } }
      }
    >
      <Card className=" w-full max-w-[350px] mx-auto">
        <CardHeader>
          <img src={cloth?.image} alt="" />
          <CardTitle className="text-slate-700 ">{cloth?.title}</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex justify-between items-center text-slate-800">
            <p>
              <span className="font-semibold me-1 ">Catergory:</span>
              {cloth?.category}
            </p>
            <p>
              {" "}
              <span className="font-semibold me-1">Size:</span>
              {cloth?.size}
            </p>
          </div>
        </CardContent>
        <CardFooter className="mt-10]">
          {/* customize button for full width */}

          <Link to={`/winter-clothes/${cloth?._id}`}>
            <Button className="w-[320px]" variant="dark" size="full">
              View Details
            </Button>
          </Link>
        </CardFooter>
      </Card>
    </motion.div>
  );
};

export default ClothCard;
