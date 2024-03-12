import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import Container from "../component/utils/Container";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";

import { MdDelete } from "react-icons/md";
import { Link } from "react-router-dom";
import {
  useDeleteClothsMutation,
  useGetClothsQuery,
} from "@/redux/features/cloths/clothApi";
import EditWinterCloth from "./EditWinterCloth";
import { toast } from "sonner";
import { TClothsProps } from "../cloths/ClothCard";

const AllWinterCloths = () => {
  const [deleteCloth, { isSuccess }] = useDeleteClothsMutation();

  if (isSuccess) {
    toast.success("Deleted Successfully", {
      position: "top-right",
      duration: 1000,
    });
  }

  const { data: cloths } = useGetClothsQuery(undefined);

  const handleDelete = (id: string) => {
    deleteCloth(id);
  };

  return (
    <Container>
      <h1 className="text-2xl font-bold text-center mb-16 mt-5">
        All winter Page
      </h1>
      <Table className=" text-center">
        <TableHeader>
          <TableRow>
            <TableHead className="text-center text-lg font-bold">
              Title
            </TableHead>
            <TableHead className="text-center text-lg font-bold">
              Category
            </TableHead>
            <TableHead className="text-center text-lg font-bold">
              Size
            </TableHead>
            <TableHead className="text-center text-lg font-bold">
              Action
            </TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {cloths?.map((cloth: TClothsProps) => (
            <TableRow key={cloth._id}>
              <TableCell>{cloth?.title}</TableCell>
              <TableCell>{cloth?.category}</TableCell>
              <TableCell>{cloth?.size}</TableCell>

              {/* dropdown */}
              <TableCell>
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="outline">Action</Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent className="w-56">
                    {/* <DropdownMenuCheckboxItem>Panel</DropdownMenuCheckboxItem> */}
                    <div className="flex justify-between items-center">
                      <p className="text-green-500 text-2xl">
                        <EditWinterCloth id={cloth._id} />
                      </p>
                      {/* delete */}

                      <Button
                        onClick={() => handleDelete(cloth._id)}
                        variant="destructive"
                      >
                        <span className="text-white text-2xl">
                          <MdDelete />
                        </span>
                      </Button>

                      <Link to="/dashboard/create-winter-clothes">
                        <Button variant="link">Add</Button>
                      </Link>
                    </div>
                  </DropdownMenuContent>
                </DropdownMenu>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Container>
  );
};

export default AllWinterCloths;
