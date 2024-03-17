import { useGetSingleSupplyQuery } from "@/redux/features/supplies/suppliesApi";
import { useParams } from "react-router-dom";
import SingleSupplyCard from "./SingleSupplyCard";

const SingleSupplies = () => {
  const { id } = useParams();
  const { data, isLoading } = useGetSingleSupplyQuery(id);

  if (isLoading) {
    return <p className="flex justify-center items-center h-screen">Loading...</p>;
  }

  return (
    <section className="dark:bg-gray-800 dark:text-white">
      <div className="allSuppliesBG ">
        <div className="container mx-auto  ">
          <div className="flex justify-center items-center min-h-[350px]">
            <h2 className="text-white z-10">Supply Details</h2>
          </div>
        </div>
      </div>
      <div className="">{data && <SingleSupplyCard key={data._id} item={data} />}</div>
    </section>
  );
};

export default SingleSupplies;
