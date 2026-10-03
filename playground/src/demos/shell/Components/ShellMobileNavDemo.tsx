"use client";

import { useState } from "react";

import DemoDocumentation from "../../../components/demo/DemoDocumentation";
import DemoHeader from "../../../components/demo/DemoHeader";
import DemoSection from "../../../components/demo/DemoSection";
import "../../../components/demo/demo.css";
import "../shell-demo.css";

import {
  AppShell,
  ShellHeader,
  ShellMobileNav,
} from "shivanya-shell";

import { Button } from "shivanya-ui";

import {
  MenuIcon,
  CloseIcon,
} from "shivanya-ui/icons";

import {
  branding,
  navigation,
} from "../_demo-utils";

export default function ShellMobileNavDemo() {
  const [controlledOpen, setControlledOpen] = useState(false);
  const [wideOpen, setWideOpen] = useState(false);
  const [customOpen, setCustomOpen] = useState(false);

  return (
    <section className="demo">
      <DemoHeader
        title="ShellMobileNav"
        description="Responsive mobile navigation drawer with animated opening, closing, overlay blur, and reusable ShellSidebar navigation."
      />

      <DemoSection title="Interactive">
        <div className="shell-demo-preview shell-demo-mobile-nav-preview">
          <AppShell defaultMobileOpen>
            <ShellHeader
              branding={branding}
              end={
                <Button
                  size="sm"
                  variant="outline"
                  startIcon={<MenuIcon />}
                >
                  Action
                </Button>
              }
            />

            <ShellMobileNav
              navigation={navigation}
              pathname="/projects"
              branding={branding}
            />

            <div className="shell-demo-content">
              <div className="shell-demo-sidebar-toolbar">
                <div>
                  <strong>Mobile Navigation</strong>

                  <span className="shell-demo-muted">
                    Drawer navigation with animated open and close states.
                  </span>
                </div>
              </div>

              <div className="shell-demo-card">
                <div className="shell-demo-label">
                  Interactive Drawer
                </div>

                <p className="shell-demo-muted">
                  Open the mobile menu from the ShellHeader to view
                  the animated navigation drawer.
                </p>
              </div>
            </div>
          </AppShell>
        </div>
      </DemoSection>

      <DemoSection title="Controlled">
        <div className="shell-demo-card">
          <div className="shell-demo-sidebar-toolbar">
            <div>
              <strong>
                {controlledOpen
                  ? "Navigation Open"
                  : "Navigation Closed"}
              </strong>

              <span className="shell-demo-muted">
                Control the drawer using open and onClose.
              </span>
            </div>

            <Button
              size="sm"
              variant="outline"
              startIcon={
                controlledOpen ? (
                  <CloseIcon />
                ) : (
                  <MenuIcon />
                )
              }
              onClick={() =>
                setControlledOpen((value) => !value)
              }
            >
              {controlledOpen ? "Close" : "Open"}
            </Button>
          </div>

          <ShellMobileNav
            navigation={navigation}
            pathname="/projects"
            branding={branding}
            open={controlledOpen}
            onClose={() => setControlledOpen(false)}
          />
        </div>
      </DemoSection>

      <DemoSection title="Custom Size">
        <div className="shell-demo-card">
          <div className="shell-demo-sidebar-toolbar">
            <div>
              <strong>340px Drawer</strong>

              <span className="shell-demo-muted">
                Configure the mobile drawer width.
              </span>
            </div>

            <Button
              size="sm"
              variant="outline"
              startIcon={
                wideOpen ? (
                  <CloseIcon />
                ) : (
                  <MenuIcon />
                )
              }
              onClick={() =>
                setWideOpen((value) => !value)
              }
            >
              {wideOpen ? "Close" : "Open"}
            </Button>
          </div>

          <ShellMobileNav
            navigation={navigation}
            pathname="/projects"
            branding={branding}
            size={340}
            open={wideOpen}
            onClose={() => setWideOpen(false)}
          />
        </div>
      </DemoSection>

      <DemoSection title="Custom Class">
        <div className="shell-demo-card">
          <div className="shell-demo-sidebar-toolbar">
            <div>
              <strong>
                {customOpen
                  ? "Custom Navigation Open"
                  : "Custom Navigation Closed"}
              </strong>

              <span className="shell-demo-muted">
                Apply custom styling to the mobile navigation.
              </span>
            </div>

            <Button
              size="sm"
              variant="outline"
              startIcon={
                customOpen ? (
                  <CloseIcon />
                ) : (
                  <MenuIcon />
                )
              }
              onClick={() =>
                setCustomOpen((value) => !value)
              }
            >
              {customOpen ? "Close" : "Open"}
            </Button>
          </div>

          <ShellMobileNav
            navigation={navigation}
            pathname="/projects"
            branding={branding}
            className="shell-demo-mobile-nav-custom"
            open={customOpen}
            onClose={() => setCustomOpen(false)}
          />
        </div>
      </DemoSection>

      <DemoDocumentation
        importCode={`import { ShellMobileNav } from "shivanya-shell";`}
        usageCode={`<ShellMobileNav
  navigation={navigation}
  pathname="/projects"
  branding={branding}
/>

<ShellMobileNav
  navigation={navigation}
  pathname="/projects"
  branding={branding}
  open={open}
  onClose={() => setOpen(false)}
  size={340}
/>`}
      />
    </section>
  );
}