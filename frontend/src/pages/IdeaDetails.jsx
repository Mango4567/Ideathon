function IdeaDetails() {
  return (
    <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-xl p-8">

      <h1 className="text-4xl font-bold mb-4">
        Smart Attendance System
      </h1>

      <span className="inline-block bg-green-100 text-green-700 px-4 py-1 rounded-full font-semibold mb-6">
        Process Improvement
      </span>

      <p className="text-gray-700 leading-8">
        Reduce manual attendance by introducing QR code scanning for
        employees. This will eliminate paperwork, reduce errors,
        and improve operational efficiency across departments.
      </p>

      <div className="mt-8 space-y-3">

        <p>
          <strong>Submitted By:</strong> Rahul
        </p>

        <p>
          <strong>Status:</strong> Under Review
        </p>

        <p>
          <strong>Votes:</strong> 125
        </p>

        <p>
          <strong>Comments:</strong> 18
        </p>

      </div>

    </div>
  );
}

export default IdeaDetails;