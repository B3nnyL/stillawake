import ExampleContainer from "./exampleContainer";
import withPure from "./hoc/withPure";
import ExampleIntroText from "./exampleIntroText";
import { document as content } from "../utils/caseContent";
import MacContainer from "./macContainer";
import Sketch from "./illustrations/sketch";
import Docs from "./illustrations/docs";
import IconGroupContainer from "./iconGroupContainer";
import Icons from "./illustrations/icons";

const DocumentMac = withPure(({ partyTime }) => (
  <div>
    <MacContainer
      height="200px"
      horizontal="center"
      vertical="center"
      partyTime={partyTime}
    >
      <div className="grid">
        <Docs />
        <Sketch />
      </div>
    </MacContainer>
    <IconGroupContainer partyTime={partyTime}>
      <Icons />
    </IconGroupContainer>

    <style jsx>
      {`
        .grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          grid-gap: 20px;
          text-align: center;
          margin: 20px auto;
        }
      `}
    </style>
  </div>
));

const DocumentExample = withPure(() => (
  <div>
    <ExampleContainer
      idenity="Document"
      CompRight={ExampleIntroText}
      CompLeft={DocumentMac}
      contentLeft={content}
      contentRight={content}
    />
  </div>
));

export default DocumentExample;
