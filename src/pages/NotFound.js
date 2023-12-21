import { Link } from "react-router-dom"
import { Button } from "@mui/material"

export default function NotFound() {
    return (
        <p style={{textAlign: "center", marginTop: "20%", fontSize:"x-large"}}>
            You must be lost! Please use this <Button href="#text-buttons" style={{fontSize: "large"}}>
            <Link to="/">link</Link>
        </Button> to navigate to home page.
        </p>
    )
}