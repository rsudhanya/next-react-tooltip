import type { NextPage } from "next";
import SRTooltip from "../components/SRTooltip";

const Home: NextPage = () => {
  const tooltipContent = <span>Tooltip text</span>;

  return (
    <div className="container">
      <br />
      <br />
      <div className="center">
        <SRTooltip jsxTooltipProps={tooltipContent}>
          <button className="btn waves-effect waves-light" type="button">
            Submit
            <i className="material-icons right">send</i>
          </button>
        </SRTooltip>
      </div>
    </div>
  );
};

export default Home;
