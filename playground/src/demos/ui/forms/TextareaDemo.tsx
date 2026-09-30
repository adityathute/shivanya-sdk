import { useState } from "react";

import {
  Textarea,
  Typography,
  textareaDocs,
} from "shivanya-ui";

import DemoDocumentation from "../../../components/demo/DemoDocumentation";
import DemoHeader from "../../../components/demo/DemoHeader";
import DemoSection from "../../../components/demo/DemoSection";

import "../../../components/demo/demo.css";

export default function TextareaDemo() {
  const [message, setMessage] = useState("");

  return (
    <section className="demo">
      <DemoHeader
        title={textareaDocs.name}
        description={textareaDocs.description}
      />

      <DemoSection title="Basic">
        <Typography
          variant="bodySmall"
          color="secondary"
        >
          A basic multiline text control.
        </Typography>

        <div className="demo-section-content-fit">
          <Textarea
            label="Message"
            placeholder="Write your message..."
          />
        </div>
      </DemoSection>

      <DemoSection title="Sizes">
        <Typography
          variant="bodySmall"
          color="secondary"
        >
          Available textarea sizes.
        </Typography>

        <div className="demo-form-stack">
          <Textarea
            size="sm"
            label="Small"
            placeholder="Small textarea..."
          />

          <Textarea
            size="md"
            label="Medium"
            placeholder="Medium textarea..."
          />

          <Textarea
            size="lg"
            label="Large"
            placeholder="Large textarea..."
          />
        </div>
      </DemoSection>

      <DemoSection title="Placeholder">
        <Typography
          variant="bodySmall"
          color="secondary"
        >
          Display placeholder content before entering text.
        </Typography>

        <div className="demo-section-content-fit">
          <Textarea
            label="Description"
            placeholder="Enter a description..."
          />
        </div>
      </DemoSection>

      <DemoSection title="Controlled">
        <Typography
          variant="bodySmall"
          color="secondary"
        >
          Control the textarea value with React state.
        </Typography>

        <div className="demo-section-content-fit">
          <Textarea
            label="Message"
            value={message}
            onChange={(event) =>
              setMessage(event.target.value)
            }
            placeholder="Type something..."
          />

          <Typography
            variant="bodySmall"
            color="secondary"
          >
            Current value:{" "}
            {message || "Empty"}
          </Typography>
        </div>
      </DemoSection>

      <DemoSection title="Character Count">
        <Typography
          variant="bodySmall"
          color="secondary"
        >
          Display the current number of characters.
        </Typography>

        <div className="demo-section-content-fit">
          <Textarea
            label="Bio"
            placeholder="Tell us about yourself..."
            showCount
            maxLength={200}
          />
        </div>
      </DemoSection>

      <DemoSection title="Helper Text">
        <Typography
          variant="bodySmall"
          color="secondary"
        >
          Display supporting information below the textarea.
        </Typography>

        <div className="demo-section-content-fit">
          <Textarea
            label="Message"
            helperText="Keep your message clear and concise."
            placeholder="Write your message..."
          />
        </div>
      </DemoSection>

      <DemoSection title="Error">
        <Typography
          variant="bodySmall"
          color="secondary"
        >
          Display validation feedback.
        </Typography>

        <div className="demo-section-content-fit">
          <Textarea
            label="Message"
            error="Please enter a message."
            placeholder="Write your message..."
          />
        </div>
      </DemoSection>

      <DemoSection title="Success">
        <Typography
          variant="bodySmall"
          color="secondary"
        >
          Display a successful validation state.
        </Typography>

        <div className="demo-section-content-fit">
          <Textarea
            label="Message"
            variant="success"
            defaultValue="Your message looks good."
          />
        </div>
      </DemoSection>

      <DemoSection title="Disabled">
        <Typography
          variant="bodySmall"
          color="secondary"
        >
          Prevent interaction with the textarea.
        </Typography>

        <div className="demo-section-content-fit">
          <Textarea
            label="Message"
            defaultValue="This textarea is disabled."
            disabled
          />
        </div>
      </DemoSection>

      <DemoSection title="Read Only">
        <Typography
          variant="bodySmall"
          color="secondary"
        >
          Allow the content to be read without editing.
        </Typography>

        <div className="demo-section-content-fit">
          <Textarea
            label="Message"
            defaultValue="This content cannot be edited."
            readOnly
          />
        </div>
      </DemoSection>

      <DemoSection title="Required">
        <Typography
          variant="bodySmall"
          color="secondary"
        >
          Mark the textarea as required.
        </Typography>

        <div className="demo-section-content-fit">
          <Textarea
            label="Message"
            placeholder="Enter your message..."
            required
          />
        </div>
      </DemoSection>

      <DemoSection title="Full Width">
        <Typography
          variant="bodySmall"
          color="secondary"
        >
          Expand the textarea to its available width.
        </Typography>

        <div className="demo-section-content">
          <Textarea
            label="Message"
            placeholder="Write your message..."
            fullWidth
          />
        </div>
      </DemoSection>

      <DemoSection title="Native Props">
        <Typography
          variant="bodySmall"
          color="secondary"
        >
          Native textarea properties are supported.
        </Typography>

        <div className="demo-section-content-fit">
          <Textarea
            name="message"
            rows={5}
            placeholder="Enter your message..."
          />
        </div>
      </DemoSection>

      <DemoDocumentation
        importCode={textareaDocs.importCode}
        usageCode={textareaDocs.usageCode}
        props={textareaDocs.props}
      />
    </section>
  );
}