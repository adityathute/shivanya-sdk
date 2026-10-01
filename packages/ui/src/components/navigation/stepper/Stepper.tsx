"use client";
import React, {
  Children,
  cloneElement,
  forwardRef,
  memo,
  useState,
} from "react";

import { cn } from "../../../utils";
import { STEPPER_DEFAULTS } from "./config";

type StepChildProps = {
  index?: number;
  activeStep?: number;
  isLast?: boolean;
  orientation?: string;
  color?: string;
  size?: string;
  disabled?: boolean;
  status?:
    | "pending"
    | "active"
    | "completed"
    | "error"
    | "disabled";
  onClick?: () => void;
};

const Stepper = forwardRef<HTMLDivElement, any>(
  function Stepper(props, ref) {
    const {
      children,
      activeStep: controlledActiveStep,
      defaultActiveStep =
        STEPPER_DEFAULTS.activeStep,
      orientation =
        STEPPER_DEFAULTS.orientation,
      size =
        STEPPER_DEFAULTS.size,
      color =
        STEPPER_DEFAULTS.color,
      clickable =
        STEPPER_DEFAULTS.clickable,
      disabled =
        STEPPER_DEFAULTS.disabled,
      onStepChange,
      onStepClick,
      className,
      ...rest
    } = props;

    const [internalActiveStep, setInternalActiveStep] =
      useState(defaultActiveStep);

    const activeStep =
      controlledActiveStep ??
      internalActiveStep;

    const steps =
      Children.toArray(children);

    const setStep = (index: number) => {
      if (disabled || !clickable) {
        return;
      }

      if (
        controlledActiveStep ===
        undefined
      ) {
        setInternalActiveStep(index);
      }

      onStepChange?.(index);
      onStepClick?.(index);
    };

    const progress =
      steps.length > 1
        ? Math.min(
            100,
            Math.max(
              0,
              (activeStep /
                (steps.length - 1)) *
                100,
            ),
          )
        : 0;

    return (
      <div
        ref={ref}
        className={cn(
          "stepper",
          `stepper-${orientation}`,
          `stepper-${size}`,
          `stepperColor-${color}`,
          disabled &&
            "stepperDisabled",
          className,
        )}
        data-progress={progress}
        {...rest}
      >
        {steps.map(
          (child, index) => {
            if (
              !React.isValidElement(
                child,
              )
            ) {
              return child;
            }

            const step =
              child as React.ReactElement<StepChildProps>;

            const childProps =
              step.props;

            const childDisabled =
              disabled ||
              Boolean(
                childProps.disabled,
              );

            const status =
              childProps.status ??
              (childDisabled
                ? "disabled"
                : index < activeStep
                  ? "completed"
                  : index === activeStep
                    ? "active"
                    : "pending");

            return cloneElement(
              step,
              {
                key:
                  step.key ??
                  index,
                index,
                activeStep,
                isLast:
                  index ===
                  steps.length - 1,
                orientation,
                color,
                size,
                disabled:
                  childDisabled,
                status,
                onClick:
                  clickable &&
                  !childDisabled
                    ? () =>
                        setStep(
                          index,
                        )
                    : childProps.onClick,
              },
            );
          },
        )}
      </div>
    );
  },
);

Stepper.displayName =
  "Stepper";

export default memo(
  Stepper,
);
