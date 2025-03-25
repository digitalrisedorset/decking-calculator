import Link from "next/link"
import React from "react";
import HeaderStyles from "@/components/global/styles/Header";
import Image from "next/image";
import {useRouter} from "next/router";

const Header: React.FC = () => {
    const router = useRouter();

    const handleClick = (e: React.FormEvent) => {
        e.preventDefault(); // stop the form from submitting
        router.push({pathname: `/`});
    }

    return (
        <HeaderStyles>
            <Link href="#" onClick={handleClick}>
                <Image className="logo" src={`/images/companion-site-logo.jpg`} width="125" height="120" alt=""/>
            </Link>
        </HeaderStyles>)
    ;
}

export default Header;
