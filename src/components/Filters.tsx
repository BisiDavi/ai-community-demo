import Tag from "@/components/Tag";

export default function Filters() {
  return (
    <>
      <div className="filters rounded-top-right-lg p-10">
        <h4>Filters</h4>
        <p>Industries</p>
        <div className="tag-group space-x-4">
          <Tag bgColor="#E5895F" />
          <Tag bgColor="#E5895F" />
          <Tag bgColor="#E5895F" />
          <Tag bgColor="#E5895F" />
        </div>
      </div>
      <style jsx>
        {`
          .filters {
            background: linear-gradient(
              270deg,
              #c59f6c 0%,
              rgba(217, 217, 217, 0) 50%
            );
          }
        `}
      </style>
    </>
  );
}
