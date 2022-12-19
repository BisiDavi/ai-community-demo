import SearchItem from "@/components/SearchItem";
import searchResult from "@/json/search-result.json";

export default function SearchResult() {
  return (
    <>
      <div className="search-result -mt-36 w-full rounded-xl py-12 pl-12 pr-6">
        <h4 className="mb-6 text-2xl font-bold">Here&#39;s who we found</h4>
        <div className="search-view mt-4">
          {searchResult.map((item) => (
            <SearchItem key={item.name} content={item} />
          ))}
        </div>
      </div>
      <style jsx>
        {`
          .search-result {
            background-color: #f8ede2;
          }
        `}
      </style>
    </>
  );
}
