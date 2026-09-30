import DemoDocumentation from "../../../components/demo/DemoDocumentation";
import DemoHeader from "../../../components/demo/DemoHeader";
import DemoSection from "../../../components/demo/DemoSection";

import "../../../components/demo/demo.css";
import "./data-display-demo.css";

import {
  AnimatedNumber,
  Statistic,
  Typography,
  statisticDocs,
} from "shivanya-ui";

export default function StatisticDemo() {
  return (
    <section className="demo">
      <DemoHeader
        title={statisticDocs.name}
        description={statisticDocs.description}
      />

      <DemoSection title="Basic">
        <div className="data-display-demo-statistic-grid">
          <Statistic
            label="Revenue"
            value="$24,500"
          />

          <Statistic
            label="Users"
            value="12,480"
          />

          <Statistic
            label="Orders"
            value="842"
          />
        </div>
      </DemoSection>

      <DemoSection title="Prefix and Suffix">
        <div className="data-display-demo-statistic-grid">
          <Statistic
            label="Revenue"
            value="24,500"
            prefix="$"
          />

          <Statistic
            label="Users"
            value="12,480"
            suffix="users"
          />

          <Statistic
            label="Growth"
            value="18.5"
            suffix="%"
          />
        </div>
      </DemoSection>

      <DemoSection title="Trends">
        <div className="data-display-demo-statistic-grid">
          <Statistic
            label="Revenue"
            value="$24,500"
            trend="up"
            trendValue="12%"
            variant="success"
          />

          <Statistic
            label="Bounce Rate"
            value="38%"
            trend="down"
            trendValue="4%"
            variant="danger"
          />

          <Statistic
            label="Sessions"
            value="8,240"
            trend="neutral"
            trendValue="0.2%"
          />
        </div>
      </DemoSection>

      <DemoSection title="Variants">
        <div className="data-display-demo-statistic-grid">
          <Statistic
            label="Default"
            value="1,240"
          />

          <Statistic
            label="Primary"
            value="2,480"
            variant="primary"
          />

          <Statistic
            label="Success"
            value="3,620"
            variant="success"
          />

          <Statistic
            label="Warning"
            value="842"
            variant="warning"
          />

          <Statistic
            label="Danger"
            value="128"
            variant="danger"
          />

          <Statistic
            label="Info"
            value="5,240"
            variant="info"
          />
        </div>
      </DemoSection>

      <DemoSection title="Sizes">
        <div className="data-display-demo-statistic-grid">
          <Statistic
            size="sm"
            label="Small"
            value="120"
          />

          <Statistic
            size="md"
            label="Medium"
            value="120"
          />

          <Statistic
            size="lg"
            label="Large"
            value="120"
          />
        </div>
      </DemoSection>

      <DemoSection title="Icons">
        <div className="data-display-demo-statistic-grid">
          <Statistic
            icon="₹"
            label="Revenue"
            value="₹24.5L"
            variant="success"
          />

          <Statistic
            icon="◉"
            label="Users"
            value="12,480"
            variant="primary"
          />

          <Statistic
            icon="◇"
            label="Orders"
            value="842"
            variant="info"
          />
        </div>
      </DemoSection>

      <DemoSection title="Description">
        <div className="data-display-demo-statistic-grid">
          <Statistic
            label="Revenue"
            value="$24,500"
            trend="up"
            trendValue="12%"
            description="Compared with the previous month."
            variant="success"
          />

          <Statistic
            label="Active Users"
            value="8,240"
            trend="up"
            trendValue="6.8%"
            description="Users active during the last 30 days."
          />
        </div>
      </DemoSection>

      <DemoSection title="Animated Value">
        <div className="data-display-demo-statistic-grid">
          <Statistic
            label="Revenue"
            value={
              <AnimatedNumber
                value={24500}
                format={(value) =>
                  `$${value.toLocaleString()}`
                }
              />
            }
            description="Animated metric value."
          />

          <Statistic
            label="Users"
            value={
              <AnimatedNumber
                value={12480}
                format={(value) =>
                  value.toLocaleString()
                }
              />
            }
            description="Animated user count."
          />

          <Statistic
            label="Growth"
            value={
              <AnimatedNumber
                value={78.5}
                decimalPlaces={1}
                format={(value) =>
                  `${value}%`
                }
              />
            }
            variant="success"
          />
        </div>
      </DemoSection>

      <DemoSection title="Loading">
        <div className="data-display-demo-statistic-grid">
          <Statistic
            label="Revenue"
            loading
          />

          <Statistic
            label="Users"
            loading
          />

          <Statistic
            label="Orders"
            loading
          />
        </div>
      </DemoSection>

      <DemoSection title="Full Width">
        <div className="data-display-demo-stack">
          <Statistic
            icon="₹"
            label="Total Revenue"
            value="₹24,50,000"
            trend="up"
            trendValue="18.4%"
            description="Total revenue generated this financial year."
            variant="success"
          />
        </div>
      </DemoSection>

      <DemoSection title="Combined">
        <div className="data-display-demo-statistic-grid">
          <Statistic
            icon="₹"
            size="lg"
            label="Monthly Revenue"
            value={
              <AnimatedNumber
                value={245000}
                format={(value) =>
                  `₹${value.toLocaleString("en-IN")}`
                }
              />
            }
            trend="up"
            trendValue="12.8%"
            description="Compared with the previous month."
            variant="success"
          />

          <Statistic
            icon="◉"
            size="lg"
            label="Active Users"
            value="12,480"
            trend="up"
            trendValue="8.4%"
            description="Active users during the last 30 days."
            variant="primary"
          />
        </div>
      </DemoSection>

      <DemoSection title="Metric Content">
        <div className="data-display-demo-stack">
          <Typography
            variant="bodySmall"
            color="secondary"
          >
            Statistic accepts React content as its value,
            allowing animated numbers and custom metric
            presentations.
          </Typography>

          <Statistic
            label="Conversion Rate"
            value="4.82%"
            trend="up"
            trendValue="0.6%"
            variant="info"
          />
        </div>
      </DemoSection>

      <DemoDocumentation
        importCode={statisticDocs.importCode}
        usageCode={statisticDocs.usageCode}
        props={statisticDocs.props}
      />
    </section>
  );
}