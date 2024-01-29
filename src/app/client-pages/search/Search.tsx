export default function Search() {
  return (
    <div>
      <div className="flex justify-between items-center gap-x-2">
        <input
          type="text"
          placeholder={'Search...'}
          className={
            'w-full bg-gray-800 outline-0 rounded-lg h-[40px] px-2 duration-300 ease-in-out focus:bg-gray-700'
          }
        />
        <div className="">
          <button
            className={
              'h-[40px] bg-[#003aff] px-3 rounded-lg duration-300 ease-in-out hover:bg-blue-800'
            }
          >
            Search
          </button>
        </div>
      </div>
    </div>
  );
}
