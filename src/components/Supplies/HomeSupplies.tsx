import Supplies from "./Supplies";

const HomeSupplies = () => {
  return (
    <section className="dark:bg-gray-900 dark:text-white">
      <Supplies initialLimit={6} ShowBtn={true} />
    </section>
  );
};

export default HomeSupplies;
