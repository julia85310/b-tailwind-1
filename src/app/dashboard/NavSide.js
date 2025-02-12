export default function NavSide({ enlaces }) {
  return (
    <div className="h-full w-auto bg-blue-50t px-6 flex flex-col items-center">
      {enlaces.map(enlace => (
        <a
          key={enlace.title}
          href={enlace.enlace}
          className="hover:text-green-400 text-center my-10"
        >
          {enlace.title}
        </a>
      ))}
    </div>
  );
}