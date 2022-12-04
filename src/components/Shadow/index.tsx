const Shadow = () => {
  return (
    <>
      <div className="grid grid-cols-2 gap-6">
        <div className="shadow-sm bg-white rounded-lg">shadow-sm</div>
        <div className="shadow bg-white rounded-lg">shadow</div>
        <div className="shadow-md bg-white rounded-lg">shadow-md</div>
        <div className="shadow-lg bg-white rounded-lg">shadow-lg</div>
        <div className="shadow-xl bg-white rounded-lg">shadow-xl</div>
        <div className="shadow-2xl bg-white rounded-lg">shadow-2xl</div>
      </div>
    </>
  );
};

export default Shadow;
