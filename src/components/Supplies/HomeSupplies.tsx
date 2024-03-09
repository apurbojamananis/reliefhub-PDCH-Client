import Supplies from "./Supplies";

const HomeSupplies = () => {
  return (
    <section className="">
      <Supplies initialLimit={6} ShowBtn={true} />
    </section>
  );
};

export default HomeSupplies;
