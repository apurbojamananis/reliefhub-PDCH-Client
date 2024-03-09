import PrimaryButton from "@/utils/PrimaryButton/PrimaryButton";
import { TSupplyCardProps } from "../SupplyCard";
import Swal from "sweetalert2";
import {
  Dialog,
  DialogContent,
  DialogClose,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { useAppSelector } from "@/redux/hooks";
import { currentUser } from "@/redux/features/auth/AuthSlice";
import { useNavigate } from "react-router-dom";
const SingleSupplyCard: React.FC<TSupplyCardProps> = ({ item }) => {
  const navigate = useNavigate();
  const { Title, Category, Image, Description, Amount } = item;

  const user = useAppSelector(currentUser);

  const handleDonate = () => {
    Swal.fire({
      title: "Are you sure?",
      showDenyButton: true,
      showCancelButton: true,
      confirmButtonText: "Yes",
      denyButtonText: `No`,
    }).then((result) => {
      if (result.isConfirmed) {
        navigate("/dashboard");
        Swal.fire("Thank you so much!");
      } else if (result.isDenied) {
        Swal.fire("You might do again!");
      }
    });
  };

  return (
    <section className="py-20">
      <div className="container px-6 py-10 mx-auto">
        <div className="lg:-mx-6 lg:flex lg:items-center">
          <img
            className="object-cover object-center lg:w-1/2 lg:mx-6 w-full h-96 rounded-lg lg:h-[36rem]"
            src={Image}
            alt=""
          />

          <div className="mt-8  lg:px-6 lg:mt-0">
            <p className="text-5xl font-semibold text-secondaryColor">
              {Title}
            </p>

            <h1 className="text-2xl font-semibold text-gray-800  mt-5">
              Category: {Category}
            </h1>

            <h3 className="mt-2 text-lg font-medium text-secondaryColor">
              Price: ${Amount}
            </h3>

            <p className="max-w-lg mt-6 text-textColor ">
              <span className="font-medium ">Description:</span> {Description}
            </p>

            <Dialog>
              <DialogTrigger asChild>
                <div className="mt-10">
                  <PrimaryButton>Donate Now</PrimaryButton>
                </div>
              </DialogTrigger>
              <DialogContent className="sm:max-w-[500px]">
                <DialogHeader>
                  <DialogTitle>Supply Information</DialogTitle>
                </DialogHeader>
                <div className="flex flex-col gap-4">
                  <div className="flex gap-5">
                    <img
                      src={Image}
                      alt=""
                      className="rounded-lg size-10 object-cover"
                    />
                    <h3 className="font-semibold">{Title}</h3>
                  </div>
                  <h4 className="flex gap-3">
                    <span className="font-semibold">Category:</span>{" "}
                    <span>{Category}</span>
                  </h4>
                  <h4 className="flex gap-3">
                    {" "}
                    <span className="font-semibold">Price:</span>{" "}
                    <span>${Amount}</span>
                  </h4>

                  <h4 className="flex gap-3">
                    <span className="font-semibold">Name:</span>{" "}
                    <span>{user?.name}</span>
                  </h4>
                  <h4 className="flex gap-3">
                    <span className="font-semibold">Email:</span>{" "}
                    <span>{user?.email}</span>
                  </h4>
                  <p className="flex gap-3">
                    <span className="font-semibold  ">Description:</span>{" "}
                    <span className="">{Description}</span>
                  </p>
                </div>

                <DialogClose asChild>
                  <div className="flex justify-end" onClick={handleDonate}>
                    <button
                      type="submit"
                      className="px-3 py-2 bg-secondaryColor text-white font-medium hover:bg-transparent outline outline-1 hover:outline-secondaryColor hover:text-secondaryColor transition-all"
                    >
                      Donate
                    </button>
                  </div>
                </DialogClose>
              </DialogContent>
            </Dialog>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SingleSupplyCard;
