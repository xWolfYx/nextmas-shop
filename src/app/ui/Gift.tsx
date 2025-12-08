import Image from "next/image";

export default function Gift({
  name,
  category,
}: {
  name: string;
  category: string;
}) {
  let categorySrc = "";
  let categoryColor = "";

  if (category === "For Work") {
    categorySrc = "/gifts/gift-for-harmony.png";
    categoryColor = "#4361ff";
  }

  if (category === "For Health") {
    categorySrc = "/gifts/gift-for-health.png";
    categoryColor = "#06a44f";
  }

  if (category === "For Harmony") {
    categorySrc = "/gifts/gift-for-harmony.png";
    categoryColor = "#ff43f7";
  }

  return (
    <div className="max-w-[310px] rounded-[1.25rem] bg-[#ecf3f8]">
      <div className="rounded-[1.25rem]">
        <Image
          src={categorySrc}
          width={400}
          height={400}
          alt={name}
          className="h-[230px] w-[310px]"
        />
      </div>
      <div className="flex h-[112] flex-col gap-2 rounded-[1.25rem] bg-white p-5">
        <span
          style={{ color: categoryColor }}
          className={`text-[0.75rem] font-semibold tracking-[0.063rem] uppercase`}
        >
          {category}
        </span>
        <span className="font-semibold tracking-[0.08rem] uppercase">
          {name}
        </span>
      </div>
    </div>
  );
}
