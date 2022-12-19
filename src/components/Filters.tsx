import Tag from "@/components/Tag";

export default function Filters() {
  return (
    <>
      <div className="filters -mt-16 w-96 rounded-tl-3xl p-8">
        <h4 className="text-2xl font-bold">Filters</h4>
        <p className="text-xl font-bold">Industries</p>
        <div className="tag-group mt-4 grid grid-cols-2 gap-4">
          <Tag bgColor="#E5895F" />
          <Tag bgColor="#E5895F" />
          <Tag bgColor="#E5895F" />
          <Tag bgColor="#E5895F" />
        </div>
      </div>
      <style jsx>
        {`
          .filters {
            background: #efe1c3;
          }
          .filters::after {
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
