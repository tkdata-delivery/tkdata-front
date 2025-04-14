const CustomTooltip = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-white p-4 shadow-md rounded-md border border-gray-100">
        <p className="text-purple-600 font-medium">Revenu</p>
        <p className="text-purple-600 font-medium text-lg">
          {`${payload[0].value.toLocaleString()} cfa`}
        </p>
        <p className="text-gray-500 text-sm">{`${label}, 22 Sep`}</p>
      </div>
    );
  }
  return null;
};

export default CustomTooltip;
