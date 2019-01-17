import ExampleContainer from "./exampleContainer";
import withPure from "./hoc/withPure";
import ExampleIntroText from "./exampleIntroText";
import { collaborate as content } from "../utils/caseContent";
import ScreenContainer from "./screenContainer";

const CollaborateMac = withPure(({ partyTime }) => (
  <ScreenContainer partyTime={partyTime}>
    <div className="collaborate" />
    <style jsx>
      {`
        .collaborate {
          width: 390px;
          height: 176px;
          background: url("https://assets.zeit.co/image/upload/front/home/full-workflow.png");
          background-size: cover;
          margin: 20px auto;
        }
        @media screen and (max-width: 699px) {
          .collaborate {
            width: 90vw;
          }
        }
      `}
    </style>
  </ScreenContainer>
));

const CollaborateExample = withPure(() => (
  <div>
    <ExampleContainer
      idenity="Collaborate"
      CompLeft={ExampleIntroText}
      CompRight={CollaborateMac}
      contentLeft={content}
      contentRight={content}
      order
    />
  </div>
));

export default CollaborateExample;
