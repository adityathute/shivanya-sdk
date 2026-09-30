import DemoDocumentation from "../../../components/demo/DemoDocumentation";
import DemoHeader from "../../../components/demo/DemoHeader";
import DemoSection from "../../../components/demo/DemoSection";

import "../../../components/demo/demo.css";
import "./data-display-demo.css";

import {
  Timeline,
  timelineDocs,
} from "shivanya-ui";

export default function TimelineDemo() {
  return (
    <section className="demo">
      <DemoHeader
        title={timelineDocs.name}
        description={timelineDocs.description}
      />

      <DemoSection title="Basic">
        <div className="data-display-demo-timeline">
          <Timeline>
            <Timeline.Item
              title="Order Created"
              timestamp="10:30 AM"
            >
              Your order has been created successfully.
            </Timeline.Item>

            <Timeline.Item
              title="Payment Confirmed"
              timestamp="10:32 AM"
            >
              Payment has been received and confirmed.
            </Timeline.Item>

            <Timeline.Item
              title="Order Processing"
              timestamp="10:45 AM"
            >
              Your order is now being prepared.
            </Timeline.Item>

            <Timeline.Item
              title="Order Completed"
              timestamp="11:20 AM"
            >
              Your order is ready.
            </Timeline.Item>
          </Timeline>
        </div>
      </DemoSection>

      <DemoSection title="With Icons">
        <div className="data-display-demo-timeline">
          <Timeline variant="primary">
            <Timeline.Item
              title="Account Created"
              timestamp="Today"
              icon="✓"
            >
              Your account was created successfully.
            </Timeline.Item>

            <Timeline.Item
              title="Profile Completed"
              timestamp="Today"
              icon="✓"
            >
              Your profile information has been completed.
            </Timeline.Item>

            <Timeline.Item
              title="Verification"
              timestamp="Pending"
              icon="!"
            >
              Account verification is currently pending.
            </Timeline.Item>
          </Timeline>
        </div>
      </DemoSection>

      <DemoSection title="Variants">
        <div className="data-display-demo-timeline-grid">
          <div className="data-display-demo-timeline-card">
            <span className="data-display-demo-label">
              Primary
            </span>

            <Timeline variant="primary">
              <Timeline.Item
                title="Started"
                timestamp="Today"
              >
                Process started.
              </Timeline.Item>

              <Timeline.Item
                title="In Progress"
                timestamp="Now"
              >
                Process is running.
              </Timeline.Item>
            </Timeline>
          </div>

          <div className="data-display-demo-timeline-card">
            <span className="data-display-demo-label">
              Success
            </span>

            <Timeline variant="success">
              <Timeline.Item
                title="Completed"
                timestamp="Today"
              >
                Task completed successfully.
              </Timeline.Item>

              <Timeline.Item
                title="Verified"
                timestamp="Today"
              >
                Result has been verified.
              </Timeline.Item>
            </Timeline>
          </div>

          <div className="data-display-demo-timeline-card">
            <span className="data-display-demo-label">
              Warning
            </span>

            <Timeline variant="warning">
              <Timeline.Item
                title="Warning"
                timestamp="Today"
              >
                An action requires attention.
              </Timeline.Item>

              <Timeline.Item
                title="Review Required"
                timestamp="Pending"
              >
                Please review the current status.
              </Timeline.Item>
            </Timeline>
          </div>

          <div className="data-display-demo-timeline-card">
            <span className="data-display-demo-label">
              Danger
            </span>

            <Timeline variant="danger">
              <Timeline.Item
                title="Failed"
                timestamp="Today"
              >
                The operation could not be completed.
              </Timeline.Item>

              <Timeline.Item
                title="Retry Required"
                timestamp="Pending"
              >
                Please try the operation again.
              </Timeline.Item>
            </Timeline>
          </div>
        </div>
      </DemoSection>

      <DemoSection title="Outlined Dots">
        <div className="data-display-demo-timeline">
          <Timeline
            variant="primary"
            dotVariant="outlined"
          >
            <Timeline.Item
              title="First Step"
              timestamp="Step 1"
            >
              Initial setup completed.
            </Timeline.Item>

            <Timeline.Item
              title="Second Step"
              timestamp="Step 2"
            >
              Configuration completed.
            </Timeline.Item>

            <Timeline.Item
              title="Final Step"
              timestamp="Step 3"
            >
              Everything is ready.
            </Timeline.Item>
          </Timeline>
        </div>
      </DemoSection>

      <DemoSection title="Line Styles">
        <div className="data-display-demo-timeline-grid">
          <div className="data-display-demo-timeline-card">
            <span className="data-display-demo-label">
              Solid
            </span>

            <Timeline lineStyle="solid">
              <Timeline.Item title="Created">
                Solid connector.
              </Timeline.Item>

              <Timeline.Item title="Updated">
                Next event.
              </Timeline.Item>
            </Timeline>
          </div>

          <div className="data-display-demo-timeline-card">
            <span className="data-display-demo-label">
              Dashed
            </span>

            <Timeline lineStyle="dashed">
              <Timeline.Item title="Created">
                Dashed connector.
              </Timeline.Item>

              <Timeline.Item title="Updated">
                Next event.
              </Timeline.Item>
            </Timeline>
          </div>

          <div className="data-display-demo-timeline-card">
            <span className="data-display-demo-label">
              Dotted
            </span>

            <Timeline lineStyle="dotted">
              <Timeline.Item title="Created">
                Dotted connector.
              </Timeline.Item>

              <Timeline.Item title="Updated">
                Next event.
              </Timeline.Item>
            </Timeline>
          </div>
        </div>
      </DemoSection>

      <DemoSection title="Sizes">
        <div className="data-display-demo-timeline-grid">
          <div className="data-display-demo-timeline-card">
            <span className="data-display-demo-label">
              Small
            </span>

            <Timeline size="sm">
              <Timeline.Item
                title="Small Timeline"
                timestamp="10:00"
              >
                Compact timeline item.
              </Timeline.Item>

              <Timeline.Item title="Completed">
                Finished.
              </Timeline.Item>
            </Timeline>
          </div>

          <div className="data-display-demo-timeline-card">
            <span className="data-display-demo-label">
              Medium
            </span>

            <Timeline size="md">
              <Timeline.Item
                title="Medium Timeline"
                timestamp="10:00"
              >
                Standard timeline item.
              </Timeline.Item>

              <Timeline.Item title="Completed">
                Finished.
              </Timeline.Item>
            </Timeline>
          </div>

          <div className="data-display-demo-timeline-card">
            <span className="data-display-demo-label">
              Large
            </span>

            <Timeline size="lg">
              <Timeline.Item
                title="Large Timeline"
                timestamp="10:00"
              >
                Larger timeline marker.
              </Timeline.Item>

              <Timeline.Item title="Completed">
                Finished.
              </Timeline.Item>
            </Timeline>
          </div>
        </div>
      </DemoSection>

      <DemoSection title="Horizontal">
        <div className="data-display-demo-timeline-horizontal">
          <Timeline orientation="horizontal">
            <Timeline.Item
              title="Created"
              timestamp="10:00 AM"
              icon="1"
            >
              Order created.
            </Timeline.Item>

            <Timeline.Item
              title="Processing"
              timestamp="10:20 AM"
              icon="2"
            >
              Order processing.
            </Timeline.Item>

            <Timeline.Item
              title="Shipped"
              timestamp="12:30 PM"
              icon="3"
            >
              Order shipped.
            </Timeline.Item>

            <Timeline.Item
              title="Delivered"
              timestamp="Tomorrow"
              icon="4"
            >
              Delivery expected.
            </Timeline.Item>
          </Timeline>
        </div>
      </DemoSection>

      <DemoSection title="Alignment">
        <div className="data-display-demo-timeline-grid">
          <div className="data-display-demo-timeline-card">
            <span className="data-display-demo-label">
              Start
            </span>

            <Timeline align="start">
              <Timeline.Item title="Start">
                Left aligned content.
              </Timeline.Item>

              <Timeline.Item title="Next">
                Another event.
              </Timeline.Item>
            </Timeline>
          </div>

          <div className="data-display-demo-timeline-card">
            <span className="data-display-demo-label">
              Center
            </span>

            <Timeline align="center">
              <Timeline.Item title="Center">
                Center aligned content.
              </Timeline.Item>

              <Timeline.Item title="Next">
                Another event.
              </Timeline.Item>
            </Timeline>
          </div>

          <div className="data-display-demo-timeline-card">
            <span className="data-display-demo-label">
              End
            </span>

            <Timeline align="end">
              <Timeline.Item title="End">
                Right aligned content.
              </Timeline.Item>

              <Timeline.Item title="Next">
                Another event.
              </Timeline.Item>
            </Timeline>
          </div>
        </div>
      </DemoSection>

      <DemoSection title="Avatar and Badge">
        <div className="data-display-demo-timeline">
          <Timeline variant="info">
            <Timeline.Item
              title="John joined the project"
              timestamp="5 minutes ago"
              avatar="J"
              badge="New"
            >
              John has joined the project team.
            </Timeline.Item>

            <Timeline.Item
              title="Project updated"
              timestamp="20 minutes ago"
              avatar="A"
              badge="Updated"
            >
              Project information was updated.
            </Timeline.Item>

            <Timeline.Item
              title="Task completed"
              timestamp="1 hour ago"
              avatar="S"
              badge="Done"
            >
              A project task has been completed.
            </Timeline.Item>
          </Timeline>
        </div>
      </DemoSection>

      <DemoSection title="Disabled Items">
        <div className="data-display-demo-timeline">
          <Timeline>
            <Timeline.Item
              title="Completed"
              timestamp="Today"
            >
              This item is active.
            </Timeline.Item>

            <Timeline.Item
              title="Disabled Step"
              timestamp="Unavailable"
              disabled
            >
              This timeline item is disabled.
            </Timeline.Item>

            <Timeline.Item
              title="Next Step"
              timestamp="Later"
            >
              This item is still available.
            </Timeline.Item>
          </Timeline>
        </div>
      </DemoSection>

      <DemoSection title="Loading">
        <div className="data-display-demo-timeline">
          <Timeline state="loading">
            <Timeline.Item
              title="Loading Data"
              timestamp="Please wait"
            >
              Timeline information is being loaded.
            </Timeline.Item>

            <Timeline.Item
              title="Processing"
            >
              Please wait while the operation completes.
            </Timeline.Item>
          </Timeline>
        </div>
      </DemoSection>

      <DemoSection title="Disabled Timeline">
        <div className="data-display-demo-timeline">
          <Timeline state="disabled">
            <Timeline.Item
              title="First Event"
              timestamp="Today"
            >
              Timeline is disabled.
            </Timeline.Item>

            <Timeline.Item
              title="Second Event"
              timestamp="Tomorrow"
            >
              This timeline is not currently active.
            </Timeline.Item>
          </Timeline>
        </div>
      </DemoSection>

      <DemoSection title="Custom Content">
        <div className="data-display-demo-timeline">
          <Timeline variant="success">
            <Timeline.Item
              title="Deployment Started"
              timestamp="09:00 AM"
              icon="✓"
            >
              <div className="data-display-demo-timeline-custom">
                <strong>Production deployment</strong>
                <span>
                  Deployment process has started.
                </span>
              </div>
            </Timeline.Item>

            <Timeline.Item
              title="Build Completed"
              timestamp="09:04 AM"
              icon="✓"
            >
              <div className="data-display-demo-timeline-custom">
                <strong>Build successful</strong>
                <span>
                  All project files compiled successfully.
                </span>
              </div>
            </Timeline.Item>

            <Timeline.Item
              title="Deployment Complete"
              timestamp="09:08 AM"
              icon="✓"
            >
              <div className="data-display-demo-timeline-custom">
                <strong>Application is live</strong>
                <span>
                  The latest version is now available.
                </span>
              </div>
            </Timeline.Item>
          </Timeline>
        </div>
      </DemoSection>

      <DemoDocumentation
        importCode={timelineDocs.importCode}
        usageCode={timelineDocs.usageCode}
        props={timelineDocs.props}
      />
    </section>
  );
}