import Button from "./Button";

export default function AdviceBox(props) {
  return (
    <div className="advice-box">
      <h1>Advice # {props.advice_number}</h1>
      {props.children}
      <img
        src="/images/pattern-divider-mobile.svg"
        alt=""
        className="mobile-divider"
      />
      <img
        src="/images/pattern-divider-desktop.svg"
        alt=""
        className="desktop-divider"
      />   
      <Button />   
    </div>
  );
}