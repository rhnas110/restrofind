export const Map = ({ src }: { src: string }) => {
  return (
    <div className="mb-4">
      <h2 className="mb-2 text-xl font-semibold text-stone-600">Map</h2>
      <div className="w-full h-[400px]">
        <iframe
          width="100%"
          height="100%"
          src={src}
          loading="lazy"
          className="rounded-lg"
        ></iframe>
      </div>
    </div>
  );
};
