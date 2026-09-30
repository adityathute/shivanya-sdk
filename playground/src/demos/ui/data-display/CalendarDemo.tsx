import { useState } from "react";

import DemoDocumentation from "../../../components/demo/DemoDocumentation";
import DemoHeader from "../../../components/demo/DemoHeader";
import DemoSection from "../../../components/demo/DemoSection";

import "../../../components/demo/demo.css";
import "./data-display-demo.css";

import {
  Calendar,
  Typography,
  calendarDocs,
} from "shivanya-ui";

export default function CalendarDemo() {
  const [singleDate, setSingleDate] =
    useState<Date | null>(null);

  const [range, setRange] = useState<{
    start: Date | null;
    end: Date | null;
  } | null>(null);

  const today = new Date();

  const minDate = new Date(
    today.getFullYear(),
    today.getMonth(),
    today.getDate() - 5,
  );

  const maxDate = new Date(
    today.getFullYear(),
    today.getMonth(),
    today.getDate() + 25,
  );

  const formatDate = (date: Date | null) => {
    if (!date) {
      return "No date selected";
    }

    return date.toLocaleDateString("en-IN", {
      day: "2-digit",
      month: "short",
      year: "numeric",
    });
  };

  const handleSingleChange = (
    value: Date | { start: Date | null; end: Date | null } | null,
  ) => {
    if (value instanceof Date || value === null) {
      setSingleDate(value);
    }
  };

  const handleRangeChange = (
    value: Date | { start: Date | null; end: Date | null } | null,
  ) => {
    if (
      value === null ||
      value instanceof Date
    ) {
      setRange(null);
      return;
    }

    setRange(value);
  };

  return (
    <section className="demo">
      <DemoHeader
        title={calendarDocs.name}
        description={calendarDocs.description}
      />

      <DemoSection title="Basic">
        <div className="data-display-demo-stack">
          <Typography
            variant="bodySmall"
            color="secondary"
          >
            Select a single date.
          </Typography>

          <div className="data-display-demo-calendar">
            <Calendar
              value={singleDate}
              onChange={handleSingleChange}
            />

            <Typography
              variant="bodySmall"
              color="secondary"
            >
              Selected: {formatDate(singleDate)}
            </Typography>
          </div>
        </div>
      </DemoSection>

      <DemoSection title="Range Selection">
        <div className="data-display-demo-stack">
          <Typography
            variant="bodySmall"
            color="secondary"
          >
            Select a start date and an end date.
          </Typography>

          <div className="data-display-demo-calendar">
            <Calendar
              mode="range"
              value={range}
              onChange={handleRangeChange}
            />

            <Typography
              variant="bodySmall"
              color="secondary"
            >
              Start:{" "}
              {formatDate(range?.start ?? null)}
              {" · "}
              End:{" "}
              {formatDate(range?.end ?? null)}
            </Typography>
          </div>
        </div>
      </DemoSection>

      <DemoSection title="Sizes">
        <div className="data-display-demo-stack">
          <Typography
            variant="bodySmall"
            color="secondary"
          >
            Available calendar sizes.
          </Typography>

          <div className="data-display-demo-calendar-grid">
            <div className="data-display-demo-calendar-item">
              <Calendar size="sm" />
              <span>Small</span>
            </div>

            <div className="data-display-demo-calendar-item">
              <Calendar size="md" />
              <span>Medium</span>
            </div>

            <div className="data-display-demo-calendar-item">
              <Calendar size="lg" />
              <span>Large</span>
            </div>
          </div>
        </div>
      </DemoSection>

      <DemoSection title="First Day of Week">
        <div className="data-display-demo-stack">
          <Typography
            variant="bodySmall"
            color="secondary"
          >
            Change the first day displayed in the calendar.
          </Typography>

          <div className="data-display-demo-calendar-grid">
            <div className="data-display-demo-calendar-item">
              <Calendar firstDayOfWeek={0} />
              <span>Sunday</span>
            </div>

            <div className="data-display-demo-calendar-item">
              <Calendar firstDayOfWeek={1} />
              <span>Monday</span>
            </div>
          </div>
        </div>
      </DemoSection>

      <DemoSection title="Outside Days">
        <div className="data-display-demo-stack">
          <Typography
            variant="bodySmall"
            color="secondary"
          >
            Show or hide days belonging to adjacent months.
          </Typography>

          <div className="data-display-demo-calendar-grid">
            <div className="data-display-demo-calendar-item">
              <Calendar showOutsideDays />
              <span>Visible</span>
            </div>

            <div className="data-display-demo-calendar-item">
              <Calendar showOutsideDays={false} />
              <span>Hidden</span>
            </div>
          </div>
        </div>
      </DemoSection>

      <DemoSection title="Date Bounds">
        <div className="data-display-demo-stack">
          <Typography
            variant="bodySmall"
            color="secondary"
          >
            Restrict selectable dates using minimum and maximum
            boundaries.
          </Typography>

          <div className="data-display-demo-calendar">
            <Calendar
              minDate={minDate}
              maxDate={maxDate}
            />

            <Typography
              variant="bodySmall"
              color="secondary"
            >
              From {formatDate(minDate)} to{" "}
              {formatDate(maxDate)}
            </Typography>
          </div>
        </div>
      </DemoSection>

      <DemoSection title="Month and Year Views">
        <div className="data-display-demo-stack">
          <Typography
            variant="bodySmall"
            color="secondary"
          >
            Click the calendar title to switch between day,
            month, and year views.
          </Typography>

          <div className="data-display-demo-calendar">
            <Calendar />
          </div>
        </div>
      </DemoSection>

      <DemoSection title="Disabled">
        <div className="data-display-demo-stack">
          <Typography
            variant="bodySmall"
            color="secondary"
          >
            Prevent all calendar interaction.
          </Typography>

          <div className="data-display-demo-calendar">
            <Calendar disabled />
          </div>
        </div>
      </DemoSection>

      <DemoSection title="Read Only">
        <div className="data-display-demo-stack">
          <Typography
            variant="bodySmall"
            color="secondary"
          >
            Display the calendar without allowing selection changes.
          </Typography>

          <div className="data-display-demo-calendar">
            <Calendar
              readOnly
              defaultValue={today}
            />
          </div>
        </div>
      </DemoSection>

      <DemoSection title="Full Width">
        <div className="data-display-demo-stack">
          <Typography
            variant="bodySmall"
            color="secondary"
          >
            The calendar can expand to fill its available container.
          </Typography>

          <div className="data-display-demo-calendar-full">
            <Calendar fullWidth />
          </div>
        </div>
      </DemoSection>

      <DemoDocumentation
        importCode={calendarDocs.importCode}
        usageCode={calendarDocs.usageCode}
        props={calendarDocs.props}
      />
    </section>
  );
}