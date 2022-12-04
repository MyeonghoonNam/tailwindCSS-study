const Size = () => {
  /**
   * space-y-8 : 각 요소의 상하 간격
   * bg-red-200 : red color 숫자가 높아질수록 진해짐
   * shadow : 그림자, rounded : radius
   * w-96 : 96%나 96px이 아님, 0.25rem*96
   *
   * https://tailwindcss.com/docs/width
   */

  return (
    <div className="space-y-4 bg-red-300">
      <div className="w-96 bg-white shadow rounded">w-96</div>
      <div className="w-80 bg-white shadow rounded">w-80</div>
      <div className="w-72 bg-white shadow rounded">w-72</div>
      <div className="w-64 bg-white shadow rounded">w-64</div>
      <div className="w-60 bg-white shadow rounded">w-60</div>
      <div className="w-56 bg-white shadow rounded">w-56</div>
      <div className="w-52 bg-white shadow rounded">w-52</div>
      <div className="w-48 bg-white shadow rounded">w-48</div>
    </div>
  );
};

export default Size;
