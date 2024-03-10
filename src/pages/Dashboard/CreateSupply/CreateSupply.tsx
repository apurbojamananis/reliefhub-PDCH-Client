import { TUser, currentUser } from "@/redux/features/auth/AuthSlice";
import { useCreateSupplyMutation } from "@/redux/features/supplies/suppliesApi";
import { useAppSelector } from "@/redux/hooks";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { toast } from "sonner";

const CreateSupply = () => {
  const user: TUser | null = useAppSelector(currentUser);
  const { register, handleSubmit, reset } = useForm();

  const [supplyData] = useCreateSupplyMutation();

  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    const supplyInfo = {
      Name: user!.name,
      ...data,
    };
    await supplyData(supplyInfo);
    reset();
    toast.success("Supply Created Successfully");
  };
  return (
    <div className="container px-4 my-10 mx-auto rounded-lg bg-white dark:bg-gray-600 dark:text-white">
      <form onSubmit={handleSubmit(onSubmit)} className="shadow-lg  p-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 ">
          <div className="flex flex-col gap-3 ">
            <label htmlFor="title" className="text-xl font-semibold">
              Title
            </label>
            <input
              type="text"
              id="title"
              className="block w-full py-3 text-gray-700 bg-white border rounded-lg px-11  focus:outline-primaryColor "
              placeholder="Title"
              {...register("Title", { required: true })}
            />
          </div>
          <div className="flex flex-col gap-3 ">
            <label htmlFor="category" className="text-xl font-semibold">
              Category
            </label>
            <input
              type="text"
              id="category"
              className="block w-full py-3 text-gray-700 bg-white border rounded-lg px-11  focus:outline-primaryColor "
              placeholder="Category"
              {...register("Category", { required: true })}
            />
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-10">
          <div className="flex flex-col gap-3 ">
            <label htmlFor="amount" className="text-xl font-semibold">
              Amount
            </label>
            <input
              type="text"
              id="amount"
              className="block w-full py-3 text-gray-700 bg-white border rounded-lg px-11  focus:outline-primaryColor "
              placeholder="$ Amount"
              {...register("Amount", { required: true })}
            />
          </div>
          <div className="flex flex-col gap-3 ">
            <label htmlFor="Image" className="text-xl font-semibold">
              Image
            </label>
            <input
              type="text"
              id="image"
              className="block w-full py-3 text-gray-700 bg-white border rounded-lg px-11  focus:outline-primaryColor "
              placeholder="Image"
              {...register("Image", { required: true })}
            />
          </div>
        </div>
        <div className="grid grid-cols-1  gap-10 mt-10">
          <div className="flex flex-col gap-3 ">
            <label htmlFor="description" className="text-xl font-semibold">
              Description
            </label>
            <textarea
              id="description"
              className="block w-full py-3 text-gray-700 bg-white border rounded-lg px-11  focus:outline-primaryColor "
              placeholder="Description"
              {...register("Description", { required: true })}
            />
          </div>

          {/* <div className="flex flex-col gap-3 ">
            <label htmlFor="name" className="text-xl font-semibold">
              Name
            </label>
            <input
              type="text"
              id="name"
              defaultValue={user!.name}
              readOnly
              className="block w-full py-3 text-gray-700 bg-white border rounded-lg px-11  focus:outline-primaryColor "
              placeholder="Name"
              {...register("Name", { required: true })}
            />
          </div> */}
        </div>
        <div className="flex justify-end mt-10">
          <button
            type="submit"
            className="bg-secondaryColor px-3 py-2 text-white font-semibold hover:bg-transparent hover:text-secondaryColor outline outline-1 hover:outline-secondaryColor transition-all"
          >
            Create Supply
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreateSupply;
