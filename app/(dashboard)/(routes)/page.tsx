import { UserButton, useUser } from "@clerk/nextjs";

export default function Home() {
  return (
    <div>
      <UserButton afterSignOutUrl="/sign-in" />
    </div>
  );
}
