import "./styles.css";

  const HEAD = (
    <div
      className="head"
    />
  )

  const BODY = (
    <div
      className="body"
    />
  )

  const RIGHT_ARM = (
    <div
      className="right-arm"
    />
  )

  const LEFT_ARM = (
    <div
      className="left-arm"
    />
  )

  const RIGHT_LEG = (
    <div
      className="right-leg"
    />
  )

  const LEFT_LEG = (
    <div
      className="left-leg"
    />
  )

  const BODY_PARTS = [HEAD, BODY, RIGHT_ARM, LEFT_ARM, RIGHT_LEG, LEFT_LEG]

  type DrawingProps = {
    numberOfGuesses: number
  }

export function Drawing({ numberOfGuesses }: DrawingProps) {
  return (
    <div style={{ position: "relative" }}>
      {BODY_PARTS.slice(0, numberOfGuesses).map((bodyPart, index) => {
        console.log(bodyPart);
        console.log(index);
        console.log(BODY_PARTS);
        return <div key={index}>{bodyPart}</div>;
      })}
      <div className="forca" />
      <div className="top" />
      <div className="center" />
      <div className="bottom" />
    </div>
  );
}
  

