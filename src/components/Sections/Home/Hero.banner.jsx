export default function HeroBanner() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[calc(100vh-16rem)] bg-black text-white text-center">
      {/* Centered Logo */}
      <img src="/logo.png" alt="IEEE 2025 Logo" className="h-24 lg:h-36 mb-8" />

      {/* Welcome Text */}
      <h1 className="text-4xl font-bold mb-4">
        Welcome to the IEEE Home Page
      </h1>
      <p className="text-lg mb-4">
        This is the home page of the IEEE 2025 project.
      </p>
      <p className="text-lg">
        Explore our features and learn more about our mission.
      </p>
    </div>
  );
}
