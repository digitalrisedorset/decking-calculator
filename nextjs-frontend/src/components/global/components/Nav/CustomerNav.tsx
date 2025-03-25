import Link from "next/link";

export const CustomerNav: React.FC = () => {
    return (
        <>
            <Link href="/events">Events</Link>
            <Link href="/orders">Orders</Link>
            {/*<Link href="/account">Account</Link>*/}
        </>
    );
}
