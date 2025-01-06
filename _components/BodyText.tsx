interface BodyTextProps {
    children: any | string;
}
  
export default function BodyText({ children }: BodyTextProps) {
return (
    <div className="prose prose-lg px-4 mx-auto my-4 max-w-4xl ">
        {children}
    </div>
);
}
