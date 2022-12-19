interface Props {
  text?: string;
  bgColor: string;
}

export default function Tag({ text = "This is a tag", bgColor }: Props) {
  return (
    <>
      <div className="tag rounded-md text-white">{text}</div>
      <style jsx>
        {`
          .tag {
            background-color: ${bgColor};
          }
        `}
      </style>
    </>
  );
}
