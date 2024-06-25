import Card from "@/app/components/Card";
import Link from "next/link";
export default function Notifications() {
  return (
    <Card>
      Notifications
      <Link href={"/complex-dashboard/archived"}>Archived Notifications</Link>
    </Card>
  );
}
