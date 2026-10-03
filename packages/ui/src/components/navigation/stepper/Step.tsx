"use client";

import React, {
  forwardRef,
  memo,
} from "react";

import { cn } from "../../../utils";

export type StepProps = {
  index?: number;
  activeStep?: number;
  isLast?: boolean;
  title?: React.ReactNode;
  description?: React.ReactNode;
  icon?: React.ReactNode;
  status?: "pending" | "active" | "completed" | "error" | "disabled";
  color?: string;
  size?: string;
  disabled?: boolean;
  onClick?: () => void;
};

const Step = forwardRef<HTMLDivElement, StepProps>(
  function Step(
    {
      index = 0,
      activeStep = 0,
      isLast = false,
      title,
      description,
      icon,
      status,
      color = "primary",
      size = "md",
      disabled = false,
      onClick,
    },
    ref,
  ) {
    const resolvedStatus =
      status ??
      (disabled
        ? "disabled"
        : index < activeStep
          ? "completed"
          : index === activeStep
            ? "active"
            : "pending");

    const displayIcon =
      icon ??
      (resolvedStatus === "completed"
        ? "✓"
        : resolvedStatus === "error"
          ? "×"
          : index + 1);

    return (
      <div
        ref={ref}
        className={cn(
          "step",
          `step-${resolvedStatus}`,
          `stepColor-${color}`,
          `stepSize-${size}`,
          disabled && "stepDisabled",
          onClick && !disabled && "stepClickable",
        )}
        onClick={
          disabled
            ? undefined
            : onClick
        }
      >
        <div className="stepIndicator">
          <div className="stepCircle">
            {displayIcon}
          </div>

          {!isLast && (
            <div
              className={cn(
                "stepLine",
                index < activeStep &&
                  "stepLineCompleted",
              )}
            />
          )}
        </div>

        <div className="stepContent">
          <div className="stepTitle">
            {title}
          </div>

          {description && (
            <div className="stepDescription">
              {description}
            </div>
          )}
        </div>
      </div>
    );
  },
);

Step.displayName = "Step";

export default memo(Step);