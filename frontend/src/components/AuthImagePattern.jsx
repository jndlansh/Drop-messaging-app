const AuthImagePattern = ({ title, subtitle }) => {
    //console.log("AuthImagePattern rendered"); // 🔍 Debug
  return (
    <div className="flex items-center justify-center bg-base-200 p-12">
      {" "}
      <div className="max-w-md text-center">
        <div className="grid grid-cols-3 gap-3 mb-8">
          {[...Array(9)].map((_, i) => (
            <div
              key={i}
              className={`aspect-square rounded-2xl bg-blue-500 opacity-30
 ${
                i % 2 === 0 ? "animate-pulse" : ""
              }`}
            />
          ))}
        </div>
        <h2 className="text-2xl font-bold mb-4">{title}</h2>
        <p className="text-base-content/60">{subtitle}</p>
      </div>
    </div>
  );
};

export default AuthImagePattern;

// const AuthImagePattern = ({ title, subtitle }) => {
//   return (
//     <div style={{ background: "#fce7f3", padding: "40px", border: "2px solid black" }}>
//       <h2 style={{ fontSize: "24px", fontWeight: "bold", marginBottom: "10px" }}>{title}</h2>
//       <p style={{ fontSize: "16px", color: "#444" }}>{subtitle}</p>
//     </div>
//   );
// };

// export default AuthImagePattern;
