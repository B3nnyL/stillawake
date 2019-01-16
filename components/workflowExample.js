import ExampleContainer from "./exampleContainer";
import withPure from "./hoc/withPure";
import ExampleIntroText from "./exampleIntroText";
import { content } from "../utils/caseContent";

const WorkflowExample = withPure(() => (
  <div id="workflow">
    <ExampleContainer
      CompLeft={ExampleIntroText}
      CompRight={ExampleIntroText}
      contentLeft={content}
      contentRight={content}
    />
  </div>
));

export default WorkflowExample;
