import ExampleContainer from "./exampleContainer";
import withPure from "./hoc/withPure";
import ExampleIntroText from "./exampleIntroText";
import { test as content } from "../utils/caseContent";
import MacContainer from "./macContainer";
import MobileContainer from "./mobileContainer";
import Sketch from "./illustrations/sketch";

const TestMac = withPure(({ partyTime }) => (
  <div className="test-illustrations">
    <MacContainer
      height="200px"
      horizontal="center"
      vertical="center"
      partyTime={partyTime}
    >
      <Sketch />
    </MacContainer>

    <MobileContainer
      height="200px"
      horizontal="center"
      vertical="center"
      partyTime={partyTime}
    >
      <Sketch />
    </MobileContainer>
    <style jsx>
      {`
        .test-illustrations {
          position: relative;
          margin: 20px auto;
        }
      `}
    </style>
  </div>
));

const TestExample = withPure(() => (
  <div>
    <ExampleContainer
      idenity="test"
      CompLeft={ExampleIntroText}
      CompRight={TestMac}
      contentLeft={content}
      contentRight={content}
      order={true}
    />
  </div>
));

export default TestExample;
