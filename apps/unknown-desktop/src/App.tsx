import { Natal } from "@unknown/components";

export default function App() {
  return (
    <div className="mt-[300px] flex justify-center">
      <Natal
        width={600}
        height={600}
        birthday="1998-12-18"
        birthdayType={2}
        gender="男"
      />
    </div>
  );
}
