import Image from "next/image";

import Tag from "@/components/Tag";

interface Props {
  content: {
    name: string;
    img: string;
    text: string;
    tags: Array<{ text: string; bgColor: string }>;
  };
}

export default function SearchItem({ content }: Props) {
  return (
    <div className="my-4 flex space-x-6 rounded-md bg-white p-4">
      <Image src={content.img} alt={content.name} height={100} width={130} />
      <div className="content relative">
        <h4 className="text-xl font-bold">{content.name}</h4>
        <p className="w-2/3">{content.text}</p>
        <div className="tags my-2 mt-4 flex space-x-4">
          {content.tags.map((item, index) => (
            <Tag bgColor={item.bgColor} text={item.text} key={index} />
          ))}
        </div>
      </div>
      <button className="h-8 w-28 rounded-lg  px-2 text-sm font-medium hover:bg-gray-100">
        View Profile
      </button>
    </div>
  );
}
