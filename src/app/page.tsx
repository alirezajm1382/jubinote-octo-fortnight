import Button from "@/components/shared/Button";
import Input from "@/components/shared/Input";
import Card from "@/components/shared/Card";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <Card className="gap-6 items-center w-full">
        <h1 className="text-white text-2xl font-semibold">
          Welcome to Jubinote!
        </h1>
        <p className="text-gray-400 text-center">
          Please enter your name to continue
        </p>
        <div className="flex gap-4 items-center w-full">
          <Input
            placeholder="e.g. John Smith"
            aria-label="Your name"
            fullWidth
          />
          <Link href="/dashboard">
            <Button variant="outline" icon={<ArrowRightIcon />}>
              Proceed
            </Button>
          </Link>
        </div>
      </Card>
    </div>
  );
}

const ArrowRightIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M5 12h14" />
      <path d="m12 5 7 7-7 7" />
    </svg>
  );
};
