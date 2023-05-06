export default function Content({ children }) {
  return (
    <>
      <div className="pb-[100px]"></div>
      <div className="w-full flex justify-center px-4">
        <div className="max-w-[900px] w-full">{children}</div>
      </div>
    </>
  );
}
