
import { RiBookmarkLine } from "react-icons/ri";

const card = (props) => {
  return (
    <div className="card">
      <div className="upper">
        <div className="top">
          <img
            src={props.brandLogo}
            alt=""
          />
          <button>
            Save <RiBookmarkLine />
          </button>
        </div>
        <div className="center">
          <h3>
            {props.companyName} <span>{props.timePeriod}</span>
          </h3>
          <h2>{props.post}</h2>
          <div className="tag">
            <h5>{props.tag1}</h5>
            <h5>{props.tag2}</h5>
          </div>
        </div>
      </div>
      <div className="bottom">
        <div className="price">
          <h3>{props.pay}</h3>
          <h4>{props.place}</h4>
        </div>
        <button>Apply Now</button>
      </div>
    </div>
  );
};

export default card;
