import { useState } from "react";

import {
  DatePicker,
  Typography,
  datePickerDocs,
} from "shivanya-ui";

import DemoDocumentation from "../../../components/demo/DemoDocumentation";
import DemoHeader from "../../../components/demo/DemoHeader";
import DemoSection from "../../../components/demo/DemoSection";

import "../../../components/demo/demo.css";

export default function DatePickerDemo() {
  const [date, setDate] = useState<Date | null>(null);

  const [clearableDate, setClearableDate] = useState<Date | null>(
    new Date(),
  );

  const [initialDate] = useState<Date>(() => new Date());

  return (
    <section className="demo">
      <DemoHeader
        title={datePickerDocs.name}
        description={datePickerDocs.description}
      />

      <DemoSection title="Basic">
        <Typography variant="bodySmall" color="secondary">
          A basic date picker.
        </Typography>

        <div className="demo-section-content-fit">
          <DatePicker />
        </div>
      </DemoSection>

      <DemoSection title="Sizes">
        <Typography variant="bodySmall" color="secondary">
          Available date picker sizes.
        </Typography>

        <div className="demo-form-stack">
          <DatePicker size="sm" />
          <DatePicker size="md" />
          <DatePicker size="lg" />
        </div>
      </DemoSection>

      <DemoSection title="Controlled">
        <Typography variant="bodySmall" color="secondary">
          Control the selected date from React state.
        </Typography>

        <div className="demo-section-content-fit">
          <DatePicker
            value={date}
            onChange={setDate}
          />

          <Typography variant="bodySmall" color="secondary">
            Selected date:{" "}
            {date ? date.toLocaleDateString() : "None"}
          </Typography>
        </div>
      </DemoSection>

      <DemoSection title="With Initial Date">
        <Typography variant="bodySmall" color="secondary">
          Display the picker with a predefined date.
        </Typography>

        <div className="demo-section-content-fit">
          <DatePicker value={initialDate} />
        </div>
      </DemoSection>

      <DemoSection title="Clearable">
        <Typography variant="bodySmall" color="secondary">
          Allow the selected date to be cleared.
        </Typography>

        <div className="demo-section-content-fit">
          <DatePicker
            value={clearableDate}
            onChange={setClearableDate}
            clearable
          />

          <Typography variant="bodySmall" color="secondary">
            Selected date:{" "}
            {clearableDate
              ? clearableDate.toLocaleDateString()
              : "None"}
          </Typography>
        </div>
      </DemoSection>

      <DemoSection title="Date Bounds">
        <Typography variant="bodySmall" color="secondary">
          Restrict the selectable date range.
        </Typography>

        <div className="demo-section-content-fit">
          <DatePicker
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

      <DemoSection title="Full Width">
        <Typography variant="bodySmall" color="secondary">
          Stretch the date picker to the available width.
        </Typography>

        <div className="demo-section-content">
          <DatePicker fullWidth />
        </div>
      </DemoSection>

      <DemoSection title="Disabled">
        <Typography variant="bodySmall" color="secondary">
          Prevent interaction with the date picker.
        </Typography>

        <div className="demo-section-content-fit">
          <DatePicker
            value={new Date()}
            disabled
          />
        </div>
      </DemoSection>

      <DemoSection title="Read Only">
        <Typography variant="bodySmall" color="secondary">
          Display a date without allowing changes.
        </Typography>

        <div className="demo-section-content-fit">
          <DatePicker
            value={new Date()}
            readOnly
          />
        </div>
      </DemoSection>

      <DemoSection title="Required">
        <Typography variant="bodySmall" color="secondary">
          Mark the date field as required.
        </Typography>

        <div className="demo-section-content-fit">
          <DatePicker required />
        </div>
      </DemoSection>

      <DemoSection title="Radius">
        <Typography variant="bodySmall" color="secondary">
          Control the border radius.
        </Typography>

        <div className="demo-form-stack">
          <DatePicker radius="sm" />
          <DatePicker radius="md" />
          <DatePicker radius="lg" />
          <DatePicker radius="full" />
        </div>
      </DemoSection>

      <DemoDocumentation
        importCode={datePickerDocs.importCode}
        usageCode={datePickerDocs.usageCode}
        props={datePickerDocs.props}
      />
    </section>
  );
}