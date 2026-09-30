import {
  Input,
  inputDocs,
} from "shivanya-ui";

import DemoDocumentation from "../../../components/demo/DemoDocumentation";

import DemoHeader from "../../../components/demo/DemoHeader";

import DemoSection from "../../../components/demo/DemoSection";

import "../../../components/demo/demo.css";

export default function InputDemo() {
  return (
    <section className="demo">
      <DemoHeader
        title={inputDocs.name}
        description={inputDocs.description}
      />

      <DemoSection title="Examples">
        <div className="demo-form-stack">
        <Input
          label="Name"
          placeholder="Enter your name"
        />

        <Input
          label="Email"
          type="email"
          placeholder="Enter your email"
          helperText="We'll never share your email."
        />

        <Input
          label="Username"
          placeholder="Enter username"
          success="Username is available."
        />

        <Input
          label="Email"
          placeholder="Enter email"
          error="Please enter a valid email."
        />

        <Input
          label="Password"
          type="password"
          placeholder="Enter password"
          warning="Your password is weak."
        />

        <Input
          label="Search"
          placeholder="Search..."
          rounded
        />

        <Input
          prefix="$"
          placeholder="0.00"
        />

        <Input
          suffix="kg"
          placeholder="Weight"
        />

        <Input
          label="Description"
          placeholder="Enter description"
          maxLength={100}
          showCounter
          defaultValue="Hello Shivanya"
        />

        <Input
          label="Disabled"
          placeholder="Disabled input"
          disabled
        />

        <Input
          label="Loading"
          placeholder="Loading..."
          loading
        />

        <Input
          label="Full Width"
          placeholder="Full width input"
          fullWidth
        />

        <Input
          label="Read Only"
          defaultValue="Read only value"
          readOnly
        />

        <Input
          label="Required"
          placeholder="Required field"
          required
        />

        <Input
          startAddon="https://"
          placeholder="example.com"
        />

        <Input
          endAddon=".com"
          placeholder="example"
        />
      </div>
      </DemoSection>

      <DemoSection title="Sizes">
        <div></div>
      </DemoSection>

      <DemoDocumentation
        importCode={inputDocs.importCode}
        usageCode={inputDocs.usageCode}
        props={inputDocs.props}
      />
    </section>
  );
}
