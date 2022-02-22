export default function Button({handleClick}) {
  return (
    <button className="icon" onClick={handleClick}>
      <img src="/images/icon-dice.svg" alt="" />
    </button>
  );
}
