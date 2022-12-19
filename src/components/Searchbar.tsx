export default function Searchbar() {
  return (
    <form className="mx-10  w-full">
      <input
        className="input h-12 w-full  rounded-lg border px-5 font-bold text-black placeholder-black"
        placeholder="here's a search query"
      />
      <style jsx>
        {`
          .input {
            border: 1px solid #e9ce9f;
          }
        `}
      </style>
    </form>
  );
}
