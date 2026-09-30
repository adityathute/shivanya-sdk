import {
  Skeleton,
  skeletonDocs,
} from "shivanya-ui";

import DemoDocumentation from "../../../components/demo/DemoDocumentation";
import DemoHeader from "../../../components/demo/DemoHeader";
import DemoSection from "../../../components/demo/DemoSection";

import "../../../components/demo/demo.css";

export default function SkeletonDemo() {
  return (
    <section className="demo">
      <DemoHeader
        title={skeletonDocs.name}
        description={skeletonDocs.description}
      />

      <DemoSection title="Variants">
        <div className="demo-section-content">
          <Skeleton variant="text" />
          <Skeleton variant="rectangular" />
          <Skeleton variant="rounded" />
          <Skeleton variant="circular" />
        </div>
      </DemoSection>

      <DemoSection title="Animations">
        <div className="demo-section-content">
          <Skeleton
            animation="none"
            width="70%"
          />

          <Skeleton
            animation="pulse"
            width="70%"
          />

          <Skeleton
            animation="wave"
            width="70%"
          />
        </div>
      </DemoSection>

      <DemoSection title="Multiple Items">
        <div className="demo-section-content">
          <Skeleton
            count={3}
            width="70%"
          />
        </div>
      </DemoSection>

      <DemoSection title="Loading Complete">
        <div className="demo-section-content">
          <Skeleton loading={false}>
            Content is ready.
          </Skeleton>
        </div>
      </DemoSection>

      <DemoDocumentation
        importCode={skeletonDocs.importCode}
        usageCode={skeletonDocs.usageCode}
        props={skeletonDocs.props}
      />
    </section>
  );
}