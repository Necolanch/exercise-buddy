import HamburgerMenu from "../Components/HamburgerMenu";
import { DashboardList } from "../Components/List";

const Dashboard=props=>{
    return(
        <div>
        <HamburgerMenu/>
        <img src={require("../IMG/exercising.jpg")} alt="People exercising background" style={{position:"absolute", width:"100vw", height:"100vh", opacity:".03", filter:"grayscale(100%)"}}/>
        <DashboardList/>
        </div>
    )
}

export default Dashboard;