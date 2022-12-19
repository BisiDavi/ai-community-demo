interface Props {
  text?: string;
  bgColor: string;
}

export default function Tag({ text = "This is a tag", bgColor }: Props) {
  return (
    <>
      <div className="tag flex h-8 items-center rounded-md px-4 text-sm text-white hover:opacity-80">
        {text}
      </div>
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
