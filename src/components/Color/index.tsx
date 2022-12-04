const Color = () => {
  /**
   * 우선순위 기준에 주의해야한다. 뒤에 있다고 높은 우선순위가 아님
   */

  return (
    <>
      <div className="w-10 h-10 bg-blue-500 bg-red-500"></div>
      <div className="w-10 h-10 bg-red-500 bg-blue-500"></div>

      <div className="w-10 h-10 bg-blue-400 bg-red-500"></div>
      <div className="w-10 h-10 bg-red-500 bg-blue-400"></div>

      <div className="grid grid-cols-10 gap-2">
        <div className="bg-sky-50 aspect-square"></div>
        <div className="bg-sky-100 aspect-square"></div>
        <div className="bg-sky-200 aspect-square"></div>
        <div className="bg-sky-300 aspect-square"></div>
        <div className="bg-sky-400 aspect-square"></div>
        <div className="bg-sky-500 aspect-square"></div>
        <div className="bg-sky-600 aspect-square"></div>
        <div className="bg-sky-700 aspect-square"></div>
        <div className="bg-sky-800 aspect-square"></div>
        <div className="bg-sky-900 aspect-square"></div>
      </div>

      <div className="grid grid-cols-10 gap-2">
        <div className="bg-blue-50 aspect-square"></div>
        <div className="bg-blue-100 aspect-square"></div>
        <div className="bg-blue-200 aspect-square"></div>
        <div className="bg-blue-300 aspect-square"></div>
        <div className="bg-blue-400 aspect-square"></div>
        <div className="bg-blue-500 aspect-square"></div>
        <div className="bg-blue-600 aspect-square"></div>
        <div className="bg-blue-700 aspect-square"></div>
        <div className="bg-blue-800 aspect-square"></div>
        <div className="bg-blue-900 aspect-square"></div>
      </div>

      <div className="grid grid-cols-10 gap-2">
        <div className="bg-indigo-50 aspect-square"></div>
        <div className="bg-indigo-100 aspect-square"></div>
        <div className="bg-indigo-200 aspect-square"></div>
        <div className="bg-indigo-300 aspect-square"></div>
        <div className="bg-indigo-400 aspect-square"></div>
        <div className="bg-indigo-500 aspect-square"></div>
        <div className="bg-indigo-600 aspect-square"></div>
        <div className="bg-indigo-700 aspect-square"></div>
        <div className="bg-indigo-800 aspect-square"></div>
        <div className="bg-indigo-900 aspect-square"></div>
      </div>

      <div className="grid grid-cols-10 gap-2">
        <div className="bg-violet-50 aspect-square"></div>
        <div className="bg-violet-100 aspect-square"></div>
        <div className="bg-violet-200 aspect-square"></div>
        <div className="bg-violet-300 aspect-square"></div>
        <div className="bg-violet-400 aspect-square"></div>
        <div className="bg-violet-500 aspect-square"></div>
        <div className="bg-violet-600 aspect-square"></div>
        <div className="bg-violet-700 aspect-square"></div>
        <div className="bg-violet-800 aspect-square"></div>
        <div className="bg-violet-900 aspect-square"></div>
      </div>
    </>
  );
};

export default Color;
