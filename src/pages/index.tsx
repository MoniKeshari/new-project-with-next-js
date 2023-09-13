import ConversationDetail from "../components/ConversationDetail";
import SideBar from "../components/SideBar/index";
import style from "../styles/header.module.scss";
export default function Home() {
  return (
    <div className="row">
      <div className="col-4 col-md-4">
        <div className={style.sidebar_div}>
          <SideBar />
        </div>
      </div>
      <div className="col-8 col-md-8">
        <ConversationDetail />
      </div>
    </div>
  );
}
