interface LogoProps {
  image: string;
  centered?: boolean;
}

export default function (props: LogoProps) {
  const containerClass = props.centered ? "m-4 flex justify-center" : "m-4";

  return (
    <div class={containerClass}>
      <img src={props.image} alt="Logo" />
    </div>
  );
}
