const Button = ({ text }) => {
  if (!text) text = "Press Me";
  return (
    <button
      className="btn py-2 px-4 my-1 rounded-lg border border-purple-600 shadow-lg font-medium bg-gray-100 text-purple-600 hover:bg-purple-600 hover:text-white hover:border-gray-300"
      onClick={() => window.scrollTo(0, 0)}
    >
      {text}
    </button>
  );
};

export default Button;
