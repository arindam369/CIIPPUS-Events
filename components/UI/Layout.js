import Navbar from "./Navbar";
export default function Layout(props){
    return (
        <>
            <Navbar/>
            <div>{props.children}</div>
        </>
    );
}