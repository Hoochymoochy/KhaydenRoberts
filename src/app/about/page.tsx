export default function About() {
  return (
    <div className="flex flex-col items-center space-y-64 w-full min-h-screen h-auto bg-black py-28 px-20 relative">
      <div className="w-full flex justify-center items-center">
        <video autoPlay loop muted playsInline className="object-cover">
          <source src={"/human.mp4"} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
  );
}
