import LeaderboardComp from "@/components/LeaderboardComp/LeaderboardComp";

const Leaderboard = () => {
  return (
    <div className="dark:bg-gray-800 min-h-screen">
      <div className="LeaderboardBG ">
        <div className="container mx-auto  ">
          <div className="flex justify-center items-center min-h-[350px]">
            <div className="z-10 flex flex-col gap-8">
              <h2 className="text-white block">Leaderboard</h2>
            </div>
          </div>
        </div>
      </div>
      <div className="container mx-auto ">
        <LeaderboardComp />
      </div>
    </div>
  );
};

export default Leaderboard;
