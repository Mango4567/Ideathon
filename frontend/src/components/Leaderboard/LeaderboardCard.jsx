function LeaderboardCard({ rank, name, points }) {
  let medal = "";
  let bgColor = "bg-white";

  if (rank === 1) {
    medal = "🥇";
    bgColor = "bg-yellow-100";
  } else if (rank === 2) {
    medal = "🥈";
    bgColor = "bg-gray-100";
  } else if (rank === 3) {
    medal = "🥉";
    bgColor = "bg-orange-100";
  }

  return (
    <div
      className={`${bgColor} rounded-xl shadow-md p-6 mb-5 border hover:border-blue-500 hover:shadow-xl transition`}
    >
      <div className="flex justify-between items-center">

        <div className="flex items-center gap-5">

          <div className="text-4xl">
            {medal || rank}
          </div>

          <div>

            <h2 className="text-2xl font-bold text-gray-800">
              💡 {name}
            </h2>

            <p className="text-gray-500">
              Rank #{rank}
            </p>

          </div>

        </div>

        <div className="text-right">

          <p className="text-3xl font-bold text-blue-700">
            👍 {points}
          </p>

          <p className="text-gray-500">
            Votes
          </p>

        </div>

      </div>
    </div>
  );
}

export default LeaderboardCard;