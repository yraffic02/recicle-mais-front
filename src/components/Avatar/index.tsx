"use client";
import { getItem } from "@/utils/localStorageUtils";
import { jwtDecode } from "jwt-decode";
import Image from "next/image";

interface IAvatarProps {
    userId: number;
    fullname: string;
    email: string;
    phone: string;
    user_type: string;
    avatar: string;
}

export const Avatar = () => {

    const token = getItem("token") as string;
    const decoded: IAvatarProps = jwtDecode(token);
    const avatar = decoded.avatar;
    return (
        <Image
            src={`/avatar/${avatar}`}
            height={32}
            width={32}
            alt="avart"
        />
    )
}