import Supplies from "@/components/Supplies/Supplies";

const AllSupplies = () => {
  return (
    <section>
      <div className="allSuppliesBG ">
        <div className="container mx-auto  ">
          <div className="flex justify-center items-center min-h-[350px]">
            <h2 className="text-white z-10">All Supplies</h2>
          </div>
        </div>
      </div>
      <div>
        <Supplies initialLimit={0} ShowBtn={false} />;
      </div>
    </section>
  );
};

export default AllSupplies;
