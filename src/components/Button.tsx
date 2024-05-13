interface Buttontype {
  title: string;
}

const Button = ({ title }: Buttontype) => {
  return (
    <button type="button" className="flex justify">
      {title}
    </button>
  );
};

export default Button;
