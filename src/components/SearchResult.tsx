import SearchItem from "@/components/SearchItem";
import searchResult from "@/json/search-result.json";

export default function SearchResult() {
  return (
    <div className="mt-20 rounded-xl py-20 pl-10 pr-4">
      <h4 className="text-xl font-bold">Here&#39;s who we found</h4>
      <div className="search-view">
        {searchResult.map((item) => (
          <SearchItem key={item.name} content={item} />
        ))}
      </div>
    </div>
  );
}
