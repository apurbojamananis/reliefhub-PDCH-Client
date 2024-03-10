import { TSupplyCardProps } from "@/components/Supplies/SupplyCard";
import {
  Dialog,
  DialogContent,
  DialogClose,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import {
  useUpdateSupplyMutation,
  useDeleteSupplyMutation,
} from "@/redux/features/supplies/suppliesApi";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { toast } from "sonner";
import Swal from "sweetalert2";

const TableHeader: React.FC<TSupplyCardProps> = ({ item }) => {
  const { Title, Category, Image, _id, Description, Name, Amount } = item;

  const { register, handleSubmit } = useForm();
  const [updateData] = useUpdateSupplyMutation();
  const [deleteData] = useDeleteSupplyMutation();

  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    const alertId = toast.loading("Data updating...");
    try {
      const id = _id;
      await updateData({ ...data, id }).unwrap();
      toast.success("Data update successfully", {
        id: alertId,
        duration: 2000,
      });
    } catch (error) {
      toast.error("Data couldn't update!", {
        id: alertId,
        duration: 2000,
      });
    }
  };

  const handleDelete = () => {
    Swal.fire({
      title: "Are you sure? Once you deleted it's can't retrieve!",
      showDenyButton: true,
      showCancelButton: true,
      confirmButtonText: "Yes",
      denyButtonText: `No`,
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        deleteData(_id);
        toast.success("Data has been deleted Successfully!");
      } else if (result.isDenied) {
        toast.warning("Data didn't removed!");
      }
    });
  };

  return (
    <tr>
      <td className="px-4 py-4 text-md font-normal text-gray-800 dark:text-gray-300 whitespace-nowrap">
        {Title}
      </td>
      <td className="px-4 py-4 text-md font-normal text-gray-800 dark:text-gray-300 whitespace-nowrap ">
        <span className="capitalize">{Category}</span>
      </td>
      <td className="px-4 py-4 text-md font-normal text-gray-800 dark:text-gray-300 whitespace-nowrap">
        ${Amount}
      </td>
      <td className="px-4 py-4 text-md text-gray-800 dark:text-gray-300 whitespace-nowrap">
        <div>
          <Dialog>
            <DialogTrigger asChild>
              <button>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="size-6 hover:text-yellow-500"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10"
                  />
                </svg>
              </button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[500px] dark:text-gray-200 dark:bg-gray-800">
              <form onSubmit={handleSubmit(onSubmit)}>
                <DialogHeader>
                  <DialogTitle>Update Supply Information</DialogTitle>
                </DialogHeader>
                <div className="grid gap-4 py-4">
                  <div className="grid grid-cols-4 items-center gap-4">
                    <label htmlFor="Title" className="text-right font-semibold">
                      Title:
                    </label>
                    <input
                      id="Title"
                      defaultValue={Title}
                      className="col-span-3 p-2 dark:bg-gray-500"
                      {...register("Title")}
                    />
                  </div>
                  <div className="grid grid-cols-4 items-center gap-4">
                    <label htmlFor="Category" className="text-right font-semibold">
                      Category:
                    </label>
                    <input
                      id="Category"
                      defaultValue={Category}
                      className="col-span-3 p-2 dark:bg-gray-500"
                      {...register("Category")}
                    />
                  </div>
                  <div className="grid grid-cols-4 items-center gap-4">
                    <label htmlFor="Image" className="text-right font-semibold">
                      Image link:
                    </label>
                    <input
                      id="Image"
                      defaultValue={Image}
                      className="col-span-3 p-2 dark:bg-gray-500"
                      {...register("Image")}
                    />
                  </div>
                  <div className="grid grid-cols-4 items-center gap-4">
                    <label htmlFor="Amount" className="text-right font-semibold">
                      Amount:
                    </label>
                    <input
                      id="Amount"
                      defaultValue={Amount}
                      className="col-span-3 p-2 dark:bg-gray-500"
                      {...register("Amount")}
                    />
                  </div>
                  <div className="grid grid-cols-4 items-start gap-4 ">
                    <label htmlFor="Description" className="text-right font-semibold pt-2">
                      Description:
                    </label>
                    <textarea
                      id="Description"
                      defaultValue={Description}
                      className="col-span-3 p-2 dark:bg-gray-500"
                      rows={5}
                      {...register("Description")}
                    />
                  </div>
                  <div className="hidden">
                    <div className="grid grid-cols-4 items-center gap-4 ">
                      <label htmlFor="Name" className="text-right font-semibold">
                        Donated By:
                      </label>
                      <input
                        id="Name"
                        defaultValue={Name}
                        readOnly
                        className="col-span-3 p-2"
                        {...register("Name")}
                      />
                    </div>
                  </div>
                </div>
                <DialogClose asChild>
                  <div className="flex justify-end">
                    <button
                      type="submit"
                      className="px-3 py-2 bg-secondaryColor text-white font-medium hover:bg-transparent outline outline-1 hover:outline-secondaryColor hover:text-secondaryColor transition-all"
                    >
                      Update Supply
                    </button>
                  </div>
                </DialogClose>
              </form>
            </DialogContent>
          </Dialog>
        </div>
      </td>
      <td className="px-4 py-4 text-gray-800  dark:text-gray-300 whitespace-nowrap">
        <button onClick={handleDelete}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="size-6 hover:text-red-500"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
            />
          </svg>
        </button>
      </td>
    </tr>
  );
};

export default TableHeader;
