import { useState } from "react";

import {
  DateRangePicker,
  Typography,
  dateRangePickerDocs,
} from "shivanya-ui";

import DemoDocumentation from "../../../components/demo/DemoDocumentation";
import DemoHeader from "../../../components/demo/DemoHeader";
import DemoSection from "../../../components/demo/DemoSection";

import "../../../components/demo/demo.css";

export default function DateRangePickerDemo() {
  const [range, setRange] = useState<{
    start: Date | null;
    end: Date | null;
  }>({
    start: null,
    end: null,
  });

  const [clearableRange, setClearableRange] = useState<{
    start: Date | null;
    end: Date | null;
  }>({
    start: new Date(),
    end: new Date(
      new Date().getFullYear(),
      new Date().getMonth(),
      new Date().getDate() + 7,
    ),
  });

  const [initialRange] = useState(() => ({
    start: new Date(),
    end: new Date(
      new Date().getFullYear(),
      new Date().getMonth(),
      new Date().getDate() + 7,
    ),
  }));

  return (
    <section className="demo">
      <DemoHeader
        title={dateRangePickerDocs.name}
        description={dateRangePickerDocs.description}
      />

      <DemoSection title="Basic">
        <Typography variant="bodySmall" color="secondary">
          Select a start and end date.
        </Typography>

        <div className="demo-section-content-fit">
          <DateRangePicker />
        </div>
      </DemoSection>

      <DemoSection title="Sizes">
        <Typography variant="bodySmall" color="secondary">
          Available date range picker sizes.
        </Typography>

        <div className="demo-form-stack">
          <DateRangePicker size="sm" />
          <DateRangePicker size="md" />
          <DateRangePicker size="lg" />
        </div>
      </DemoSection>

      <DemoSection title="Controlled">
        <Typography variant="bodySmall" color="secondary">
          Control the selected range from React state.
        </Typography>

        <div className="demo-section-content-fit">
          <DateRangePicker
            value={range}
            onChange={setRange}
          />

          <Typography variant="bodySmall" color="secondary">
            Start:{" "}
            {range.start
              ? range.start.toLocaleDateString()
              : "None"}
            {" · "}
            End:{" "}
            {range.end
              ? range.end.toLocaleDateString()
              : "None"}
          </Typography>
        </div>
      </DemoSection>

      <DemoSection title="With Initial Range">
        <Typography variant="bodySmall" color="secondary">
          Display the picker with a predefined date range.
        </Typography>

        <div className="demo-section-content-fit">
          <DateRangePicker defaultValue={initialRange} />
        </div>
      </DemoSection>

      <DemoSection title="Date Bounds">
        <Typography variant="bodySmall" color="secondary">
          Restrict the selectable range using minimum and maximum dates.
        </Typography>

        <div className="demo-section-content-fit">
          <DateRangePicker
            minDate={new Date()}
            maxDate={
              new Date(
                new Date().getFullYear(),
                new Date().getMonth(),
                new Date().getDate() + 30,
              )
            }
          />
        </div>
      </DemoSection>

      <DemoSection title="Clearable">
        <Typography variant="bodySmall" color="secondary">
          Clear both dates with a single action.
        </Typography>

        <div className="demo-section-content-fit">
          <DateRangePicker
            value={clearableRange}
            onChange={setClearableRange}
            clearable
          />

          <Typography variant="bodySmall" color="secondary">
            Start:{" "}
            {clearableRange.start
              ? clearableRange.start.toLocaleDateString()
              : "None"}
            {" · "}
            End:{" "}
            {clearableRange.end
              ? clearableRange.end.toLocaleDateString()
              : "None"}
          </Typography>
        </div>
      </DemoSection>

      <DemoSection title="Full Width">
        <Typography variant="bodySmall" color="secondary">
          Stretch the date range picker to the available width.
        </Typography>

        <div className="demo-section-content">
          <DateRangePicker fullWidth />
        </div>
      </DemoSection>

      <DemoSection title="Disabled">
        <Typography variant="bodySmall" color="secondary">
          Prevent interaction with the date range picker.
        </Typography>

        <div className="demo-section-content-fit">
          <DateRangePicker
            defaultValue={initialRange}
            disabled
          />
        </div>
      </DemoSection>

      <DemoSection title="Radius">
        <Typography variant="bodySmall" color="secondary">
          Control the border radius.
        </Typography>

        <div className="demo-form-stack">
          <DateRangePicker radius="sm" />
          <DateRangePicker radius="md" />
          <DateRangePicker radius="lg" />
          <DateRangePicker radius="full" />
        </div>
      </DemoSection>

      <DemoDocumentation
        importCode={dateRangePickerDocs.importCode}
        usageCode={dateRangePickerDocs.usageCode}
        props={dateRangePickerDocs.props}
      />
    </section>
  );
}