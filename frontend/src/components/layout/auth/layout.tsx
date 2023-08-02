import { ReactNode } from "react"

type Props = {
    children: ReactNode
}

export default function AuthLayout({ children }: Props) {
    return (
        <div className="container">
            <div className="wrapper">
                {children}
            </div>
        </div>
    )
} 