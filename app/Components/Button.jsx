export default function Button({ text, icon: Icon, style }) {
  return (
    <button
      className={`${
        Icon
          ? "flex items-center px-6 py-2 rounded-md border border-primary gap-2 justify-center text-[15px] text-primary hover:bg-primary hover:text-white transition-all duration-300"
          : "bg-primary text-white rounded-md py-2 px-8"
      } ${style}`}
    >
      {Icon && <Icon className="text-lg" />}
      {text}
    </button>
  );
}
