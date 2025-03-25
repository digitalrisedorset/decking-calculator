import Link from "next/link";
import NavStyles from "@/components/global/styles/NavStyles";
import {Solutions} from "@/components/solutions/components/Solutions";
import {useRouter} from "next/router";
import {useMenuSolution} from "@/state/MenuSolutionState";

export const Nav: React.FC = () => {
    const {menuOpen, openSolution} = useMenuSolution()
    const router = useRouter();

    const handleSolution = () => {
        router.push({pathname: `/our-solutions`});
    }

    return (
        <NavStyles>
            <button className="solution" onClick={handleSolution} onMouseEnter={openSolution}>
                Our Solutions
            </button>
            {menuOpen && <Solutions />}
            <Link href="/knowledge-base">Knowledge Base</Link>
            <Link href="/about-us">About Us</Link>
            <Link href="/projects">Projects</Link>
            <Link href="/contact">Contact</Link>
        </NavStyles>
    );
}
