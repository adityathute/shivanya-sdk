import { useState } from "react";

import {
  OtpInput,
  Typography,
  otpInputDocs,
} from "shivanya-ui";

import DemoDocumentation from "../../../components/demo/DemoDocumentation";
import DemoHeader from "../../../components/demo/DemoHeader";
import DemoSection from "../../../components/demo/DemoSection";

import "../../../components/demo/demo.css";

export default function OtpInputDemo() {
  const [basicOtp, setBasicOtp] = useState("");

  const [sixDigitOtp, setSixDigitOtp] = useState("");

  const [controlledOtp, setControlledOtp] =
    useState("1234");

  return (
    <section className="demo">
      <DemoHeader
        title={otpInputDocs.name}
        description={otpInputDocs.description}
      />

      <DemoSection title="Basic">
        <Typography variant="bodySmall" color="secondary">
          Enter a four-digit one-time password.
        </Typography>

        <div className="demo-section-content-fit">
          <OtpInput
            value={basicOtp}
            onChange={setBasicOtp}
          />

          <Typography variant="bodySmall" color="secondary">
            Value: {basicOtp || "Empty"}
          </Typography>
        </div>
      </DemoSection>

      <DemoSection title="Six Digits">
        <Typography variant="bodySmall" color="secondary">
          Use six digits for longer verification codes.
        </Typography>

        <div className="demo-section-content-fit">
          <OtpInput
            length={6}
            value={sixDigitOtp}
            onChange={setSixDigitOtp}
          />

          <Typography variant="bodySmall" color="secondary">
            Value: {sixDigitOtp || "Empty"}
          </Typography>
        </div>
      </DemoSection>

      <DemoSection title="Sizes">
        <Typography variant="bodySmall" color="secondary">
          Available OTP input sizes.
        </Typography>

        <div className="demo-form-stack">
          <OtpInput
            size="sm"
            value="1234"
            onChange={() => {}}
          />

          <OtpInput
            size="md"
            value="1234"
            onChange={() => {}}
          />

          <OtpInput
            size="lg"
            value="1234"
            onChange={() => {}}
          />
        </div>
      </DemoSection>

      <DemoSection title="Controlled">
        <Typography variant="bodySmall" color="secondary">
          Control the OTP value from React state.
        </Typography>

        <div className="demo-section-content-fit">
          <OtpInput
            value={controlledOtp}
            onChange={setControlledOtp}
          />

          <Typography variant="bodySmall" color="secondary">
            Current value:{" "}
            {controlledOtp || "Empty"}
          </Typography>
        </div>
      </DemoSection>

      <DemoSection title="Label">
        <Typography variant="bodySmall" color="secondary">
          Display a label above the OTP inputs.
        </Typography>

        <div className="demo-section-content-fit">
          <OtpInput
            label="Verification code"
            value=""
            onChange={() => {}}
          />
        </div>
      </DemoSection>

      <DemoSection title="Helper Text">
        <Typography variant="bodySmall" color="secondary">
          Provide supporting information below the inputs.
        </Typography>

        <div className="demo-section-content-fit">
          <OtpInput
            label="Verification code"
            helperText="Enter the code sent to your phone."
            value=""
            onChange={() => {}}
          />
        </div>
      </DemoSection>

      <DemoSection title="Error">
        <Typography variant="bodySmall" color="secondary">
          Display an invalid OTP state with an error message.
        </Typography>

        <div className="demo-section-content-fit">
          <OtpInput
            label="Verification code"
            value="1234"
            onChange={() => {}}
            error="The verification code is incorrect."
          />
        </div>
      </DemoSection>

      <DemoSection title="Success">
        <Typography variant="bodySmall" color="secondary">
          Display a successfully validated OTP.
        </Typography>

        <div className="demo-section-content-fit">
          <OtpInput
            label="Verification code"
            value="1234"
            onChange={() => {}}
            success="Verification code accepted."
          />
        </div>
      </DemoSection>

      <DemoSection title="Auto Focus">
        <Typography variant="bodySmall" color="secondary">
          Automatically focus the first OTP field.
        </Typography>

        <div className="demo-section-content-fit">
          <OtpInput
            label="Verification code"
            autoFocus
            value=""
            onChange={() => {}}
          />
        </div>
      </DemoSection>

      <DemoSection title="Paste">
        <Typography variant="bodySmall" color="secondary">
          Paste a complete OTP and the digits are distributed
          across the fields.
        </Typography>

        <div className="demo-section-content-fit">
          <OtpInput
            length={6}
            value=""
            onChange={() => {}}
          />
        </div>
      </DemoSection>

      <DemoSection title="Disabled">
        <Typography variant="bodySmall" color="secondary">
          Prevent interaction with the OTP fields.
        </Typography>

        <div className="demo-section-content-fit">
          <OtpInput
            label="Verification code"
            value="1234"
            onChange={() => {}}
            disabled
          />
        </div>
      </DemoSection>

      <DemoDocumentation
        importCode={otpInputDocs.importCode}
        usageCode={otpInputDocs.usageCode}
        props={otpInputDocs.props}
      />
    </section>
  );
}