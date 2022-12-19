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
    <div>
      <Image src={content.img} alt={content.name} height={130} width={130} />
      <div className="content">
        <h4>{content.name}</h4>
        <p>{content.text}</p>
        <div className="tags mt-4">
          {content.tags.map((item, index) => (
            <Tag bgColor={item.bgColor} text={item.text} key={index} />
          ))}
        </div>
      </div>
    </div>
  );
}
