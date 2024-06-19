import { UserButton, useUser } from "@clerk/nextjs";

export default function Dashboard() {
  return (
    <div>
      <UserButton afterSignOutUrl="/sign-in" />
    </div>
  );
}
