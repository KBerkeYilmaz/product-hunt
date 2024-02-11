"use client";

const Button = ({ children, ...props }) => {


  return (
    <button
      {...props}
      className="bg-blue-500 text-white p-2 my-4 w-full rounded-md shadow-md"
    >
      {children}
    </button>
  );
};
export default Button;
