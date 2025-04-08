function BulletBall({
  color = "bg-blue-900",
  size = "w-6 h-6",
  zIndex = "z-10",
  top = true,
  absolute = true,
  className = "",
}) {
  const translateY = top ? "-translate-y-1/2" : "translate-y-1/2";
  const positioning = top ? "top-0" : "bottom-0";

  return (
    <div
      className={`mx-auto left-0 right-0 rounded-full ${color} ${size} ${positioning} ${translateY} ${zIndex} ${
        absolute ? "absolute" : ""
      } ${className}`}
    />
  );
}
export default BulletBall;
