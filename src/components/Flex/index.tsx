const Flex = () => {
  return (
    <>
      <div className="flex border-4 border-red-300 m-3">
        <div className="p-2 border-4 border-blue-500">1 hello</div>
        <div className="p-2 border-4 border-blue-500">1 hello</div>
        <div className="p-2 border-4 border-blue-500">1 hello</div>
        <div className="p-2 border-4 border-blue-500">1 hello</div>
      </div>

      <div className="flex flex-col border-4 border-red-300 m-3">
        <div className="p-2 border-4 border-blue-500">2 hello</div>
        <div className="p-2 border-4 border-blue-500">2 hello</div>
        <div className="p-2 border-4 border-blue-500">2 hello</div>
        <div className="p-2 border-4 border-blue-500">2 hello</div>
      </div>

      <div className="flex flex-col justify-center items-center border-4 border-red-300 m-3">
        <div className="p-2 border-4 border-blue-500">3 hello</div>
        <div className="p-2 border-4 border-blue-500">3 hello</div>
        <div className="p-2 border-4 border-blue-500">3 hello</div>
        <div className="p-2 border-4 border-blue-500">3 hello</div>
      </div>

      <div className="flex flex-wrap border-4 border-red-300 m-3">
        <div className="w-1/3 p-2 border-4 border-blue-500">4 hello</div>
        <div className="w-1/3 p-2 border-4 border-blue-500">4 hello</div>
        <div className="w-1/3 p-2 border-4 border-blue-500">4 hello</div>
        <div className="w-1/6 p-2 border-4 border-blue-500">4 hello</div>
        <div className="w-1/6 p-2 border-4 border-blue-500">4 hello</div>
        <div className="w-1/6 p-2 border-4 border-blue-500">4 hello</div>
      </div>
    </>
  );
};

export default Flex;
