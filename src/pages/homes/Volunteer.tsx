import { Button } from "@/components/ui/button";
import Container from "../component/utils/Container";
import { FaFacebookF, FaYoutube } from "react-icons/fa";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { FaXTwitter } from "react-icons/fa6";

import man1 from "../../assets/man-1.jpg";
import man2 from "../../assets/man-2.jpg";
import woman1 from "../../assets/woman-1.jpg";
import woman2 from "../../assets/woman-2.jpg";
import { useRef } from "react";
import { motion, useTransform, useScroll } from "framer-motion";
import { useAppSelector } from "@/redux/hooks/Hooks";
import { currentTheme } from "@/redux/features/theme/themeSlice";

const Volunteer = () => {
  const ref = useRef(null);
  const isDark = useAppSelector(currentTheme);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1.2 1"],
  });

  const scaleValues = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  const opacityValues = useTransform(scrollYProgress, [0, 1], [0.1, 1]);

  const style = {
    scale: scaleValues,
    opacity: opacityValues,
  };

  //

  return (
    <div
      className={`py-2 mt-28 ${isDark ? "bg-black text-white " : "bg-gray-50"}`}
    >
      <Container>
        <div className="grid gap-5 lg:gap-0  ">
          <div className=" flex flex-col md:flex-row gap-5   ">
            <div className="w-full lg:w-1/2 flex flex-col justify-center lg:justify-start lg:items-start items-center lg:ps-8 ">
              <h1 className="mb-10 text-[28px] font-bold ">
                Meet Our the best <br /> volunteers team
              </h1>
              <Button size="rounded">Explore More</Button>
            </div>
            {/* first section volunteer */}
            <motion.div
              ref={ref}
              style={style}
              className="flex flex-col md:flex-row gap-5  w-1/2 mx-auto"
            >
              <Card className="w-full lg:w-[250px] mx-auto ">
                <CardHeader>
                  <CardTitle className="text-slate-700 ">Daniel Mark</CardTitle>
                </CardHeader>
                <CardContent>
                  <img src={man1} alt="" />
                </CardContent>
                <CardFooter className="mt-1">
                  <div className="flex justify-between mx-auto text-slate-500 items-center gap-16">
                    <FaFacebookF />

                    <FaYoutube />
                    <FaXTwitter />
                  </div>
                </CardFooter>
              </Card>
              <Card className="w-full lg:w-[250px] mx-auto ">
                <CardHeader>
                  <CardTitle className="text-slate-700 ">Thoms Alrt</CardTitle>
                </CardHeader>
                <CardContent>
                  <img src={woman1} alt="" />
                </CardContent>
                <CardFooter className="mt-1">
                  <div className="flex justify-between mx-auto text-slate-500 items-center gap-16">
                    <FaFacebookF />

                    <FaYoutube />
                    <FaXTwitter />
                  </div>
                </CardFooter>
              </Card>
            </motion.div>
          </div>

          {/* second */}
          <div className="flex flex-col md:flex-row gap-5 ">
            <motion.div
              ref={ref}
              style={style}
              className=" flex flex-col md:flex-row gap-5  w-1/2 mx-auto"
            >
              <Card className="w-full lg:w-[250px] mx-auto">
                <CardHeader>
                  <CardTitle className="text-slate-700 ">Nurth Widts</CardTitle>
                </CardHeader>
                <CardContent>
                  <img src={man2} alt="" />
                </CardContent>
                <CardFooter className="mt-1">
                  <div className="flex justify-between mx-auto text-slate-500 items-center gap-16">
                    <FaFacebookF />

                    <FaYoutube />
                    <FaXTwitter />
                  </div>
                </CardFooter>
              </Card>
              <Card className="w-full lg:w-[250px] mx-auto">
                <CardHeader>
                  <CardTitle className="text-slate-700 ">Philis Yars</CardTitle>
                </CardHeader>
                <CardContent>
                  <img src={woman2} alt="" />
                </CardContent>
                <CardFooter className="mt-1">
                  <div className="flex justify-between mx-auto text-slate-500 items-center gap-16">
                    <FaFacebookF />

                    <FaYoutube />
                    <FaXTwitter />
                  </div>
                </CardFooter>
              </Card>
            </motion.div>
            <div className="w-1/2">
              <div className="flex flex-col h-full justify-center items-center">
                <h1 className="text-[80px] font-bold text-primary-blue">
                  500+
                </h1>
                <p>Volunteers around the world</p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Volunteer;
