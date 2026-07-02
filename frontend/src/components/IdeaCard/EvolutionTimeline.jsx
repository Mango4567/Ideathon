function EvolutionTimeline({ status }) {
  const stages = [
    "Submitted",
    "Under Review",
    "Approved",
    "Implemented",
  ];

  const currentIndex = stages.indexOf(status);

  return (
    <div className="mt-8 border-t pt-6">

      <h3 className="text-xl font-bold mb-8">
        Idea Evolution
      </h3>

      <div className="flex justify-between items-center relative">

        {/* Progress Line */}
        <div className="absolute top-5 left-0 w-full h-1 bg-gray-300"></div>

        <div
          className="absolute top-5 left-0 h-1 bg-green-500"
          style={{
            width: `${(currentIndex / (stages.length - 1)) * 100}%`,
          }}
        ></div>

        {stages.map((stage, index) => {

          const completed = index <= currentIndex;

          return (

            <div
              key={stage}
              className="relative z-10 flex flex-col items-center flex-1"
            >

              <div
                className={`w-10 h-10 rounded-full flex items-center justify-center font-bold border-4
                ${
                  completed
                    ? "bg-green-500 border-green-500 text-white"
                    : "bg-white border-gray-300 text-gray-500"
                }`}
              >
                ✓
              </div>

              <p
                className={`mt-3 text-sm text-center
                ${
                  completed
                    ? "font-semibold text-green-700"
                    : "text-gray-500"
                }`}
              >
                {stage}
              </p>

            </div>

          );
        })}

      </div>

    </div>
  );
}

export default EvolutionTimeline;