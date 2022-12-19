import Tag from "@/components/Tag";

export default function Filters() {
  return (
    <div className="rounded-top-right-lg p-10">
      <h4>Filters</h4>
      <p>Industries</p>
      <div className="tag-group space-x-4">
        <Tag bgColor="#E5895F" />
        <Tag bgColor="#E5895F" />
        <Tag bgColor="#E5895F" />
        <Tag bgColor="#E5895F" />
      </div>
    </div>
  );
}
