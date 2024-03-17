import { useGetSuppliesQuery } from "@/redux/features/supplies/suppliesApi";
import SupplyCard from "./SupplyCard";
import SecondaryButton from "@/utils/SecondaryButton/SecondaryButton";
// import { useState } from "react";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { RootState } from "@/redux/store";
import { toggleViewAll } from "@/redux/features/supplies/suppliesSlicer";
import { cn } from "@/lib/utils";
import PrimaryButton from "@/utils/PrimaryButton/PrimaryButton";
import { NavLink } from "react-router-dom";

export type TSupplies = {
  _id: string;
  Image: string;
  Title: string;
  Category: string;
  Amount: string;
  Description: string;
  Name: string;
};

type TProps = {
  initialLimit: number;
  ShowBtn: boolean;
};

const Supplies = ({ initialLimit, ShowBtn }: TProps) => {
  const viewAll = useAppSelector((state: RootState) => state.LimitValue.viewAll);
  const dispatch = useAppDispatch();

  const limit = viewAll ? 12 : initialLimit;
  const { data } = useGetSuppliesQuery(limit);

  const handleLimit = () => {
    dispatch(toggleViewAll());
  };

  return (
    <section className="dark:bg-gray-800">
      <div className="container mx-auto py-16 py-lg-28">
        <div
          className={cn("mb-10", {
            hidden: !ShowBtn,
          })}
        >
          <h3 className="mb-5">Supplies</h3>
          <h2>Essential Supplies</h2>
          <p className="mt-5">
            Discover vital supplies showcased in convenient cards below, offering a quick glimpse
            into each item's key details.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-3 gap-y-20">
          {Array.isArray(data) &&
            data?.map((item: TSupplies) => <SupplyCard item={item} key={item._id} />)}
        </div>
        <div
          className={cn(
            "w-full flex flex-col md:flex-row justify-center items-center pt-10 pt-lg-20 gap-5",
            {
              hidden: !ShowBtn,
            }
          )}
        >
          <div onClick={handleLimit} className="hidden lg:block">
            <SecondaryButton>
              {viewAll ? "Hide More Supplies" : "Load More Supplies"}
            </SecondaryButton>
          </div>
          <NavLink to="/supplies">
            <PrimaryButton>View All Supplies</PrimaryButton>
          </NavLink>
        </div>
      </div>
    </section>
  );
};

export default Supplies;
