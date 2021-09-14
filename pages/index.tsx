import type { NextPage } from "next";
import SRTooltip from "../components/SRTooltip";

const Home: NextPage = () => {
  const tooltipContent1 = "Tooltip text";

  const tooltipContent2 = (
    <div className="card">
      <div className="card-image waves-effect waves-block waves-light">
        <img
          className="activator"
          src="https://i.picsum.photos/id/1004/5616/3744.jpg?hmac=Or7EJnz-ky5bsKa9_frdDcDCR9VhCP8kMnbZV6-WOrY"
          height="100"
          width="100"
        />
      </div>
      <div className="card-content">
        <span className="card-title activator grey-text text-darken-4">
          Card Title<i className="material-icons right">more_vert</i>
        </span>
        <p>
          <a style={{ cursor: "pointer" }}>This is a link</a>
        </p>
      </div>
      <div className="card-reveal">
        <span className="card-title grey-text text-darken-4">
          Card Title<i className="material-icons right">close</i>
        </span>
        <p>
          Here is some more information about this product that is only revealed
          once clicked on.
        </p>
      </div>
    </div>
  );

  return (
    <div className="container">
      <br />
      <br />
      <div className="center">
        <SRTooltip jsxTooltipProps={tooltipContent1} isHTMLContent={false}>
          <button className="btn waves-effect waves-light" type="button">
            Submit1
            <i className="material-icons right">send</i>
          </button>
        </SRTooltip>
        <br />
        <br />
        <SRTooltip jsxTooltipProps={tooltipContent2} isHTMLContent={true}>
          <button className="btn waves-effect waves-light" type="button">
            Submit2
            <i className="material-icons right">send</i>
          </button>
        </SRTooltip>
      </div>
    </div>
  );
};

export default Home;
