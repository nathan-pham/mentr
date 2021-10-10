import { MailOutline, SettingsOutline, AddOutline } from "react-ionicons"
import HeaderLink from "./HeaderLink"

export default function Header() {
    
    return (
        <header className="flex items-center justify-between mt-12">
            <img src="/icons/mentr.png" alt="Mentr Logo" className="w-14 h-14 " />

            <nav className="flex gap-4">
                <HeaderLink href="/user/add"><AddOutline style={{ color: "inherit" }} /></HeaderLink>
                <HeaderLink href="/user/messages"><MailOutline style={{ color: "inherit" }} /></HeaderLink>
                <HeaderLink href="/user/settings"><SettingsOutline style={{ color: "inherit" }} /></HeaderLink>
            </nav>
        </header>
    )

}