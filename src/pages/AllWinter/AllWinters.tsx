import CommonHeader from "../component/utils/CommonHeader";
import Container from "../component/utils/Container";
import ClothCard, { TClothsProps } from "../cloths/ClothCard";
import { useGetClothsQuery } from "@/redux/features/cloths/clothApi";

const AllWinters = () => {
  const { data: cloths } = useGetClothsQuery(undefined);

  return (
    <Container>
      <CommonHeader text="All Winter Cloths" />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-items-center gap-5">
        {cloths?.map((cloth: TClothsProps) => (
          <ClothCard key={cloth._id} cloth={cloth} />
        ))}
      </div>
    </Container>
  );
};

export default AllWinters;
