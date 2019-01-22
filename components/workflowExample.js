import ExampleContainer from "./exampleContainer";
import withPure from "./hoc/withPure";
import ExampleIntroText from "./exampleIntroText";
import { content } from "../utils/caseContent";
import MacContainer from "./macContainer";
import Sketch from "./illustrations/sketch";
import Flow from "./illustrations/flow";
import FlowContainer from "./flowContainer";

const WorkflowMac = ({ partyTime }) => {
  return (
    <div>
      <MacContainer
        height="200px"
        horizontal="center"
        vertical="center"
        partyTime={partyTime}
      >
        <Sketch mutiStep />
      </MacContainer>
      <FlowContainer partyTime={partyTime}>
        <Flow />
      </FlowContainer>
    </div>
  );
};

const WorkflowExample = withPure(() => (
  <div>
    <ExampleContainer
      identity="workflow"
      CompLeft={WorkflowMac}
      CompRight={ExampleIntroText}
      contentLeft={content}
      contentRight={content}
    />
  </div>
));

export default WorkflowExample;
